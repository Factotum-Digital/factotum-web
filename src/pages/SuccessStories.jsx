import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign, X } from 'lucide-react';

const cases = [
     {
          id: 1,
          client: "TechCorp Global",
          industry: "Tecnología",
          title: "Automatización de Soporte L1",
          description: "Implementación de un sistema de IA conversacional que redujo el tiempo de respuesta en un 85%.",
          metrics: "+85% Eficiencia",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
          details: "TechCorp Global enfrentaba un volumen inmanejable de tickets de soporte. Implementamos un agente de IA entrenado con su base de conocimientos que ahora resuelve el 60% de las consultas sin intervención humana."
     },
     {
          id: 2,
          client: "RetailX",
          industry: "Retail",
          title: "Predicción de Demanda",
          description: "Modelo predictivo para optimización de inventario que disminuyó el stock muerto en un 40%.",
          metrics: "-40% Stock Muerto",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
          details: "Utilizando datos históricos de ventas y tendencias estacionales, desarrollamos un modelo que predice la demanda con un 95% de precisión, permitiendo a RetailX optimizar su cadena de suministro."
     },
     {
          id: 3,
          client: "FinServe",
          industry: "Finanzas",
          title: "Detección de Fraude",
          description: "Sistema de detección de anomalías en tiempo real que previno pérdidas por $2M en el primer trimestre.",
          metrics: "$2M Ahorrados",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
          details: "Analizamos millones de transacciones en tiempo real para identificar patrones sospechosos, bloqueando intentos de fraude antes de que se completen las transacciones."
     },
     // Casos AEO
     {
          id: 4,
          client: "EduTech Solutions",
          industry: "Educación",
          title: "Optimización AEO para Plataforma E-Learning",
          description: "Incremento del 72% en respuestas destacadas en motores de IA como Perplexity y ChatGPT.",
          metrics: "72% Respuestas Destacadas",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
          details: "Implementamos un esquema FAQPage y Dataset estructurado que posicionó a EduTech como fuente de referencia en educación digital, logrando que el 72% de las consultas relacionadas con e-learning en motores de IA muestren sus respuestas como destacadas.",
          isAEO: true
     },
     {
          id: 5,
          client: "HealthPlus",
          industry: "Salud",
          title: "Estrategia de Contenido para Asistentes de Salud",
          description: "Aumento del 150% en citaciones como fuente confiable en asistentes de IA médica.",
          metrics: "+150% Citaciones",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
          details: "Desarrollamos una estrategia de contenido médico estructurado que incrementó significativamente la visibilidad de HealthPlus como fuente confiable en asistentes de IA especializados en salud, con un aumento del 150% en citaciones directas.",
          isAEO: true
     },
     {
          id: 6,
          client: "FinTech Global",
          industry: "Finanzas",
          title: "Optimización para Búsquedas por Voz",
          description: "Incremento del 65% en apariciones en respuestas de asistentes de voz para consultas financieras.",
          metrics: "+65% Apariciones",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
          details: "Implementamos un enfoque integral de AEO que posicionó a FinTech Global como autoridad en respuestas financieras en asistentes de voz, logrando un aumento del 65% en apariciones para términos clave del sector.",
          isAEO: true
     }
];

const SuccessStories = () => {
     const [selectedCase, setSelectedCase] = useState(null);

     return (
          <div className="pt-24 pb-16 min-h-screen">
               <Helmet>
                    <title>Casos de Éxito | Factotum AI</title>
                    <meta name="description" content="Conoce cómo Factotum AI ha ayudado a empresas líderes a transformar sus operaciones y obtener resultados medibles con inteligencia artificial." />
               </Helmet>

               <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Casos de Éxito</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">Resultados comprobados en empresas líderes que confiaron en nuestra experiencia en IA y automatización</p>
               </div>

               {/* Sección de Métricas AEO */}
               <div className="bg-gradient-to-r from-[#0a0a1f] to-[#1a1a3a] p-8 rounded-2xl mb-16 border border-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                         <h2 className="text-3xl font-bold mb-2">Métricas de Éxito en AEO</h2>
                         <p className="text-[#7DE3FF] mb-8">Resultados promedio de nuestras estrategias de Optimización para Motores de Respuesta</p>
                         
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                              <div className="glass-panel p-6 rounded-xl text-center">
                                   <div className="text-4xl font-bold text-[#00C2FF] mb-2">72%</div>
                                   <div className="text-sm text-gray-300">Respuestas destacadas en motores IA</div>
                              </div>
                              <div className="glass-panel p-6 rounded-xl text-center">
                                   <div className="text-4xl font-bold text-[#7DE3FF] mb-2">3.2x</div>
                                   <div className="text-sm text-gray-300">Más visibilidad en búsquedas por voz</div>
                              </div>
                              <div className="glass-panel p-6 rounded-xl text-center">
                                   <div className="text-4xl font-bold text-[#00C2FF] mb-2">89%</div>
                                   <div className="text-sm text-gray-300">Mejora en calidad de respuestas</div>
                              </div>
                              <div className="glass-panel p-6 rounded-xl text-center">
                                   <div className="text-4xl font-bold text-[#7DE3FF] mb-2">68%</div>
                                   <div className="text-sm text-gray-300">Reducción en tiempo de implementación</div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Sección de Casos AEO */}
               <div className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                         <div>
                              <h2 className="text-2xl md:text-3xl font-bold">Casos de Éxito en AEO</h2>
                              <p className="text-gray-400">Empresas que han mejorado su visibilidad en motores de IA</p>
                         </div>
                         <div className="hidden md:flex items-center space-x-2 text-sm">
                              <span className="h-2 w-2 rounded-full bg-[#00C2FF]"></span>
                              <span>Optimización para IA</span>
                         </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                         {cases
                              .filter(c => c.isAEO)
                              .map((item) => (
                                   <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#00C2FF]/30 transition-all cursor-pointer"
                                        onClick={() => setSelectedCase(item)}
                                   >
                                        <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
                                             <img
                                                  src={item.image}
                                                  alt={item.title}
                                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                             />
                                        </div>
                                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#00C2FF]/10 text-[#7DE3FF] mb-3">
                                             {item.industry}
                                        </span>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                                             <span className="text-sm font-medium">{item.client}</span>
                                             <span className="text-xs px-3 py-1 bg-[#00C2FF]/10 text-[#7DE3FF] rounded-full">
                                                  {item.metrics}
                                             </span>
                                        </div>
                                   </motion.div>
                              ))}
                    </div>
               </div>

               {/* Título para la sección general de casos */}
               <div className="flex items-center justify-between mb-8">
                         <h1 className="text-4xl md:text-6xl font-bold mb-6">
                              Historias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#7000FF]">Éxito Real</span>
                         </h1>
                         <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                              Resultados tangibles para empresas que se atreven a innovar.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {cases
                              .filter(c => !c.isAEO) // Solo mostrar casos no AEO en esta sección
                              .map((item) => (
                              <motion.div
                                   key={item.id}
                                   whileHover={{ y: -10 }}
                                   className="bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#00C2FF]/50 transition-all cursor-pointer group"
                                   onClick={() => setSelectedCase(item)}
                              >
                                   <div className="h-48 overflow-hidden">
                                        <img
                                             src={item.image}
                                             alt={item.title}
                                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                   </div>
                                   <div className="p-6">
                                        <div className="flex justify-between items-center mb-4">
                                             <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-gray-300">
                                                  {item.industry}
                                             </span>
                                             <span className="text-[#00C2FF] font-bold text-sm">{item.metrics}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{item.client}</h3>
                                        <h4 className="text-lg text-gray-300 mb-3">{item.title}</h4>
                                        <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                                        <button
                                             type="button"
                                             onClick={() => setSelectedCase(item)}
                                             className="text-[#00C2FF] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                                             aria-label={`Leer caso completo de ${item.client}`}
                                        >
                                             Leer caso completo <ArrowRight className="w-4 h-4" />
                                        </button>
                                   </div>
                              </motion.div>
                         ))}
                    </div>
               </div>

               <AnimatePresence>
                    {selectedCase && (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                              onClick={() => setSelectedCase(null)}
                         >
                              <motion.div
                                   initial={{ scale: 0.9, opacity: 0 }}
                                   animate={{ scale: 1, opacity: 1 }}
                                   exit={{ scale: 0.9, opacity: 0 }}
                                   className="bg-[#0A0A0A] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                                   onClick={(e) => e.stopPropagation()}
                              >
                                   <button
                                        onClick={() => setSelectedCase(null)}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                   >
                                        <X className="w-6 h-6" />
                                   </button>

                                   <img
                                        src={selectedCase.image}
                                        alt={selectedCase.title}
                                        className="w-full h-64 object-cover"
                                   />

                                   <div className="p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                             <span className="text-sm font-bold px-3 py-1 rounded-full bg-[#00C2FF]/20 text-[#00C2FF]">
                                                  {selectedCase.industry}
                                             </span>
                                             <span className="text-gray-400 text-sm">
                                                  Cliente: {selectedCase.client}
                                             </span>
                                        </div>

                                        <h2 className="text-3xl font-bold mb-4">{selectedCase.title}</h2>
                                        <div className="flex gap-8 mb-8 border-y border-white/10 py-6">
                                             <div>
                                                  <p className="text-gray-500 text-sm mb-1">Impacto</p>
                                                  <p className="text-2xl font-bold text-[#00C2FF]">{selectedCase.metrics}</p>
                                             </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-4">El Desafío & Solución</h3>
                                        <p className="text-gray-300 leading-relaxed mb-8">
                                             {selectedCase.details}
                                        </p>

                                        <a
                                             href="/audit"
                                             className="block w-full py-4 bg-gradient-to-r from-[#00C2FF] to-[#7000FF] rounded-xl text-center font-bold hover:opacity-90 transition-opacity"
                                        >
                                             Quiero resultados similares
                                        </a>
                                   </div>
                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </div>
     );
};

export default SuccessStories;
