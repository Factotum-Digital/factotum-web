export const MEDIUM_USERNAME = '@FactotumBlog';
export const RSS_API_URL = 'https://api.rss2json.com/v1/api.json';
export const CACHE_TIME_MINUTES = 30;

export const FALLBACK_ARTICLES = [];

export const extractImageFromHTML = (html) => {
  if (!html) return null;
  
  // IMPORTANTE: Ignorar URLs de tracking/stat de Medium que no son imagenes reales
  // Medium envia URLs como: https://medium.com/_/stat?event=post.clientViewed...
  // Estas NO son imagenes, son pixels de tracking
  
  // NO buscar en Medium porque Medium NO envia imagenes en RSS
  // Solo devolver null para que use PLACEHOLDER_IMAGES
  return null;
};

export const extractTextFromHTML = (html) => {
  if (!html) return '';
  const text = html
    .replace(/<[^>]*>?/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > 150 ? `${text.substring(0, 147)}...` : text;
};

export const formatMediumDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const getMediumRssUrl = (username) => {
  const cleanUsername = username.startsWith('@') ? username : `@${username}`;
  const url = `https://medium.com/feed/${cleanUsername}`;
  console.log('URL del feed de Medium:', url);
  return url;
};
