import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, ExternalLink, ChevronDown, Waves, AlertCircle } from 'lucide-react';
import { parsePodcastFeeds } from '../utils/podcastParser';

const FEED_URLS = [
  'https://media.rss.com/factotum-podcast/feed.xml',
  'https://anchor.fm/s/10be31b2c/podcast/rss',
];

const PLATFORMS = [
  { name: 'Spotify', url: 'https://open.spotify.com/show/5Qkarsa3wRaPGiCr5DbEo8' },
  { name: 'RSS.com', url: 'https://rss.com/podcasts/factotum-podcast/' },
  { name: 'YTpodcast', url: 'https://www.youtube.com/@FactotumPodcast' },
];

const PodcastsGrid = () => {
  const [episodes, setEpisodes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFeeds = async () => {
      try {
        setLoading(true);
        const parsed = await parsePodcastFeeds(FEED_URLS);

        if (!parsed.length) {
          setError('No se pudieron cargar episodios desde los feeds RSS.');
        } else {
          setEpisodes(parsed);
          setError(null);
        }
      } catch (err) {
        console.error(err);
        setError('Error al cargar los podcasts. Intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    loadFeeds();
  }, []);

  const displayed = episodes.slice(0, visibleCount);
  const hasMore = visibleCount < episodes.length;

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-blue-300">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}>
          <Music size={48} />
        </motion.div>
        <p className="text-sm text-gray-400">Conectando con los feeds de Factotum Podcast…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center space-y-3">
        <AlertCircle className="w-10 h-10 text-red-300 mx-auto" />
        <p className="text-red-200 font-medium">{error}</p>
        <p className="text-gray-400 text-sm">Verifica tu conexión o vuelve a intentarlo más tarde.</p>
      </div>
    );
  }

  if (!episodes.length) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center text-gray-400">
        No hay episodios disponibles en este momento.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-white/10 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-blue-300 mb-1">Escúchalo donde quieras</p>
            <h3 className="text-2xl font-semibold">Factotum Podcast</h3>
            <p className="text-gray-400 text-sm">Feeds siempre actualizados desde RSS.com y Anchor.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto">
            {PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition"
              >
                <span>{platform.name}</span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {displayed.map((ep, idx) => (
          <motion.article
            key={ep.id}
            className="border border-white/10 rounded-xl p-6 hover:border-blue-500/40 hover:bg-white/5 transition backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-shrink-0">
                {ep.image ? (
                  <img
                    src={ep.image}
                    alt={ep.title}
                    loading="lazy"
                    decoding="async"
                    className="w-32 h-32 object-cover rounded-xl border border-white/10"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Waves size={40} className="text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-2 mb-3">
                  <h3 className="text-lg font-semibold leading-snug">{ep.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-3">{ep.description}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wide text-gray-400 mb-4">
                  <span>Publicado: {ep.formattedDate}</span>
                  <span>Duración: {ep.duration}</span>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-300 mb-2">Reproducir episodio</p>
                  <audio controls className="w-full" preload="none" src={ep.audioUrl} />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition"
          >
            Cargar Más <ChevronDown size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PodcastsGrid;
