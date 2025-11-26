import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [articles] = useState([
    {
      id: 1,
      title: '5 Estrategias de YouTube SEO que funcionan en 2025',
      slug: 'youtube-seo-2025',
      excerpt:
        'Descubre las tácticas probadas para aumentar visualizaciones y suscriptores usando optimización SEO en YouTube.',
      content:
        '# 5 Estrategias de YouTube SEO que funcionan en 2025\n\n## 1. Título Optimizado (60 caracteres)\nTus títulos deben contener la palabra clave principal al inicio...',
      author: 'Factotum Digital',
      date: '2025-11-25',
      readTime: '8 min',
      category: 'YouTube SEO',
      image: 'https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 2,
      title: 'AEO: Cómo posicionarte en ChatGPT y Perplexity',
      slug: 'aeo-chatgpt-perplexity',
      excerpt: 'Guía completa sobre Answer Engine Optimization para que tu contenido sea la respuesta en IA.',
      content: '# AEO: Cómo posicionarte en ChatGPT y Perplexity\n\nEl futuro de la búsqueda es con IA...',
      author: 'Factotum Digital',
      date: '2025-11-20',
      readTime: '10 min',
      category: 'AEO',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 3,
      title: 'Podcast: De 0 a 10K oyentes en 6 meses',
      slug: 'podcast-crecimiento',
      excerpt: 'Estrategia probada para crecer en podcasting: distribución, promoción y contenido que engancha.',
      content: '# Podcast: De 0 a 10K oyentes en 6 meses\n\nSi quieres lanzar un podcast exitoso...',
      author: 'Factotum Digital',
      date: '2025-11-15',
      readTime: '12 min',
      category: 'Podcasting',
      image: 'https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 4,
      title: 'Publicar tu libro: KDP vs Autoedición',
      slug: 'libro-kdp-autoedicion',
      excerpt: 'Comparativa completa: Amazon KDP vs Autoedición tradicional. Costos, ventajas y desventajas.',
      content: '# Publicar tu libro: KDP vs Autoedición\n\nLa era del autopublishing permite a cualquiera...',
      author: 'Factotum Digital',
      date: '2025-11-10',
      readTime: '9 min',
      category: 'Publishing',
      image: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 5,
      title: 'Blueprint para newsletters que convierten',
      slug: 'newsletter-blueprint',
      excerpt: 'Estructura tus campañas de email con funnels personalizados y automatizaciones IA.',
      content: '# Blueprint para newsletters que convierten\n\nTodo parte de entender el journey del lector...',
      author: 'Factotum Digital',
      date: '2025-11-05',
      readTime: '7 min',
      category: 'Email Marketing',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 6,
      title: 'Contenido corto: Domina Shorts y Reels',
      slug: 'short-form-contenido',
      excerpt: 'Checklist para producir microvideos diarios sin quemar a tu equipo creativo.',
      content: '# Contenido corto que vende\n\nLos formatos verticales son prioridad...',
      author: 'Factotum Digital',
      date: '2025-10-30',
      readTime: '6 min',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Blog - Factotum Digital</title>
        <meta
          name="description"
          content="Artículos sobre YouTube SEO, AEO, Podcasting, Marketing Digital y Publicación de Libros."
        />
      </Helmet>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-4">Blog Factotum</h1>
            <p className="text-gray-400 text-lg">Artículos sobre crecimiento digital, marketing y contenido</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article
                key={article.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="overflow-hidden aspect-[16/9] bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover block"
                  />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="px-2 py-1 bg-blue-500/15 text-blue-300 rounded-full font-semibold">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold leading-tight line-clamp-2 group-hover:text-blue-400 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3 flex-1">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {new Date(article.date).toLocaleDateString('es-ES')}
                    </div>
                    <a
                      href={`#${article.slug}`}
                      className="text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1"
                    >
                      Leer <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
