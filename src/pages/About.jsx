import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Youtube, Podcast, BookOpen, Zap } from 'lucide-react';

const achievements = [
  { icon: Youtube, label: 'Videos', value: '15+' },
  { icon: Podcast, label: 'Episodios', value: '10+' },
  { icon: BookOpen, label: 'Libros', value: '2' },
  { icon: Zap, label: 'Cursos', value: '3' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Mí - Factotum Digital</title>
        <meta
          name="description"
          content="Conoce mi historia y por qué creé Factotum Digital: un movimiento por el aprendizaje digital accesible."
        />
      </Helmet>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-4">Sobre Factotum Digital</h1>
            <p className="text-gray-400 text-lg">La historia detrás del movimiento</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
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
              Comenzó como un experimento personal: ¿y si pudiéramos crear un hub donde creadores digitales encontraran todo lo necesario? Desde estrategia de YouTube SEO hasta cómo monetizar un podcast. Todo en un solo lugar, accesible, práctico y viral.
            </p>
            <p className="text-lg leading-relaxed">
              Hoy, Factotum Digital es mucho más que contenido. Es una <strong>comunidad</strong> de emprendedores, creadores y soñadores que entienden que el futuro es digital, y que lo digital debe ser para todos.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {achievements.map((item, idx) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </motion.div>

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
                <p className="text-gray-400">No creemos en barreras de entrada. Todo creador merece herramientas, estrategias y mentoría.</p>
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

          <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
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
