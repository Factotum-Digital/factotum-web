// Configuración centralizada para la integración con Medium
export const MEDIUM_USERNAME = '@FactotumBlog';
export const RSS_API_URL = 'https://api.rss2json.com/v1/api.json';
export const CACHE_TIME_MINUTES = 30;

// Artículos de respaldo (los actuales en Blog.jsx)
export const FALLBACK_ARTICLES = [
  {
    id: 1,
    title: '5 Estrategias de YouTube SEO que funcionan en 2025',
    excerpt: 'Descubre las tácticas probadas para aumentar visualizaciones y suscriptores usando optimización SEO en YouTube.',
    content: '...',
    date: '2025-11-25',
    readTime: '8 min',
    category: 'YouTube SEO',
    image: 'https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '/blog/youtube-seo-2025',
  },
  // ... otros 5 artículos ...
];

/**
 * Extrae la primera imagen del contenido HTML
 */
export const extractImageFromHTML = (html) => {
  if (!html) return null;
  const imgMatch = html.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : null;
};

/**
 * Limpia el HTML y extrae texto plano
 */
export const extractTextFromHTML = (html) => {
  if (!html) return '';
  // Eliminar etiquetas HTML
  const text = html
    .replace(/<[^>]*>?/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
  // Limitar a 150 caracteres
  return text.length > 150 ? `${text.substring(0, 147)}...` : text;
};

/**
 * Formatea la fecha de Medium a formato legible
 */
export const formatMediumDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/**
 * Obtiene la URL del feed RSS de Medium
 */
export const getMediumRssUrl = (username) => {
  // Mantener el @ en el nombre de usuario para Medium
  const cleanUsername = username.startsWith('@') ? username : `@${username}`;
  const url = `https://medium.com/feed/${cleanUsername}`;
  console.log('URL del feed de Medium:', url);
  return url;
};
