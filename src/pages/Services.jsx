import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bot, BarChart, Zap, Users, Mail, Search, TrendingUp, FileText, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
     // Estrategia y Análisis (Primera Impresión)
     {
          icon: <BarChart className="w-8 h-8 text-[#00C2FF]" />,
          title: "Estrategia Digital con IA",
          description: "Planes personalizados que aumentan la conversión hasta en un 200%. Empezamos por entender tu negocio."
     },
     {
          icon: <Users className="w-8 h-8 text-[#7000FF]" />,
          title: "Análisis de Audiencia",
          description: "Identificamos a tu público ideal con IA para mensajes 150% más efectivos."
     },
     
     // Visibilidad (Segundo Nivel)
     {
         icon: <Search className="w-8 h-8 text-[#00C2FF]" />,
         title: "AEO - Optimización para Motores de IA",
         description: "Auditoría de datos, schema conversacional (FAQPage, HowTo, Dataset) y feeds JSON para que ChatGPT, Perplexity y Gemini citen tu marca como fuente oficial."
    },
     {
          icon: <Search className="w-8 h-8 text-[#7000FF]" />,
          title: "SEO Avanzado con IA",
          description: "Estrategias que mejoran el tráfico orgánico en un 180% en 6 meses."
     },
     
     // Atracción (Tercer Nivel)
     {
          icon: <Zap className="w-8 h-8 text-[#00C2FF]" />,
          title: "Publicidad Inteligente",
          description: "Campañas con IA que reducen el costo por adquisición en 40% y aumentan conversiones."
     },
     {
         icon: <FileText className="w-8 h-8 text-[#7000FF]" />,
         title: "Contenido Orientado a Respuestas",
         description: "Playbooks de prompts, Q&A estructurado y microguiones entrenados para responder exactamente lo que motores de IA necesitan."
    },
     
     // Conversión (Cuarto Nivel)
     {
          icon: <Mail className="w-8 h-8 text-[#00C2FF]" />,
          title: "Email Marketing Automatizado",
          description: "+50% en tasas de apertura y +25% en conversiones con flujos inteligentes."
     },
     {
          icon: <Bot className="w-8 h-8 text-[#7000FF]" />,
          title: "Chatbots Inteligentes",
          description: "Resuelven el 80% de consultas y aumentan la satisfacción del cliente."
     },
     
     // Resultados (Último Nivel)
     {
          icon: <TrendingUp className="w-8 h-8 text-[#00C2FF]" />,
          title: "Crecimiento de Negocio",
          description: "Estrategias escalables para un crecimiento sostenible y medible."
     }
];

const Services = () => {
     return (
          <div className="pt-24 pb-16">
               <Helmet>
                    <title>Marketing Digital con IA | Factotum Digital</title>
                    <meta name="description" content="Soluciones de marketing digital potenciadas por IA. Desde publicidad inteligente hasta automatización avanzada, impulsamos tu crecimiento con tecnología de vanguardia." />
               </Helmet>

               <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                         <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                         >
                              Potencia tu negocio con <br />
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#7000FF]">
                                   IA de última generación
                              </span>
                         </motion.h1>
                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-xl text-gray-400 max-w-2xl mx-auto"
                         >
                              Soluciones tecnológicas diseñadas para escalar, optimizar y liderar en la era digital.
                         </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                         {services.map((service, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ delay: index * 0.1 }}
                                   whileHover={{ scale: 1.05 }}
                                   className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-[#00C2FF]/50 transition-all duration-300 group"
                              >
                                   <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                                        {service.icon}
                                   </div>
                                   <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                   <p className="text-gray-400 mb-6">{service.description}</p>
                                   <Link to="/audit" className="text-[#00A2FF] font-semibold hover:text-[#7DE3FF] transition-colors flex items-center gap-2 group">
                                        Más información <span className="group-hover:translate-x-1 transition-transform">→</span>
                                   </Link>
                              </motion.div>
                         ))}
                    </div>
                    <div className="bg-gradient-to-r from-[#00C2FF]/10 to-[#7000FF]/10 rounded-3xl p-12 text-center border border-white/10">
                         <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu empresa?</h2>
                         <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                              Agenda una demostración personalizada y descubre cómo nuestras soluciones pueden adaptarse a tus necesidades específicas.
                         </p>
                         <Link
                              to="/demo"
                              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#7000FF] text-white font-bold text-lg hover:opacity-90 transition-opacity"
                         >
                              Ver Demo Interactiva
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Services;
