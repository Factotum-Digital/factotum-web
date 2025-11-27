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

// Array de imágenes profesionales (fallback atractivo)
const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1516321318423-f06f70ab7cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1677442d019cecf8d50032744871d3f51b3e89f47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516534775068-bb6c4e2b6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
];

const useMediumPosts = (username) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const processMediumPosts = useCallback((data) => {
    if (!data?.items?.length) return [];

    return data.items.map((item, index) => {
      const extractedImage = item.thumbnail || extractImageFromHTML(item.content);
      const image = extractedImage || PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];

      let link = item.link || '';
      if (link && !link.startsWith('http')) {
        link = `https://medium.com${link.startsWith('/') ? '' : '/'}${link}`;
      }

      return {
        id: item.guid,
        title: item.title,
        excerpt: extractTextFromHTML(item.description || ''),
        content: item.content || '',
        date: formatMediumDate(item.pubDate),
        readTime: '5 min',
        category: item.categories?.[0] || 'Blog',
        image,
        link,
        author: item.author || 'Factotum Digital',
      };
    });
  }, []);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);

      const cachedData = localStorage.getItem(CACHE_KEY);
      const now = new Date().getTime();

      if (cachedData) {
        try {
          const { timestamp, data } = JSON.parse(cachedData);
          const cacheAge = (now - timestamp) / (1000 * 60);

          if (cacheAge < CACHE_TIME_MINUTES) {
            console.log('Usando datos de la cache');
            setPosts(processMediumPosts(data));
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error('Error al procesar cache:', e);
        }
      }

      const rssUrl = getMediumRssUrl(username);
      const apiUrl = `${RSS_API_URL}?rss_url=${encodeURIComponent(rssUrl)}`;
      console.log('Solicitando datos a:', apiUrl);

      const response = await fetch(apiUrl);
      console.log('Respuesta de la API:', response.status);

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();
      console.log('Datos recibidos:', data);

      if (data.status === 'ok') {
        const cacheData = {
          timestamp: now,
          data,
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
        setPosts(processMediumPosts(data));
      } else {
        throw new Error(data.message || 'Error');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('No se pudieron cargar los articulos. Mostrando articulos de muestra.');
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
