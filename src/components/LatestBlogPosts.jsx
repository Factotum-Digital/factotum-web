import React from 'react';
import { ArrowRight } from 'lucide-react';

const LatestBlogPosts = ({ limit = 6 }) => {
  const posts = [
    {
      title: '5 Estrategias de YouTube SEO que funcionan en 2025',
      excerpt: 'Descubre las tácticas probadas para aumentar visualizaciones y suscriptores.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=900',
      link: '/blog',
    },
    {
      title: 'AEO: Cómo posicionarte en ChatGPT y Perplexity',
      excerpt: 'Guía completa sobre Answer Engine Optimization para IA.',
      image: 'https://images.pexels.com/photos/3862614/pexels-photo-3862614.jpeg?auto=compress&cs=tinysrgb&w=900',
      link: '/blog',
    },
    {
      title: 'Podcast: De 0 a 10K oyentes en 6 meses',
      excerpt: 'Estrategia probada para crecer en podcasting.',
      image: 'https://images.pexels.com/photos/2101143/pexels-photo-2101143.jpeg?auto=compress&cs=tinysrgb&w=900',
      link: '/blog',
    },
    {
      title: 'Publicar tu libro: KDP vs Autoedición',
      excerpt: 'Comparativa completa entre autopublicación y editorial tradicional.',
      image: 'https://images.pexels.com/photos/374757/pexels-photo-374757.jpeg?auto=compress&cs=tinysrgb&w=900',
      link: '/blog',
    },
    {
      title: 'Blueprint para tu Newsletter Viral',
      excerpt: 'Crea un boletín irresistible con funnels automatizados.',
      image: 'https://images.pexels.com/photos/6476588/pexels-photo-6476588.jpeg?auto=compress&cs=tinysrgb&w=900',
      link: '/blog',
    },
    {
      title: 'Domina Shorts y Reels con IA',
      excerpt: 'Framework para producir microvideos diarios sin quemarte.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900',
      link: '/blog',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Últimos Artículos</h2>
          <a href="/blog" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
            Ver todos <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, limit).map((post, idx) => (
            <a
              key={post.title}
              href={post.link}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition h-full flex flex-col">
                <div className="h-32 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="font-semibold text-base group-hover:text-blue-400 transition line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 flex-1">{post.excerpt}</p>
                  <span className="text-blue-400 text-xs font-semibold">Leer más →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
