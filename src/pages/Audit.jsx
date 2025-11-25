import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const Audit = () => {
     const [formData, setFormData] = useState({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          sector: 'Tecnología',
          acceptPolicy: false
     });
     const [errors, setErrors] = useState({});
     const [submitted, setSubmitted] = useState(false);

     const validate = () => {
          const newErrors = {};
          if (!formData.firstName.trim()) newErrors.firstName = 'Ingresa tu nombre.';
          if (!formData.lastName.trim()) newErrors.lastName = 'Ingresa tu apellido.';
          if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido.';
          if (!formData.company.trim()) newErrors.company = 'Ingresa el nombre de tu empresa.';
          if (!formData.sector.trim()) newErrors.sector = 'Selecciona un sector.';
          if (!formData.acceptPolicy) newErrors.acceptPolicy = 'Debes aceptar la política de privacidad.';
          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (!validate()) return;
          console.log('Auditoría solicitada:', formData);
          setSubmitted(true);
          setFormData({ firstName: '', lastName: '', email: '', company: '', sector: 'Tecnología', acceptPolicy: false });
          setTimeout(() => setSubmitted(false), 3000);
     };

     const handleChange = (field) => (e) => {
          const value = field === 'acceptPolicy' ? e.target.checked : e.target.value;
          setFormData({ ...formData, [field]: value });
          if (errors[field]) {
               setErrors({ ...errors, [field]: '' });
          }
     };

     return (
          <div className="pt-24 pb-16 min-h-screen">
               <Helmet>
                    <title>Agenda tu Auditoría Gratuita | Factotum AI</title>
                    <meta name="description" content="Solicita una auditoría gratuita de 30 minutos. Identifica oportunidades de IA en tu negocio y recibe un plan de acción personalizado." />
               </Helmet>

               <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                         <div>
                              <motion.h1
                                   initial={{ opacity: 0, x: -20 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   className="text-4xl md:text-5xl font-bold mb-6"
                              >
                                   Diagnóstico de IA <br />
                                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#7000FF]">
                                        Sin Compromiso
                                   </span>
                              </motion.h1>
                              <p className="text-xl text-gray-400 mb-8">
                                   Descubre en 30 minutos cómo la inteligencia artificial puede optimizar tus procesos y aumentar tus ingresos.
                              </p>

                              <div className="space-y-6 mb-10">
                                   {[
                                        "Análisis de tu infraestructura actual",
                                        "Identificación de cuellos de botella",
                                        "Plan de implementación personalizado",
                                        "Estimación de ROI proyectado"
                                   ].map((item, index) => (
                                        <motion.div
                                             key={index}
                                             initial={{ opacity: 0, x: -20 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             transition={{ delay: index * 0.1 }}
                                             className="flex items-center gap-4"
                                        >
                                             <div className="p-2 rounded-full bg-[#00C2FF]/10 text-[#00C2FF]">
                                                  <CheckCircle className="w-5 h-5" />
                                             </div>
                                             <span className="text-lg">{item}</span>
                                        </motion.div>
                                   ))}
                              </div>

                              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                   <div className="flex items-center gap-4 mb-4">
                                        <img
                                             src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
                                             alt="Consultor"
                                             className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                             <p className="font-bold">Carlos Rodríguez</p>
                                             <p className="text-sm text-gray-400">Director de Estrategia AI</p>
                                        </div>
                                   </div>
                                   <p className="text-gray-300 italic">
                                        "La auditoría nos abrió los ojos a oportunidades que no sabíamos que existían. Implementamos las recomendaciones y vimos resultados en semanas."
                                   </p>
                              </div>
                         </div>

                         <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 shadow-2xl"
                         >
                              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                   <Calendar className="w-6 h-6 text-[#00C2FF]" />
                                   Reserva tu espacio
                              </h3>

                              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                   <div className="grid grid-cols-2 gap-6">
                                        <div>
                                             <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                                             <input
                                                  type="text"
                                                  value={formData.firstName}
                                                  onChange={handleChange('firstName')}
                                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C2FF] transition-colors"
                                                  placeholder="Tu nombre"
                                             />
                                             {errors.firstName && <p className="text-xs text-red-400 mt-2">{errors.firstName}</p>}
                                        </div>
                                        <div>
                                             <label className="block text-sm font-medium text-gray-400 mb-2">Apellido</label>
                                             <input
                                                  type="text"
                                                  value={formData.lastName}
                                                  onChange={handleChange('lastName')}
                                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C2FF] transition-colors"
                                                  placeholder="Tu apellido"
                                             />
                                             {errors.lastName && <p className="text-xs text-red-400 mt-2">{errors.lastName}</p>}
                                        </div>
                                   </div>

                                   <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Corporativo</label>
                                        <input
                                             type="email"
                                             value={formData.email}
                                             onChange={handleChange('email')}
                                             className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C2FF] transition-colors"
                                             placeholder="nombre@empresa.com"
                                        />
                                        {errors.email && <p className="text-xs text-red-400 mt-2">{errors.email}</p>}
                                   </div>

                                   <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Empresa</label>
                                        <input
                                             type="text"
                                             value={formData.company}
                                             onChange={handleChange('company')}
                                             className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C2FF] transition-colors"
                                             placeholder="Nombre de tu empresa"
                                        />
                                        {errors.company && <p className="text-xs text-red-400 mt-2">{errors.company}</p>}
                                   </div>

                                   <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Sector</label>
                                        <select
                                             value={formData.sector}
                                             onChange={handleChange('sector')}
                                             className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C2FF] transition-colors text-gray-300"
                                        >
                                             <option value="Tecnología">Tecnología</option>
                                             <option value="Retail">Retail</option>
                                             <option value="Finanzas">Finanzas</option>
                                             <option value="Salud">Salud</option>
                                             <option value="Otro">Otro</option>
                                        </select>
                                        {errors.sector && <p className="text-xs text-red-400 mt-2">{errors.sector}</p>}
                                   </div>

                                   <div className="flex items-start gap-3">
                                        <input
                                             id="privacy"
                                             type="checkbox"
                                             checked={formData.acceptPolicy}
                                             onChange={handleChange('acceptPolicy')}
                                             className="mt-1 accent-[#00C2FF]"
                                        />
                                        <label htmlFor="privacy" className="text-sm text-gray-400">
                                             Acepto la <a href="/privacy.html" className="underline">política de privacidad</a> y autorizo el contacto comercial.
                                        </label>
                                   </div>
                                   {errors.acceptPolicy && <p className="text-xs text-red-400">{errors.acceptPolicy}</p>}

                                   <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-[#00C2FF] to-[#7000FF] rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                   >
                                        {submitted ? '✓ Solicitud enviada' : 'Confirmar Reserva'} <ArrowRight className="w-5 h-5" />
                                   </button>

                                   <p className="text-xs text-center text-gray-500">
                                        Al enviar este formulario aceptas nuestra política de privacidad.
                                   </p>
                              </form>
                         </motion.div>
                    </div>
               </div>
          </div>
     );
};

export default Audit;
