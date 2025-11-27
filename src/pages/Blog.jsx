import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import useMediumPosts from '../hooks/useMediumPosts';
import { FALLBACK_ARTICLES } from '../data/mediumConfig';

const Blog = () => {
  const { posts: articles, loading, error } = useMediumPosts('@FactotumBlog');
  
  // Datos de ejemplo para el skeleton loader
  const skeletonData = Array(6).fill(0).map((_, i) => ({
    id: `skeleton-${i}`,
    isSkeleton: true
  }));
  
  const displayArticles = loading ? skeletonData : (error ? FALLBACK_ARTICLES : articles);

  return (
    <>
      <Helmet>
        <title>Blog - Factotum Digital</title>
        <meta
          name="description"
          content={articles[0]?.excerpt || "Artículos sobre YouTube SEO, AEO, Podcasting, Marketing Digital y Publicación de Libros."}
        />
        <link rel="canonical" href="https://medium.com/@FactotumBlog" />
        <meta property="og:title" content="Blog - Factotum Digital" />
        <meta 
          property="og:description" 
          content={articles[0]?.excerpt || "Artículos sobre YouTube SEO, AEO, Podcasting, Marketing Digital y Publicación de Libros."} 
        />
        <meta property="og:image" content={articles[0]?.image || 'https://factotum-web.vercel.app/og-image.jpg'} />
        <meta property="og:url" content="https://factotum-web.vercel.app/blog" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Blog Factotum Digital",
            "url": "https://factotum-web.vercel.app/blog"
          })}
        </script>
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
          {error && (
            <div className="col-span-full text-center py-4 px-4 bg-red-500/10 text-red-300 rounded-lg mb-6">
              {error} Mostrando artículos de muestra.
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {displayArticles.map((article, idx) => (
              <motion.a
                href={article.isSkeleton ? '#' : article.link}
                target={article.isSkeleton ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={(e) => article.isSkeleton && e.preventDefault()}
                key={article.id || `skeleton-${idx}`}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition flex flex-col h-full cursor-pointer block no-underline group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="overflow-hidden aspect-[16/9] bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative">
                  {article.isSkeleton ? (
                    <div className="w-full h-full bg-gray-700/50 animate-pulse" />
                  ) : (
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover block"
                    />
                  )}
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  {article.isSkeleton ? (
                    <>
                      <div className="h-5 w-24 bg-gray-700/50 rounded-full animate-pulse mb-2" />
                      <div className="h-6 w-full bg-gray-700/50 rounded-md animate-pulse mb-2" />
                      <div className="space-y-2 flex-1">
                        <div className="h-4 w-full bg-gray-700/50 rounded animate-pulse" />
                        <div className="h-4 w-5/6 bg-gray-700/50 rounded animate-pulse" />
                        <div className="h-4 w-4/6 bg-gray-700/50 rounded animate-pulse" />
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="h-4 w-20 bg-gray-700/50 rounded-full animate-pulse" />
                        <div className="h-4 w-10 bg-gray-700/50 rounded-full animate-pulse" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="px-2 py-1 bg-blue-500/15 text-blue-300 rounded-full font-semibold">
                          {article.category || 'Blog'}
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold leading-tight line-clamp-2 group-hover:text-blue-400 transition">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          {article.date}
                        </div>
                        <span className="text-blue-400 group-hover:text-blue-300 transition inline-flex items-center gap-1">
                          Leer <ArrowRight size={12} />
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
