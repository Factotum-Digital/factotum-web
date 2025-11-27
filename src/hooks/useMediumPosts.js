import { useState, useEffect, useCallback } from 'react';
import {
  RSS_API_URL,
  FALLBACK_ARTICLES,
  CACHE_TIME_MINUTES,
  extractImageFromHTML,
  extractTextFromHTML,
  formatMediumDate,
  getMediumRssUrl,
} from '../data/mediumConfig';

const CACHE_KEY = 'medium_posts_cache';

const useMediumPosts = (username) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const processMediumPosts = useCallback((data) => {
    if (!data?.items?.length) return [];

    return data.items.map((item) => {
      const image = extractImageFromHTML(item.content) || 
                   'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      
      return {
        id: item.guid,
        title: item.title,
        excerpt: extractTextFromHTML(item.description),
        content: item.content,
        date: formatMediumDate(item.pubDate),
        readTime: '5 min', // No disponible en la API, valor por defecto
        category: item.categories?.[0] || 'Blog',
        image,
        link: item.link,
        author: item.author,
      };
    });
  }, []);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      
      // Verificar caché
      const cachedData = localStorage.getItem(CACHE_KEY);
      const now = new Date().getTime();
      
      if (cachedData) {
        const { timestamp, data } = JSON.parse(cachedData);
        const cacheAge = (now - timestamp) / (1000 * 60); // en minutos
        
        if (cacheAge < CACHE_TIME_MINUTES) {
          setPosts(processMediumPosts(data));
          setLoading(false);
          return;
        }
      }

      // Hacer fetch a la API
      const rssUrl = getMediumRssUrl(username);
      const response = await fetch(`${RSS_API_URL}?rss_url=${encodeURIComponent(rssUrl)}`);
      
      if (!response.ok) throw new Error('Error al cargar los artículos de Medium');
      
      const data = await response.json();
      
      if (data.status === 'ok') {
        // Guardar en caché
        const cacheData = {
          timestamp: now,
          data,
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
        
        setPosts(processMediumPosts(data));
      } else {
        throw new Error(data.message || 'Error al procesar los artículos');
      }
    } catch (err) {
      console.error('Error fetching Medium posts:', err);
      setError('No se pudieron cargar los artículos. Mostrando artículos de muestra.');
      setPosts(FALLBACK_ARTICLES);
    } finally {
      setLoading(false);
    }
  }, [username, processMediumPosts]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading, error };
};

export default useMediumPosts;
