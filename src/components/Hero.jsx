import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({
     title = 'Domina el Futuro del Crecimiento Digital',
     subtitle = 'Unificamos estrategias de AEO, YouTube SEO y Automatización para posicionar tu marca donde realmente importa. El futuro no espera.',
     cta1 = { text: 'Empezar Ahora', href: '/start' },
     cta2 = { text: 'Ver Demo', href: '/demo' },
}) => {
     return (
          <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
               {/* Background Elements */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0F4CFF] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00B4FF] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse delay-1000" />
               </div>

               <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                         initial={{ opacity: 0, x: -50 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}
                         className="text-center lg:text-left"
                    >
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                              <Sparkles size={16} className="text-[#7FE8FF]" />
                              <span className="text-sm font-medium text-gray-300">Marketing Digital con IA 2026</span>
                         </div>

                         <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                              {title}
                         </h1>

                         <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                              {subtitle}
                         </p>

                         <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                             {cta1 && (
                                  <Link to={cta1.href} className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
                                       {cta1.text}
                                       <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                  </Link>
                             )}
                             {cta2 && (
                                  <Link to={cta2.href} className="btn-glass w-full sm:w-auto flex items-center justify-center gap-2 group">
                                       <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                            <Play size={14} fill="currentColor" />
                                       </div>
                                       {cta2.text}
                                  </Link>
                             )}
                         </div>

                         <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
                              <div className="flex items-center gap-2">
                                   <div className="w-2 h-2 rounded-full bg-[#7DE3FF]" />
                                   +500% Views
                              </div>
                              <div className="flex items-center gap-2">
                                   <div className="w-2 h-2 rounded-full bg-[#00A2FF]" />
                                   Top 1 Rankings
                              </div>
                              <div className="flex items-center gap-2">
                                   <div className="w-2 h-2 rounded-full bg-[#004BFF]" />
                                   AEO Ready
                              </div>
                         </div>
                    </motion.div>

                    {/* Visual Content */}
                    <div className="relative hidden lg:block">
                         <div className="relative z-10 glass-panel p-2 rounded-3xl">
                              <div className="absolute inset-0 bg-gradient-to-tr from-[#00C2FF]/15 to-[#0038FF]/15 rounded-3xl blur-xl" />
                              <img
                                   src="/hero_dashboard_blue.png"
                                   alt="AI Marketing Dashboard en tonos azules"
                                   className="relative z-10 rounded-2xl shadow-2xl w-full h-auto border border-white/10"
                              />

                              {/* Floating Cards */}
                              <div className="absolute -top-10 -right-10 glass-panel p-4 rounded-xl shadow-xl bg-[#030014]/90 border border-[#00C2FF]/30 z-30">
                                   <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                             </svg>
                                        </div>
                                        <div>
                                             <div className="text-xs text-gray-400">Crecimiento Mensual</div>
                                             <div className="text-lg font-bold text-white">+127.5%</div>
                                        </div>
                                   </div>
                              </div>

                              <div className="absolute -bottom-8 -left-8 glass-panel p-4 rounded-xl shadow-xl bg-[#030014]/90 z-30">
                                   <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#004BFF]/20 flex items-center justify-center text-[#00A2FF]">
                                             <Sparkles size={20} />
                                        </div>
                                        <div>
                                             <div className="text-xs text-gray-400">AI Optimization</div>
                                             <div className="text-lg font-bold text-white">Active</div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero;
