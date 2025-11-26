import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play, Mic2, BookOpen, BookMarked } from 'lucide-react';
import VideosGrid from '../components/VideosGrid';
import PodcastsGrid from '../components/PodcastsGrid';
import CursosGrid from '../components/CursosGrid';
import LibrosGrid from '../components/LibrosGrid';

const Contenido = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const tabs = [
    { id: 'videos', name: 'Videos', icon: Play, count: '15+' },
    { id: 'podcasts', name: 'Podcasts', icon: Mic2, count: '10+' },
    { id: 'cursos', name: 'Cursos', icon: BookOpen, count: '6' },
    { id: 'libros', name: 'Libros', icon: BookMarked, count: '2' },
  ];

  return (
    <>
      <Helmet>
        <title>Mi Contenido - Factotum Digital</title>
        <meta
          name="description"
          content="Explora videos, podcasts, cursos y libros sobre AI, YouTube SEO, marketing digital y crecimiento de contenido."
        />
      </Helmet>

      <section className="hero-mini py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            Mi Contenido
          </motion.h1>
          <p className="text-gray-400 text-lg">Más de 150+ recursos para tu aprendizaje</p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-all border-b-2 ${
                  activeTab === tab.id ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon size={20} />
                {tab.name}
                <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-xs">{tab.count}</span>
              </button>
            ))}
          </div>

          <div className="mb-12">
            {activeTab === 'videos' && <VideosGrid />}
            {activeTab === 'podcasts' && <PodcastsGrid />}
            {activeTab === 'cursos' && <CursosGrid />}
            {activeTab === 'libros' && <LibrosGrid />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contenido;
