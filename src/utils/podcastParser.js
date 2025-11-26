const PROXY_URL = 'https://api.allorigins.win/get?url=';

const getTextContent = (parent, selector) => {
  if (!parent) return '';
  const direct = parent.getElementsByTagName(selector)[0];
  if (direct) return direct.textContent || '';
  const namespaced = parent.querySelector(selector.includes(':') ? selector.replace(':', '\\:') : selector);
  return namespaced?.textContent || '';
};

const getDuration = (item) => {
  const durationText =
    getTextContent(item, 'itunes:duration') ||
    getTextContent(item, 'duration') ||
    item.querySelector('[name="duration"]')?.textContent ||
    '';

  if (!durationText) return 'N/A';
  if (!Number.isNaN(Number(durationText))) {
    const totalSeconds = Number(durationText);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  return durationText;
};

const cleanHTML = (html) => {
  if (!html) return '';
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

export const parsePodcastFeed = async (feedUrl, maxEpisodes = 12) => {
  try {
    const response = await fetch(`${PROXY_URL}${encodeURIComponent(feedUrl)}`);
    if (!response.ok) {
      throw new Error('No se pudo acceder al feed.');
    }
    const data = await response.json();
    const xmlString = data.contents;

    if (!xmlString) return [];

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
      console.error('Error parsing XML para feed', feedUrl);
      return [];
    }

    const channelImage =
      xmlDoc.querySelector('channel > image > url')?.textContent ||
      xmlDoc.querySelector('itunes\\:image')?.getAttribute('href') ||
      '';

    const items = Array.from(xmlDoc.getElementsByTagName('item'));
    const episodes = [];

    items.slice(0, maxEpisodes).forEach((item, index) => {
      const title = cleanHTML(getTextContent(item, 'title')) || 'Episodio sin título';
      const description = cleanHTML(getTextContent(item, 'description')) || 'Sin descripción disponible';
      const pubDate = getTextContent(item, 'pubDate');
      const audioUrl =
        item.getElementsByTagName('enclosure')[0]?.getAttribute('url') ||
        item.querySelector('enclosure')?.getAttribute('url') ||
        '';
      const image =
        item.querySelector('itunes\\:image')?.getAttribute('href') ||
        channelImage;

      if (!audioUrl) return;

      episodes.push({
        id: `${feedUrl}-${index}`,
        title,
        description: description.substring(0, 160),
        date: pubDate ? new Date(pubDate) : new Date(),
        formattedDate: pubDate ? new Date(pubDate).toLocaleDateString('es-ES') : 'Fecha no disponible',
        duration: getDuration(item),
        audioUrl,
        image,
      });
    });

    return episodes;
  } catch (error) {
    console.error('Error fetching podcast feed:', error);
    return [];
  }
};

export const parsePodcastFeeds = async (feedUrls = []) => {
  if (!Array.isArray(feedUrls) || feedUrls.length === 0) return [];

  const results = await Promise.allSettled(feedUrls.map((url) => parsePodcastFeed(url)));
  const allEpisodes = results
    .filter((res) => res.status === 'fulfilled')
    .flatMap((res) => res.value);

  return allEpisodes.sort((a, b) => b.date - a.date);
};
