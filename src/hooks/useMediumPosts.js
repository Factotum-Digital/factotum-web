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
      
      // Asegurar que el enlace sea una URL completa
      let link = item.link || '';
      if (link && !link.startsWith('http')) {
        // Si el enlace es relativo, convertirlo a absoluto
        link = `https://medium.com${link.startsWith('/') ? '' : '/'}${link}`;
      }
      
      return {
        id: item.guid,
        title: item.title,
        excerpt: extractTextFromHTML(item.description || ''),
        content: item.content || '',
        date: formatMediumDate(item.pubDate),
        readTime: '5 min', // No disponible en la API, valor por defecto
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
      
      // Verificar caché
      const cachedData = localStorage.getItem(CACHE_KEY);
      const now = new Date().getTime();
      
      if (cachedData) {
        try {
          const { timestamp, data } = JSON.parse(cachedData);
          const cacheAge = (now - timestamp) / (1000 * 60); // en minutos
          
          if (cacheAge < CACHE_TIME_MINUTES) {
            console.log('Usando datos de la caché');
            setPosts(processMediumPosts(data));
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error('Error al procesar caché:', e);
        }
      }

      // Hacer fetch a la API
      const rssUrl = getMediumRssUrl(username);
      const apiUrl = `${RSS_API_URL}?rss_url=${encodeURIComponent(rssUrl)}`;
      console.log('Solicitando datos a:', apiUrl);
      
      const response = await fetch(apiUrl);
      console.log('Respuesta de la API:', response.status, response.statusText);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error en la respuesta:', errorText);
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Datos recibidos:', data);
      
      if (data.status === 'ok') {
        // Guardar en caché
        const cacheData = {
          timestamp: now,
          data,
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
        
        setPosts(processMediumPosts(data));
      } else {
        console.error('Error en los datos de la API:', data);
        throw new Error(data.message || 'Error al procesar los artículos');
      }
    } catch (err) {
      console.error('Error al obtener los artículos:', err);
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
