import React from 'react';
import { motion } from 'framer-motion';

const CuratorSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Hola, soy Factotum Digital</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Creador de contenido viral enfocado en educación digital. Empecé documentando mi viaje en YouTube,
              podcasting y publicación de libros. Hoy ayudo a miles de creadores a escalar sus canales.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mi misión es democratizar el conocimiento sobre crecimiento digital. No creo en barreras de entrada:
              todo creador merece las mejores herramientas, estrategias y mentoría.
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

          <motion.div
            className="rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
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
