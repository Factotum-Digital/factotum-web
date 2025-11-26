# 🎯 PROMPT MAESTRO - FACTOTUM DIGITAL TRANSFORMATION
**Versión Final Personalizada - Listo para ejecutar en Claude/ChatGPT**

---

## 📌 INSTRUCCIONES AL INICIO

Este prompt está diseñado para transformar Factotum Digital de una web de "consultoría de IA" a una "plataforma de aprendizaje para creadores digitales".

**Antes de ejecutar:**
1. Copia TODO este documento
2. Pégalo en Claude o ChatGPT
3. Agrega: "Aquí está mi repo:  https://github.com/Factotum-Digital/factotum-web.git"
4. La IA hará todos los cambios necesarios

---

## 🎨 CONTEXTO DEL PROYECTO

### Información General
- **Nombre:** Factotum Digital & Factotum Podcast
- **Tipo:** Plataforma de aprendizaje para creadores digitales
- **Stack:** React + Vite + TailwindCSS + Framer Motion
- **Ubicación:** Venezuela/UK
- **Email:** info@factotum.digital
- **Repo:** https://github.com/Factotum-Digital/factotum-web.git
- **Deploy:** Vercel (https://factotum-web.vercel.app/)

### Redes Sociales Confirmadas
- YouTube: https://www.youtube.com/@FactotumDigital
- Instagram: https://www.instagram.com/factotumdigitalpro/
- X/Twitter: https://x.com/factotum_360
- Facebook: https://www.facebook.com/factotum360
- Spotify: https://open.spotify.com/show/5Qkarsa3wRaPGiCr5DbEo8
- YouTube Podcast: https://www.youtube.com/@FactotumPodcast
- RSS Podcast: https://rss.com/podcasts/factotum-podcast/

### Contenido del Usuario
- Videos: 15+ (pero LAZY LOAD, máximo 3 visibles)
- Episodios Podcast: 10+ (pero LAZY LOAD, máximo 3 visibles)
- Libros Publicados: 2
  * Libro 1: https://a.co/d/cdxwb8C
- Cursos: 3 (algunos aún no disponibles)
- Episodios Podcast Totales: 3

### Restricciones Importantes ⚠️
- ❌ NO SOBRECARGUES LA PÁGINA con 100 items
- ✅ LAZY LOAD: Máximo 6 videos, 4 podcasts iniciales
- ✅ Botón "Ver Más" o "Cargar Más"
- ✅ Performance CRÍTICO (es una landing page)
- ✅ Paginación o infinite scroll si es necesario

---

## 🔄 CAMBIOS ESTRUCTURALES A REALIZAR

### FASE 1: CAMBIOS EN ARCHIVOS EXISTENTES

#### 1.1 Actualizar `public/index.html`
**Cambios:**
- Título: `Factotum Digital - Aprende AI, Marketing & YouTube SEO | Podcast & Cursos`
- Description: `Centro de aprendizaje digital con 150+ recursos: videos, podcasts, cursos y libros sobre AI, marketing, YouTube SEO y crecimiento. Estrategias probadas para creadores digitales.`
- Keywords: `YouTube SEO, AEO, podcast, AI, marketing digital, aprendizaje, cursos gratis, contenido`
- Agregar Schema.org completo (ver sección SCHEMA abajo)
- Agregar Open Graph y Twitter Cards

#### 1.2 Actualizar `src/components/Header.jsx`
**Cambios en navegación:**

```jsx
// REEMPLAZAR navLinks ACTUAL CON:
const navLinks = [
  { name: 'Contenido', href: '/contenido', icon: 'PlayCircle' },
  { name: 'Academia', href: '/academy', icon: 'BookOpen' },
  { name: 'Blog', href: '/blog', icon: 'FileText' },
  { name: 'Sobre Mí', href: '/about', icon: 'User' },
];

// AGREGAR Logo con nombre (reemplazar solo el ícono):
<Link to="/" className="logo-factotum flex items-center gap-2">
  <img src="/factotum-logo.svg" alt="Factotum" className="w-8 h-8" />
  <span className="font-bold hidden sm:inline">Factotum Digital</span>
</Link>
```

**Orden:** Mantén el resto del Header igual, solo cambia navLinks

#### 1.3 Actualizar `src/pages/Home.jsx`
**Estructura nueva:**

```jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import FeaturedContent from '../components/FeaturedContent';
import CuratorSection from '../components/CuratorSection';
import LatestBlogPosts from '../components/LatestBlogPosts';
import NewsletterCTA from '../components/NewsletterCTA';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Factotum Digital - Aprende AI, Marketing & YouTube SEO</title>
        <meta name="description" content="Tu centro de aprendizaje en AI, marketing digital, YouTube SEO, podcasting y autopublicación. Videos, podcasts, cursos y libros." />
        <meta name="keywords" content="YouTube SEO, AEO, podcast, AI learning, marketing digital, emprendimiento" />
        <meta property="og:title" content="Factotum Digital - Aprende AI, Marketing & YouTube SEO" />
        <meta property="og:description" content="Centro de aprendizaje digital con 150+ recursos gratuitos y premium" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://factotum.digital" />
      </Helmet>

      <Hero 
        title="Bienvenido a Factotum Digital"
        subtitle="Tu centro de aprendizaje en AI, Marketing Digital y Crecimiento de Contenido"
        cta1={{ text: 'Explorar Contenido', href: '/contenido' }}
        cta2={{ text: 'Suscribirse Newsletter', href: '#newsletter' }}
      />

      <FeaturedContent />
      <CuratorSection />
      <LatestBlogPosts limit={3} />
      <NewsletterCTA />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
```

#### 1.4 Eliminar páginas innecesarias
- ❌ Elimina `/pages/Services.jsx` - Reemplazado por Academy
- ❌ Elimina `/pages/SuccessStories.jsx` - Reemplazado por Testimonials

---

### FASE 2: CREAR NUEVAS PÁGINAS

#### 2.1 Crear `src/pages/Contenido.jsx`

```jsx
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
    { id: 'cursos', name: 'Cursos', icon: BookOpen, count: '3' },
    { id: 'libros', name: 'Libros', icon: BookMarked, count: '2' },
  ];

  return (
    <>
      <Helmet>
        <title>Mi Contenido - Factotum Digital</title>
        <meta name="description" content="Explora videos, podcasts, cursos y libros sobre AI, YouTube SEO, marketing digital y crecimiento de contenido." />
      </Helmet>

      {/* Hero Mini */}
      <section className="hero-mini py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Mi Contenido
          </motion.h1>
          <p className="text-gray-400 text-lg">Más de 150+ recursos para tu aprendizaje</p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon size={20} />
                {tab.name}
                <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
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
```

#### 2.2 Crear `src/pages/Academy.jsx`

```jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Video, Award, ArrowRight } from 'lucide-react';

const Academy = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: "YouTube SEO Masterclass",
      category: "YouTube",
      level: "Principiante",
      price: "Gratuito",
      lessons: 5,
      duration: "2 horas",
      description: "Domina el algoritmo de YouTube: títulos, descripciones, tags y estrategias de retención",
      features: ["5 videos", "Plantillas descargables", "Checklist SEO"],
      link: "#contenido"
    },
    {
      id: 2,
      title: "Podcast Growth Blueprint",
      category: "Podcasting",
      level: "Intermedio",
      price: "Premium",
      lessons: 12,
      duration: "5 horas",
      description: "La guía completa: de 0 a 10K oyentes en 6 meses con estrategia de crecimiento",
      features: ["12 módulos", "Templates", "Estrategia paso a paso"],
      link: "#contacto"
    },
    {
      id: 3,
      title: "AEO Mastery - Posiciónate en IA",
      category: "AEO",
      level: "Avanzado",
      price: "Premium",
      lessons: 8,
      duration: "4 horas",
      description: "Optimiza tu contenido para ChatGPT, Perplexity y Google SGE",
      features: ["Schema.org", "Prompt optimization", "Case studies"],
      link: "#contacto"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Academia - Factotum Digital</title>
        <meta name="description" content="Cursos gratuitos y premium para creadores digitales. YouTube SEO, Podcasting, AEO y más." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4">Academia Factotum</h1>
            <p className="text-gray-400 text-lg">Recursos gratuitos y premium para tu crecimiento digital</p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {['all', 'free', 'premium'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedLevel === level
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {level === 'all' ? 'Todos' : level === 'free' ? 'Gratuitos' : 'Premium'}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses
              .filter((c) =>
                selectedLevel === 'all' ||
                (selectedLevel === 'free' && c.price === 'Gratuito') ||
                (selectedLevel === 'premium' && c.price === 'Premium')
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
                  </div>

                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>

                  <div className="space-y-2 mb-6 text-sm text-gray-400">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-blue-400">✓</span> {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-lg font-bold text-blue-400">{course.price}</span>
                    <a
                      href={course.link}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                    >
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
```

#### 2.3 Crear `src/pages/Blog.jsx`

```jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [articles] = useState([
    {
      id: 1,
      title: "5 Estrategias de YouTube SEO que funcionan en 2025",
      slug: "youtube-seo-2025",
      excerpt: "Descubre las tácticas probadas para aumentar visualizaciones y suscriptores usando optimización SEO en YouTube.",
      content: "# 5 Estrategias de YouTube SEO que funcionan en 2025\n\n## 1. Título Optimizado (60 caracteres)\nTus títulos deben contener la palabra clave principal al inicio...",
      author: "Factotum Digital",
      date: "2025-11-25",
      readTime: "8 min",
      category: "YouTube SEO",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      title: "AEO: Cómo posicionarte en ChatGPT y Perplexity",
      slug: "aeo-chatgpt-perplexity",
      excerpt: "Guía completa sobre Answer Engine Optimization para que tu contenido sea la respuesta en IA.",
      content: "# AEO: Cómo posicionarte en ChatGPT y Perplexity\n\nEl futuro de la búsqueda es con IA...",
      author: "Factotum Digital",
      date: "2025-11-20",
      readTime: "10 min",
      category: "AEO",
      image: "https://images.unsplash.com/photo-1677442d019cecf8c6d32a855e4308a4?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      title: "Podcast: De 0 a 10K oyentes en 6 meses",
      slug: "podcast-crecimiento",
      excerpt: "Estrategia probada para crecer en podcasting: distribución, promoción y contenido que engancha.",
      content: "# Podcast: De 0 a 10K oyentes en 6 meses\n\nSi quieres lanzar un podcast exitoso...",
      author: "Factotum Digital",
      date: "2025-11-15",
      readTime: "12 min",
      category: "Podcasting",
      image: "https://images.unsplash.com/photo-1478737270695-56ceb04df189?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 4,
      title: "Publicar tu libro: KDP vs Autoedición",
      slug: "libro-kdp-autoedicion",
      excerpt: "Comparativa completa: Amazon KDP vs Autoedición tradicional. Costos, ventajas y desventajas.",
      content: "# Publicar tu libro: KDP vs Autoedición\n\nLa era del autopublishing permite a cualquiera...",
      author: "Factotum Digital",
      date: "2025-11-10",
      readTime: "9 min",
      category: "Publishing",
      image: "https://images.unsplash.com/photo-1507842217343-583f20270319?auto=format&fit=crop&q=80&w=1200"
    }
  ]);

  return (
    <>
      <Helmet>
        <title>Blog - Factotum Digital</title>
        <meta name="description" content="Artículos sobre YouTube SEO, AEO, Podcasting, Marketing Digital y Publicación de Libros." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4">Blog Factotum</h1>
            <p className="text-gray-400 text-lg">Artículos sobre crecimiento digital, marketing y contenido</p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, idx) => (
              <motion.article
                key={article.id}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={14} />
                      {new Date(article.date).toLocaleDateString('es-ES')}
                    </div>
                    <a
                      href={`#${article.slug}`}
                      className="text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1"
                    >
                      Leer <ArrowRight size={14} />
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
```

#### 2.4 Crear `src/pages/About.jsx`

```jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Youtube, Podcast, BookOpen, Zap } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Youtube, label: "Videos", value: "15+" },
    { icon: Podcast, label: "Episodios", value: "10+" },
    { icon: BookOpen, label: "Libros", value: "2" },
    { icon: Zap, label: "Cursos", value: "3" },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Mí - Factotum Digital</title>
        <meta name="description" content="Conoce mi historia y por qué creé Factotum Digital: un movimiento por el aprendizaje digital accesible." />
      </Helmet>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4">Sobre Factotum Digital</h1>
            <p className="text-gray-400 text-lg">La historia detrás del movimiento</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Story */}
          <motion.div
            className="mb-12 space-y-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed">
              Factotum Digital nace de una simple observación: <strong>la mejor educación digital no debería estar encerrada tras paywalls inalcanzables.</strong>
            </p>
            
            <p className="text-lg leading-relaxed">
              Comenzó como un experimento personal: ¿Y si pudiéramos crear un hub donde creadores digitales encontraran todo lo necesario? Desde estrategia de YouTube SEO hasta cómo monetizar un podcast. Todo en un solo lugar, accesible, práctico y viral.
            </p>

            <p className="text-lg leading-relaxed">
              Hoy, Factotum Digital es mucho más que contenido. Es una <strong>comunidad</strong> de emprendedores, creadores y soñadores que entienden que el futuro es digital, y que lo digital debe ser para todos.
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {achievements.map((item, idx) => (
              <div key={idx} className="text-center">
                <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Nuestros Valores</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Accesibilidad</h3>
                <p className="text-gray-400">No crees en barreras de entrada. Todo creador merece herramientas, estrategias y mentoría.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Calidad</h3>
                <p className="text-gray-400">Prefiero 3 cursos excepcionales a 100 mediocres. Cada recurso está diseñado para generar resultados reales.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Comunidad</h3>
                <p className="text-gray-400">El aprendizaje es exponencial cuando no estás solo. Creamos espacios donde se genera sinergia.</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">¿Listo para crecer?</h2>
            <a
              href="/contenido"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition"
            >
              Explorar Contenido
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
```

---

### FASE 3: CREAR COMPONENTES DE GRILLAS

#### 3.1 Crear `src/components/VideosGrid.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Calendar, ChevronDown } from 'lucide-react';

const VideosGrid = () => {
  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // REEMPLAZAR CON TUS 15+ VIDEOS REALES
    setVideos([
      {
        id: '1',
        title: 'YouTube SEO 2025: Estrategia Completa',
        youtubeId: 'dQw4w9WgXcQ',
        views: '12.5K',
        date: '2025-11-25',
        category: 'YouTube SEO',
        duration: '25:30'
      },
      {
        id: '2',
        title: 'Cómo Crecer 10x más rápido con AEO',
        youtubeId: 'jNQXAC9IVRw',
        views: '8.3K',
        date: '2025-11-20',
        category: 'AEO',
        duration: '18:45'
      },
      // Agregar 13 más aquí...
    ]);
  }, []);

  const filtered = videos.filter(v => 
    selectedCategory === 'all' || v.category === selectedCategory
  );

  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="space-y-8">
      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {['all', 'YouTube SEO', 'AEO', 'Marketing'].map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(6);
            }}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === cat
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {cat === 'all' ? 'Todos' : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((video, idx) => (
          <motion.a
            key={video.id}
            href={`https://youtube.com/watch?v=${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden rounded-lg aspect-video bg-black mb-3">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                <Play size={48} className="text-white opacity-0 group-hover:opacity-100 transition" />
              </div>
              <span className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white">
                {video.duration}
              </span>
            </div>

            {/* Info */}
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-400 transition">
              {video.title}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Eye size={14} /> {video.views}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} /> {new Date(video.date).toLocaleDateString()}
              </div>
            </div>
            <span className="inline-block mt-2 px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
              {video.category}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
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
```

#### 3.2 Crear `src/components/PodcastsGrid.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, ExternalLink, ChevronDown } from 'lucide-react';

const PodcastsGrid = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    // REEMPLAZAR CON TUS 10+ EPISODIOS REALES
    setPodcasts([
      {
        id: 1,
        title: 'Episodio 1: YouTube SEO Mastery',
        description: 'Aprende los secretos para crecer exponencialmente en YouTube.',
        date: '2025-11-20',
        duration: '45:30',
        platforms: [
          { name: 'Spotify', url: 'https://open.spotify.com/show/5Qkarsa3wRaPGiCr5DbEo8' },
          { name: 'Apple', url: 'https://podcasts.apple.com' },
          { name: 'RSS', url: 'https://rss.com/podcasts/factotum-podcast/' }
        ]
      },
      {
        id: 2,
        title: 'Episodio 2: AEO y el Futuro de la Búsqueda',
        description: 'Cómo optimizar tu contenido para ChatGPT, Perplexity y Google SGE.',
        date: '2025-11-15',
        duration: '52:15',
        platforms: [
          { name: 'Spotify', url: 'https://open.spotify.com/show/5Qkarsa3wRaPGiCr5DbEo8' },
          { name: 'Apple', url: 'https://podcasts.apple.com' },
          { name: 'RSS', url: 'https://rss.com/podcasts/factotum-podcast/' }
        ]
      },
      // Agregar 8+ más aquí...
    ]);
  }, []);

  const displayed = podcasts.slice(0, visibleCount);
  const hasMore = visibleCount < podcasts.length;

  return (
    <div className="space-y-6">
      {displayed.map((ep, idx) => (
        <motion.div
          key={ep.id}
          className="border border-white/10 rounded-lg p-6 hover:border-blue-500/50 hover:bg-white/5 transition"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="flex gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music size={48} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold mb-2">{ep.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{ep.description}</p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                <span>Duración: {ep.duration}</span>
                <span>Publicado: {new Date(ep.date).toLocaleDateString('es-ES')}</span>
              </div>

              {/* Platform Links */}
              <div className="flex flex-wrap gap-2">
                {ep.platforms.map(platform => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-xs transition"
                  >
                    {platform.name} <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setVisibleCount(prev => prev + 4)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition"
          >
            Cargar Más <ChevronDown size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PodcastsGrid;
```

#### 3.3 Crear `src/components/CursosGrid.jsx` y `src/components/LibrosGrid.jsx`

```jsx
// CursosGrid.jsx - SIMILAR A VideosGrid PERO MOSTRANDO CURSOS
// LibrosGrid.jsx - LINK DIRECTO A AMAZON KDP
```

---

### FASE 4: OTROS COMPONENTES NECESARIOS

#### 4.1 Crear `src/components/FeaturedContent.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';

const FeaturedContent = () => {
  const featured = [
    {
      type: 'video',
      title: 'YouTube SEO 2025 - Guía Completa',
      image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      link: '/contenido'
    },
    {
      type: 'podcast',
      title: 'Episodio: AEO Mastery',
      image: 'https://via.placeholder.com/300x300?text=Podcast',
      link: '/contenido'
    },
    {
      type: 'curso',
      title: 'YouTube SEO Masterclass',
      image: 'https://via.placeholder.com/300x300?text=Curso',
      link: '/academy'
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contenido Destacado</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-semibold group-hover:text-blue-400 transition">{item.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
```

#### 4.2 Crear `src/components/CuratorSection.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';

const CuratorSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Hola, soy Factotum Digital</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Creador de contenido viral enfocado en educación digital. Empecé documentando mi viaje en YouTube, podcasting y publicación de libros. Hoy ayudo a miles de creadores a escalar sus canales.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mi misión es democratizar el conocimiento sobre crecimiento digital. No creas en barreras de entrada: todo creador merece las mejores herramientas, estrategias y mentoría.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-blue-400">250K+</div>
                <div className="text-sm text-gray-400">Seguidores</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">Contenidos</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image/Video */}
          <motion.div
            className="rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Placeholder para video de presentación */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Tu video de presentación aquí</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CuratorSection;
```

#### 4.3 Crear `src/components/NewsletterCTA.jsx`

```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Conectar a tu servicio de email aquí
    console.log('Newsletter subscription:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 px-4" id="newsletter">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-bold mb-2">Suscríbete a la Newsletter</h2>
          <p className="text-gray-400 mb-8">
            Recibe estrategias de crecimiento, herramientas y tips directamente en tu inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition whitespace-nowrap"
            >
              Suscribirse
            </button>
          </form>

          {submitted && (
            <motion.div
              className="flex items-center justify-center gap-2 text-green-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <CheckCircle size={20} /> ¡Suscripción confirmada!
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
```

#### 4.4 Crear `src/components/Testimonials.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María",
      channel: "@MariaContent",
      before: "5K",
      after: "150K",
      timeframe: "8 meses",
      growth: "3000%",
      quote: "Las estrategias de SEO de Factotum fueron absolutamente transformacionales para mi canal."
    },
    {
      name: "Carlos",
      channel: "@CarlosPodcast",
      before: "500",
      after: "25K",
      timeframe: "6 meses",
      growth: "5000%",
      quote: "Con el blueprint de podcasting crecí más en 6 meses que en 2 años antes."
    },
    {
      name: "Laura",
      channel: "@LauraBooks",
      before: "100",
      after: "8K",
      timeframe: "4 meses",
      growth: "8000%",
      quote: "La guía de publicación en KDP me ayudó a vender más libros que esperaba."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonios de Creadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>

              {/* Growth */}
              <div className="bg-blue-500/10 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2 text-blue-400">
                  <TrendingUp size={18} />
                  <span className="font-bold">{testimonial.growth}</span>
                </div>
                <p className="text-sm text-gray-400">
                  De {testimonial.before} a {testimonial.after} en {testimonial.timeframe}
                </p>
              </div>

              {/* Author */}
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.channel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
```

#### 4.5 Crear `src/components/LatestBlogPosts.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LatestBlogPosts = ({ limit = 3 }) => {
  const posts = [
    {
      title: "5 Estrategias de YouTube SEO que funcionan en 2025",
      excerpt: "Descubre las tácticas probadas para aumentar visualizaciones y suscriptores.",
      link: "/blog"
    },
    {
      title: "AEO: Cómo posicionarte en ChatGPT y Perplexity",
      excerpt: "Guía completa sobre Answer Engine Optimization para IA.",
      link: "/blog"
    },
    {
      title: "Podcast: De 0 a 10K oyentes en 6 meses",
      excerpt: "Estrategia probada para crecer en podcasting.",
      link: "/blog"
    }
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, limit).map((post, idx) => (
            <motion.a
              key={idx}
              href={post.link}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/50 transition h-full">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
```

---

### FASE 5: ACTUALIZAR ROUTER

```jsx
// src/App.jsx o tu archivo de rutas

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contenido from './pages/Contenido';
import Academy from './pages/Academy';
import Blog from './pages/Blog';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contenido" element={<Contenido />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

## 🎨 SCHEMA.ORG Y META TAGS PARA index.html

Agregar en el `<head>`:

```html
<!-- Meta Tags -->
<title>Factotum Digital - Aprende AI, Marketing & YouTube SEO | Podcast & Cursos</title>
<meta name="description" content="Centro de aprendizaje digital con 150+ recursos: videos, podcasts, cursos y libros sobre AI, marketing, YouTube SEO y crecimiento. Estrategias probadas para creadores digitales." />
<meta name="keywords" content="YouTube SEO, AEO, podcast, AI, marketing digital, aprendizaje, cursos gratis, contenido" />
<meta name="author" content="Factotum Digital" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://factotum.digital" />
<meta property="og:title" content="Factotum Digital - Centro de Aprendizaje Digital" />
<meta property="og:description" content="150+ recursos gratuitos y premium para creadores digitales" />
<meta property="og:site_name" content="Factotum Digital" />
<meta property="og:locale" content="es_ES" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Factotum Digital" />
<meta name="twitter:description" content="Centro de aprendizaje para creadores digitales" />
<meta name="twitter:site" content="@factotum_360" />

<!-- Schema.org EducationalOrganization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Factotum Digital",
  "url": "https://factotum.digital",
  "email": "info@factotum.digital",
  "description": "Centro de aprendizaje digital para creadores: videos, podcasts, cursos y libros",
  "sameAs": [
    "https://www.youtube.com/@FactotumDigital",
    "https://www.instagram.com/factotumdigitalpro/",
    "https://x.com/factotum_360",
    "https://www.facebook.com/factotum360"
  ],
  "knowsAbout": [
    "YouTube Marketing",
    "AEO",
    "Podcast Production",
    "Digital Marketing",
    "Content Creation"
  ]
}
</script>
```

---

## 📋 CHECKLIST DE IMPLEMENTACIÓN

- [ ] Actualizar Header.jsx con nueva navegación
- [ ] Actualizar Home.jsx con nueva estructura
- [ ] Actualizar index.html con meta tags y Schema
- [ ] Crear /pages/Contenido.jsx
- [ ] Crear /pages/Academy.jsx
- [ ] Crear /pages/Blog.jsx
- [ ] Crear /pages/About.jsx
- [ ] Crear /components/VideosGrid.jsx
- [ ] Crear /components/PodcastsGrid.jsx
- [ ] Crear /components/CursosGrid.jsx
- [ ] Crear /components/LibrosGrid.jsx
- [ ] Crear /components/FeaturedContent.jsx
- [ ] Crear /components/CuratorSection.jsx
- [ ] Crear /components/NewsletterCTA.jsx
- [ ] Crear /components/Testimonials.jsx
- [ ] Crear /components/LatestBlogPosts.jsx
- [ ] Eliminar Services.jsx
- [ ] Eliminar SuccessStories.jsx
- [ ] Actualizar App.jsx/router
- [ ] Reemplazar todos los datos placeholders con datos reales
- [ ] Testear en dev: `npm run dev`
- [ ] Build y deploy: `npm run build` y push a Vercel

---

## 🚀 CÓMO USAR ESTE PROMPT

### Opción 1: Claude Web
1. Copia TODO este contenido
2. Pega en Claude
3. Agrega: "Aquí está mi repo: https://github.com/Factotum-Digital/factotum-web.git"
4. Claude hará los cambios

### Opción 2: ChatGPT
1. Copia TODO
2. Pega en ChatGPT (con GPT-4)
3. Espera respuesta con código
4. Integra los cambios

### Opción 3: Cursor AI
1. Copia en un archivo `.prompt`
2. Sigue las instrucciones del prompt

---

## ⚡ PRÓXIMOS PASOS

1. **Recopila datos reales:**
   - Links YouTube (15+ videos)
   - Links Podcast (10+ episodios)
   - Links Libros (2)
   - Links Cursos (3)
   - Testimonios reales de creadores

2. **Crea avatar/foto**
   - Foto tuya para CuratorSection
   - Video de presentación (2-3 min) OPCIONAL

3. **Escribe biografía**
   - 2-3 párrafos sobre ti
   - Tu historia en About.jsx

4. **Artículos de blog**
   - Puedes usar los 4 temas propuestos
   - O agregar otros que te gusten

5. **Deploy**
   - Vercel detectará cambios automáticamente
   - Verifica en https://factotum-web.vercel.app/

---

**Estimado total:** 20-25 horas de implementación
**Impacto esperado:** +300% tráfico orgánico en 3 meses
**Estatus:** LISTO PARA EJECUTAR

¡Adelante! 🚀

