import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Youtube, Zap, BarChart3, Globe } from 'lucide-react';

const GrowthHub = () => {
     const features = [
          {
               title: "YouTube SEO Mastery",
               description: "Domina el algoritmo con estrategias probadas para maximizar retención y CTR.",
               icon: <Youtube size={24} />,
               color: "from-[#FF0000] to-[#FF4D4D]",
               colSpan: "col-span-1 md:col-span-2",
               delay: 0
          },
          {
               title: "AEO Intelligence",
               description: "Optimización para motores de respuesta y búsqueda por voz.",
               icon: <Zap size={24} />,
               color: "from-[#FFD700] to-[#FFA500]",
               colSpan: "col-span-1",
               delay: 0.1
          },
          {
               title: "Viral Analytics",
               description: "Análisis predictivo de tendencias antes de que exploten.",
               icon: <BarChart3 size={24} />,
               color: "from-[#00C2FF] to-[#0066FF]",
               colSpan: "col-span-1",
               delay: 0.2
          },
          {
               title: "Community Growth",
               description: "Convierte espectadores en una comunidad leal y monetizable.",
               icon: <Users size={24} />,
               color: "from-[#7000FF] to-[#A020F0]",
               colSpan: "col-span-1 md:col-span-2",
               delay: 0.3
          }
     ];

     const blueprint = [
          {
               title: "Ingesta de Datos Omnicanal",
               description: "Unificamos CRM, Help Desk, comunidad y analytics en un data lake listo para motores de respuesta.",
               metric: "+128 fuentes armonizadas"
          },
          {
               title: "Schema Conversacional",
               description: "Publicamos FAQPage, HowTo, Dataset y feeds JSON firmados para que ChatGPT, Perplexity y Gemini consuman contexto verificado.",
               metric: "Schema listo en 48h"
          },
          {
               title: "Feedback y Citaciones",
               description: "Monitoreamos qué respuestas citan tu marca y realimentamos prompts, embeddings y prompts-guard para escalar visibilidad.",
               metric: "+75% respuestas destacadas"
          }
     ];

     const blueprintSchema = {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Blueprint AEO de Factotum Digital",
          description: "Proceso en tres pasos para lograr citaciones en motores de respuesta como ChatGPT, Perplexity y Gemini.",
          step: blueprint.map((stage, index) => ({
               "@type": "HowToStep",
               position: index + 1,
               name: stage.title,
               text: stage.description
          }))
     };

     return (
          <section id="growth-hub" className="py-24 relative flex flex-col items-center justify-center">
               <div className="container">
                    <script type="application/ld+json">
                         {JSON.stringify(blueprintSchema)}
                    </script>
                    <div className="text-center mb-16">
                         <h2 className="text-4xl md:text-5xl font-bold mb-6">
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#7000FF]">
                                   Growth Hub
                              </span>
                         </h2>
                         <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                              Tu centro de comando para la expansión digital. Herramientas y estrategias diseñadas para el ecosistema de 2026.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {features.map((feature, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: feature.delay }}
                                   className={`glass-panel p-8 relative overflow-hidden group hover:border-[#00C2FF]/50 transition-colors ${feature.colSpan}`}
                              >
                                   <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity`} />

                                   <div className="relative z-10">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                                             {feature.icon}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                             {feature.description}
                                        </p>
                                   </div>
                              </motion.div>
                         ))}
                    </div>

                    <div className="mt-20">
                         <p className="text-sm uppercase tracking-[0.4em] text-center text-[#00C2FF]/70 mb-4">Blueprint AEO</p>
                         <h3 className="text-3xl font-bold text-center mb-8">Cómo logramos que te citen los motores de IA</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {blueprint.map((stage, index) => (
                                   <motion.div
                                        key={stage.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#00C2FF]/40 transition-colors"
                                   >
                                        <p className="text-xs uppercase tracking-[0.3em] text-[#7DE3FF]/80 mb-2">Paso {index + 1}</p>
                                        <h4 className="text-2xl font-semibold mb-3">{stage.title}</h4>
                                        <p className="text-gray-400 mb-4 leading-relaxed">{stage.description}</p>
                                        <span className="inline-flex items-center gap-2 text-[#7DE3FF] font-semibold">
                                             {stage.metric}
                                             <span aria-hidden>↗</span>
                                        </span>
                                   </motion.div>
                              ))}
                         </div>
                         <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                              <a
                                   href="/aeo-dataset.json"
                                   className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center gap-2"
                                   download
                              >
                                   Dataset JSON-LD
                              </a>
                              <a
                                   href="/aeo-knowledge.json"
                                   className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center gap-2"
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   Knowledge Base en vivo
                              </a>
                              <a
                                   href="/aeo-blueprint.md"
                                   className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#7000FF] text-white font-semibold hover:opacity-90"
                                   download
                              >
                                   Descargar Blueprint completo
                              </a>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default GrowthHub;
