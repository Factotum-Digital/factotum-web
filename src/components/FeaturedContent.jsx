import React from 'react';
import { motion } from 'framer-motion';

const FeaturedContent = () => {
  const featured = [
    {
      type: 'video',
      title: 'YouTube SEO 2025 - Guía Completa',
      image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      link: '/contenido',
    },
    {
      type: 'podcast',
      title: 'Episodio: AEO Mastery',
      image: 'https://images.unsplash.com/photo-1454922915609-78549ad709bb?auto=format&fit=crop&q=80&w=1200',
      link: '/contenido',
    },
    {
      type: 'curso',
      title: 'YouTube SEO Masterclass',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
      link: '/academy',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contenido Destacado</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.link}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-400">{item.type}</span>
              <h3 className="font-semibold group-hover:text-blue-400 transition">{item.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
