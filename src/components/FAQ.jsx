import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
     const [activeIndex, setActiveIndex] = useState(null);

     const faqs = [
          {
               question: "¿Cómo funciona el AEO (Answer Engine Optimization)?",
               answer: "El AEO optimiza tu contenido para ser la respuesta directa en plataformas de IA como ChatGPT, Perplexity y Google SGE. Estructuramos datos y contenido semántico para garantizar que tu marca sea la fuente autorizada."
          },
          {
               question: "¿Qué resultados puedo esperar en YouTube?",
               answer: "Nuestras estrategias de retención y CTR suelen generar un aumento del 300% en suscriptores y 500% en visualizaciones en los primeros 6 meses, enfocándonos en calidad de audiencia sobre vanidad."
          },
          {
               question: "¿Ofrecen servicios personalizados para empresas?",
               answer: "Sí, desarrollamos planes a medida que integran automatización de marketing, creación de contenido con IA y estrategias de posicionamiento omnicanal para escalar tu negocio."
          },
          {
               question: "¿Cómo se integra la IA en el proceso creativo?",
               answer: "Utilizamos IA para análisis de tendencias, generación de guiones optimizados y post-producción, permitiendo mantener una alta frecuencia de publicación sin sacrificar calidad humana."
          }
     ];

     // Generate Schema.org JSON-LD
     const schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
               "@type": "Question",
               "name": faq.question,
               "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
               }
          }))
     };

     return (
          <section id="faq" className="py-24 bg-[#030014]/50 flex items-center justify-center">
               <script type="application/ld+json">
                    {JSON.stringify(schema)}
               </script>

               {/* SVG Gradient Definition */}
               <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                         <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#00C2FF" />
                              <stop offset="100%" stopColor="#7000FF" />
                         </linearGradient>
                    </defs>
               </svg>

               <div className="container max-w-4xl px-4">
                    <div className="text-center mb-16">
                         <h2 className="text-4xl font-bold mb-6">Preguntas Frecuentes</h2>
                         <p className="text-gray-400">Respuestas claras para decisiones inteligentes.</p>
                    </div>

                    <div className="space-y-4">
                         {faqs.map((faq, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 10 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1 }}
                                   className="glass-panel overflow-hidden"
                              >
                                   <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                   >
                                        <span className="text-lg font-medium pr-8">{faq.question}</span>
                                        {activeIndex === index ? (
                                             <Minus className="flex-shrink-0" style={{ stroke: 'url(#iconGradient)' }} />
                                        ) : (
                                             <Plus className="flex-shrink-0" style={{ stroke: 'url(#iconGradient)' }} />
                                        )}
                                   </button>

                                   <AnimatePresence>
                                        {activeIndex === index && (
                                             <motion.div
                                                  initial={{ height: 0, opacity: 0 }}
                                                  animate={{ height: "auto", opacity: 1 }}
                                                  exit={{ height: 0, opacity: 0 }}
                                                  transition={{ duration: 0.3 }}
                                             >
                                                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 text-left">
                                                       {faq.answer}
                                                  </div>
                                             </motion.div>
                                        )}
                                   </AnimatePresence>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default FAQ;
