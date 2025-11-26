import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Calendar, ChevronDown } from 'lucide-react';

const VideosGrid = () => {
  const videos = [
    {
      id: '1',
      title: 'AEO en acción: cómo rankear en SGE y Perplexity',
      youtubeId: 'WZ-iCJQlzSs',
      views: '8.2K',
      date: '2025-11-24',
      category: 'AEO',
      duration: '17:05',
    },
    {
      id: '2',
      title: 'Monetización 2025: Crea productos escalables',
      youtubeId: '_uNbmAqvVCQ',
      views: '9.9K',
      date: '2025-11-18',
      category: 'Marketing',
      duration: '21:10',
    },
    {
      id: '3',
      title: 'YouTube SEO vs IA Generativa: la guía definitiva',
      youtubeId: 's-hsaJUcFgs',
      views: '14.1K',
      date: '2025-11-12',
      category: 'YouTube SEO',
      duration: '28:44',
    },
    {
      id: '4',
      title: 'Automatiza tu estudio de contenido con IA',
      youtubeId: 'PiMZEP8ZHGU',
      views: '10.2K',
      date: '2025-10-30',
      category: 'Marketing',
      duration: '23:11',
    },
    {
      id: '5',
      title: 'Storytelling para posicionar tu marca personal',
      youtubeId: '1eFCQIIzhGA',
      views: '6.5K',
      date: '2025-10-20',
      category: 'YouTube SEO',
      duration: '15:38',
    },
    {
      id: '6',
      title: 'Checklist de lanzamiento para productos digitales',
      youtubeId: 'qakwb0t5vgY',
      views: '8.1K',
      date: '2025-10-12',
      category: 'Marketing',
      duration: '18:27',
    },
  ];
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = videos.filter((video) => selectedCategory === 'all' || video.category === selectedCategory);
  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {['all', 'YouTube SEO', 'AEO', 'Marketing'].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(6);
            }}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {cat === 'all' ? 'Todos' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((video, idx) => (
          <motion.a
            key={video.id}
            href={`https://youtube.com/watch?v=${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <div className="relative overflow-hidden rounded-lg aspect-video bg-black mb-3">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                <Play size={48} className="text-white opacity-0 group-hover:opacity-100 transition" />
              </div>
              <span className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white">{video.duration}</span>
            </div>

            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-400 transition">{video.title}</h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Eye size={14} /> {video.views}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} /> {new Date(video.date).toLocaleDateString('es-ES')}
              </div>
            </div>
            <span className="inline-block mt-2 px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">{video.category}</span>
          </motion.a>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition"
          >
            Cargar Más <ChevronDown size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideosGrid;
