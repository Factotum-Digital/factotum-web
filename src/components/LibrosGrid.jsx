import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked, ExternalLink } from 'lucide-react';

const libros = [
  {
    id: 1,
    title: 'Libro 1: Publica y Vende en Amazon KDP',
    description: 'Guía táctica para lanzar tu primer libro autopublicado y posicionarlo en rankings.',
    link: 'https://a.co/d/cdxwb8C',
    format: 'Kindle + Tapa Blanda',
  },
  {
    id: 2,
    title: 'Libro 2: Contenido Viral en 30 Días',
    description: 'Framework para planear y producir contenido multiplataforma con sistemas IA.',
    link: '#',
    format: 'PDF + Audiolibro',
  },
];

const LibrosGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {libros.map((libro, idx) => (
        <motion.div
          key={libro.id}
          className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-blue-500/40 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="flex items-center gap-3">
            <BookMarked className="text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold">{libro.title}</h3>
              <p className="text-sm text-gray-400">{libro.format}</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm flex-1">{libro.description}</p>

          <a
            href={libro.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            Ver en Amazon <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default LibrosGrid;
