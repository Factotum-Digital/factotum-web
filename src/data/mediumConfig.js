export const MEDIUM_USERNAME = '@FactotumBlog';
export const RSS_API_URL = 'https://api.rss2json.com/v1/api.json';
export const CACHE_TIME_MINUTES = 30;

export const FALLBACK_ARTICLES = [];

export const extractImageFromHTML = (html) => {
  if (!html) return null;

  // 1. Buscar la primera etiqueta <img> y capturar el contenido de src="..."
const imgRegex = new RegExp('<img[^>]+src="([^"]+)"', 'i');
  const match = html.match(imgRegex);
  if (match && match[1]) {
    const src = match[1];

    // 2. IMPORTANTE: Filtrar el pixel de tracking de Medium
    // Medium inserta una imagen invisible de 1x1 para estadísticas que suele ser la primera
    if (src.includes('stat?event') || src.includes('medium.com/_/stat')) {
      // Si la primera es tracking, intentamos buscar la siguiente imagen en el texto restante
      const remainingHtml = html.substring(match.index + match[0].length);
      const nextMatch = remainingHtml.match(imgRegex);
      if (nextMatch && nextMatch[1]) {
        return nextMatch[1];
      }
      return null;
    }

    return src;
  }

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
