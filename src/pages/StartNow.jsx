import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Rocket, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const StartNow = () => {
     const [formData, setFormData] = useState({ email: '', password: '' });
     const [errors, setErrors] = useState({ email: '', password: '' });
     const [submitted, setSubmitted] = useState(false);

     const validate = () => {
          const newErrors = { email: '', password: '' };
          if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
               newErrors.email = 'Ingresa un email válido.';
          }
          if (!formData.password || formData.password.length < 8) {
               newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
          }
          setErrors(newErrors);
          return !newErrors.email && !newErrors.password;
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (!validate()) return;
          console.log('Registro:', formData);
          setSubmitted(true);
          setFormData({ email: '', password: '' });
          setTimeout(() => setSubmitted(false), 3000);
     };

     const handleChange = (field) => (e) => {
          setFormData({ ...formData, [field]: e.target.value });
          if (errors[field]) {
               setErrors({ ...errors, [field]: '' });
          }
     };

     return (
          <div className="pt-24 pb-16 min-h-screen flex items-center justify-center relative overflow-hidden">
               <Helmet>
                    <title>Empieza Ahora | Factotum AI</title>
                    <meta name="description" content="Crea tu cuenta gratuita en Factotum AI y comienza a transformar tu negocio hoy mismo. Acceso inmediato a herramientas de IA premium." />
               </Helmet>

               {/* Background Elements */}
               <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00C2FF]/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7000FF]/20 rounded-full blur-[100px]" />
               </div>

               <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                         <motion.div
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-center lg:text-left"
                         >
                              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                   El futuro de tu empresa <br />
                                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#7000FF]">
                                        comienza hoy
                                   </span>
                              </h1>
                              <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
                                   Únete a más de 500 empresas que ya están escalando sus operaciones con la tecnología de Factotum AI.
                              </p>

                              <div className="grid gap-6 max-w-md mx-auto lg:mx-0">
                                   {[
                                        { icon: <Rocket className="text-[#00C2FF]" />, title: "Implementación Rápida", desc: "Configuración en menos de 24 horas." },
                                        { icon: <Zap className="text-[#7000FF]" />, title: "Resultados Inmediatos", desc: "Mejoras visibles desde la primera semana." },
                                        { icon: <ShieldCheck className="text-[#00C2FF]" />, title: "Seguridad Enterprise", desc: "Tus datos protegidos con cifrado militar." }
                                   ].map((item, index) => (
                                        <motion.div
                                             key={index}
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ delay: 0.2 + (index * 0.1) }}
                                             className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                        >
                                             <div className="p-2 rounded-lg bg-black/50">
                                                  {item.icon}
                                             </div>
                                             <div className="text-left">
                                                  <h3 className="font-bold text-lg">{item.title}</h3>
                                                  <p className="text-sm text-gray-400">{item.desc}</p>
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 }}
                              className="bg-[#0A0A0A]/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl max-w-md mx-auto w-full"
                         >
                              <div className="text-center mb-8">
                                   <h2 className="text-2xl font-bold mb-2">Crea tu cuenta gratuita</h2>
                                   <p className="text-gray-400 text-sm">No se requiere tarjeta de crédito</p>
                              </div>

                              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                                   <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email de trabajo</label>
                                        <input
                                             type="email"
                                             value={formData.email}
                                             onChange={handleChange('email')}
                                             className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C2FF] transition-colors"
                                             placeholder="nombre@empresa.com"
                                        />
                                        {errors.email && <p className="text-xs text-red-400 mt-2">{errors.email}</p>}
                                   </div>
                                   <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Contraseña</label>
                                        <input
                                             type="password"
                                             value={formData.password}
                                             onChange={handleChange('password')}
                                             className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00C2FF] transition-colors"
                                             placeholder="••••••••"
                                        />
                                        {errors.password && <p className="text-xs text-red-400 mt-2">{errors.password}</p>}
                                   </div>

                                   <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-[#00C2FF] to-[#7000FF] rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                                   >
                                        {submitted ? '✓ Cuenta creada' : 'Comenzar Ahora'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                   </button>

                                   <div className="relative my-6">
                                        <div className="absolute inset-0 flex items-center">
                                             <div className="w-full border-t border-white/10"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                             <span className="px-2 bg-[#0A0A0A] text-gray-500">O regístrate con</span>
                                        </div>
                                   </div>

                                   <button type="button" className="w-full py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                        Google
                                   </button>
                              </form>
                         </motion.div>

                    </div>
               </div>
          </div>
     );
};

export default StartNow;
