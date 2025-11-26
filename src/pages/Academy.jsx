import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

const Academy = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'YouTube SEO Masterclass',
      category: 'YouTube',
      level: 'Principiante',
      price: 'Gratuito',
      lessons: 5,
      duration: '2 horas',
      description: 'Domina el algoritmo de YouTube: títulos, descripciones, tags y retención.',
      features: ['5 videos', 'Plantillas descargables', 'Checklist SEO'],
      link: '#contenido',
    },
    {
      id: 2,
      title: 'Podcast Growth Blueprint',
      category: 'Podcasting',
      level: 'Intermedio',
      price: 'Premium',
      lessons: 12,
      duration: '5 horas',
      description: 'Plan paso a paso para crecer de 0 a 10K oyentes en 6 meses.',
      features: ['12 módulos', 'Templates', 'Estrategia paso a paso'],
      link: '#contacto',
    },
    {
      id: 3,
      title: 'AEO Mastery - Posiciónate en IA',
      category: 'AEO',
      level: 'Avanzado',
      price: 'Premium',
      lessons: 8,
      duration: '4 horas',
      description: 'Optimiza tu contenido para que ChatGPT y Perplexity citen tu marca.',
      features: ['Schema.org', 'Prompts', 'Casos reales'],
      link: '#contacto',
    },
    {
      id: 4,
      title: 'Sistemas de Contenido Viral',
      category: 'Marketing',
      level: 'Intermedio',
      price: 'Gratuito',
      lessons: 6,
      duration: '3 horas',
      description: 'Diseña un calendario que multiplica tus publicaciones sin quemarte.',
      features: ['Automatización', 'Calendario', 'KPIs'],
      link: '#contenido',
    },
    {
      id: 5,
      title: 'Product Lab para Creadores',
      category: 'Marketing',
      level: 'Intermedio',
      price: 'Gratuito',
      lessons: 7,
      duration: '2.5 horas',
      description: 'Diseña y lanza tu primer producto digital acompañando cada paso con plantillas.',
      features: ['Validación', 'Pricing', 'Embudo'],
      link: '#academy',
    },
    {
      id: 6,
      title: 'Narrativa y Newsletter con IA',
      category: 'Marketing',
      level: 'Principiante',
      price: 'Gratuito',
      lessons: 4,
      duration: '1.5 horas',
      description: 'Construye un newsletter semanal usando prompts, automatizaciones y métricas clave.',
      features: ['Prompts', 'Flujos', 'Analítica'],
      link: '#academy',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Academia - Factotum Digital</title>
        <meta
          name="description"
          content="Cursos gratuitos y premium para creadores digitales. YouTube SEO, Podcasting, AEO y más."
        />
      </Helmet>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-4">Academia Factotum</h1>
            <p className="text-gray-400 text-lg">Recursos gratuitos y premium para tu crecimiento digital</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {['all', 'free', 'premium'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedLevel === level ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {level === 'all' ? 'Todos' : level === 'free' ? 'Gratuitos' : 'Premium'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses
              .filter(
                (course) =>
                  selectedLevel === 'all' ||
                  (selectedLevel === 'free' && course.price === 'Gratuito') ||
                  (selectedLevel === 'premium' && course.price === 'Premium'),
              )
              .map((course, idx) => (
                <motion.div
                  key={course.id}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium mb-2">
                        {course.category}
                      </span>
                      <h3 className="text-xl font-bold">{course.title}</h3>
                    </div>
                    <BookOpen className="text-blue-400" />
                  </div>

                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>

                  <div className="space-y-2 mb-6 text-sm text-gray-400">
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="text-blue-400">✓</span> {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-lg font-bold text-blue-400">{course.price}</span>
                    <a href={course.link} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                      Más info <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Academy;
