import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Layers, Users, ChevronDown } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'YouTube SEO Masterclass',
    level: 'Principiante',
    price: 'Gratuito',
    lessons: 5,
    duration: '2 horas',
    description: 'Domina el algoritmo de YouTube: títulos, descripciones, tags y retención.',
    tags: ['Plantillas', 'Checklist', 'Ejemplos reales'],
    link: '#contenido',
  },
  {
    id: 2,
    title: 'Podcast Growth Blueprint',
    level: 'Intermedio',
    price: 'Premium',
    lessons: 12,
    duration: '5 horas',
    description: 'Plan paso a paso para crecer de 0 a 10K oyentes en 6 meses.',
    tags: ['Templates', 'Estrategia 360', 'Distribución'],
    link: '#contacto',
  },
  {
    id: 3,
    title: 'AEO Mastery - Posiciónate en IA',
    level: 'Avanzado',
    price: 'Premium',
    lessons: 8,
    duration: '4 horas',
    description: 'Optimiza tu contenido para que ChatGPT y Perplexity citen tu marca.',
    tags: ['Schema.org', 'Prompts', 'Casos reales'],
    link: '#contacto',
  },
  {
    id: 4,
    title: 'Sistemas de Contenido Viral',
    level: 'Intermedio',
    price: 'Gratuito',
    lessons: 6,
    duration: '3 horas',
    description: 'Diseña un calendario que multiplica tus publicaciones sin quemarte.',
    tags: ['Automatización', 'Calendario', 'KPIs'],
    link: '#contenido',
  },
  {
    id: 5,
    title: 'Product Lab para Creadores',
    level: 'Intermedio',
    price: 'Gratuito',
    lessons: 7,
    duration: '2.5 horas',
    description: 'Diseña y lanza tu primer producto digital acompañando cada paso con plantillas.',
    tags: ['Validación', 'Pricing', 'Embudo'],
    link: '#academy',
  },
  {
    id: 6,
    title: 'Narrativa y Newsletter con IA',
    level: 'Principiante',
    price: 'Gratuito',
    lessons: 4,
    duration: '1.5 horas',
    description: 'Construye un newsletter semanal usando prompts, automatizaciones y métricas clave.',
    tags: ['Prompts', 'Flujos', 'Analítica'],
    link: '#academy',
  },
];

const CursosGrid = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const displayed = courses.slice(0, visibleCount);
  const hasMore = visibleCount < courses.length;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((course, idx) => (
          <motion.div
            key={course.id}
            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-blue-500/40 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/15 text-blue-300 rounded-full text-xs font-semibold">
                <Layers size={14} /> {course.level}
              </span>
              <span className="text-sm font-semibold text-blue-300">{course.price}</span>
            </div>

            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-gray-400 text-sm flex-1">{course.description}</p>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="inline-flex items-center gap-1">
                <BookOpen size={14} /> {course.lessons} lecciones
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} /> {course.duration}
              </span>
            </div>

            <div className="space-y-2 text-sm text-gray-300">
              {course.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <Users size={14} className="text-blue-400" /> {tag}
                </div>
              ))}
            </div>

            <a href={course.link} className="text-blue-400 text-sm font-semibold hover:text-blue-300">
              Ver detalles →
            </a>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount(courses.length)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition"
          >
            Cargar Más <ChevronDown size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CursosGrid;
