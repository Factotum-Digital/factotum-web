import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play, Database, Settings, BarChart2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Demo = () => {
     const navigate = useNavigate();

     return (
          <div className="min-h-screen pt-24 pb-16">
               <Helmet>
                    <title>Demo Interactiva | Factotum AI</title>
                    <meta name="description" content="Prueba la potencia de Factotum AI en tiempo real. Explora nuestra demo interactiva y visualiza cómo podemos transformar tus datos." />
               </Helmet>

               <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                         <h1 className="text-4xl md:text-6xl font-bold mb-6">
                              Experimenta el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#7000FF]">Poder de la IA</span>
                         </h1>
                         <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                              Interactúa con nuestra plataforma en un entorno seguro y descubre insights en tiempo real.
                         </p>
                    </div>

                    {/* Demo Interface Mockup */}
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto mb-20"
                    >
                         {/* Toolbar */}
                         <div className="bg-[#111] border-b border-white/10 p-4 flex items-center gap-4">
                              <div className="flex gap-2">
                                   <div className="w-3 h-3 rounded-full bg-red-500" />
                                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                   <div className="w-3 h-3 rounded-full bg-green-500" />
                              </div>
                              <div className="h-6 w-px bg-white/10 mx-2" />
                              <div className="flex gap-4 text-sm text-gray-400">
                                   <span className="text-white font-medium">Dashboard</span>
                                   <span>Analytics</span>
                                   <span>Settings</span>
                              </div>
                         </div>

                         <div className="grid lg:grid-cols-4 min-h-[600px]">
                              {/* Sidebar */}
                              <div className="border-r border-white/10 p-6 space-y-6 hidden lg:block bg-[#0F0F0F]">
                                   <div className="space-y-2">
                                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Data Sources</h3>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20">
                                             <Database className="w-4 h-4" />
                                             <span className="text-sm font-medium">CRM Data</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-400 cursor-pointer transition-colors">
                                             <BarChart2 className="w-4 h-4" />
                                             <span className="text-sm font-medium">Sales Metrics</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-400 cursor-pointer transition-colors">
                                             <Settings className="w-4 h-4" />
                                             <span className="text-sm font-medium">Configuration</span>
                                        </div>
                                   </div>
                              </div>

                              {/* Main Content Area */}
                              <div className="lg:col-span-3 p-8 bg-[#050505] relative">
                                   {/* Overlay for "Try It" */}
                                   <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                                        <motion.button
                                             whileHover={{ scale: 1.05 }}
                                             whileTap={{ scale: 0.95 }}
                                             className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow"
                                             onClick={() => navigate('/start')}
                                        >
                                             <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                                        </motion.button>
                                        <h3 className="text-2xl font-bold mb-2">Iniciar Simulación</h3>
                                        <p className="text-gray-400 text-center max-w-md px-4">
                                             Ejecuta un análisis predictivo sobre un dataset de muestra de 1M de registros.
                                        </p>
                                        <button
                                             type="button"
                                             onClick={() => navigate('/audit')}
                                             className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#7000FF] text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                                        >
                                             Hablar con un consultor
                                        </button>
                                   </div>

                                   {/* Background Mockup Content */}
                                   <div className="opacity-30 pointer-events-none">
                                        <div className="grid grid-cols-3 gap-6 mb-8">
                                             <div className="bg-[#1A1A1A] h-32 rounded-xl border border-white/5"></div>
                                             <div className="bg-[#1A1A1A] h-32 rounded-xl border border-white/5"></div>
                                             <div className="bg-[#1A1A1A] h-32 rounded-xl border border-white/5"></div>
                                        </div>
                                        <div className="bg-[#1A1A1A] h-96 rounded-xl border border-white/5"></div>
                                   </div>
                              </div>
                         </div>
                    </motion.div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                         {[
                              { num: "01", title: "Conecta tus Datos", desc: "Integra tus fuentes de datos (CRM, ERP, SQL) con un solo clic." },
                              { num: "02", title: "Entrena el Modelo", desc: "Nuestros algoritmos pre-entrenados se adaptan a tu negocio en minutos." },
                              { num: "03", title: "Visualiza Resultados", desc: "Obtén dashboards interactivos y predicciones accionables al instante." }
                         ].map((step, index) => (
                              <div key={index} className="text-center">
                                   <div className="text-6xl font-bold text-white mb-4">{step.num}</div>
                                   <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                   <p className="text-gray-400">{step.desc}</p>
                              </div>
                         ))}
                    </div>

                    <div className="text-center mt-16">
                         <Link
                              to="/audit"
                              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/10 hover:border-[#00C2FF]/60 transition-all"
                         >
                              Agenda una Auditoría Gratuita
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Demo;
