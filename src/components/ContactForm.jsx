import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Aquí iría la lógica para enviar el formulario
      console.log('Datos del formulario:', formData);
      
      // Simulamos un envío exitoso
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
      });
      
      // Limpiar el formulario después de un envío exitoso
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (_) {
      setSubmitStatus({
        success: false,
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-2">Envíanos un mensaje</h2>
          <p className="text-gray-400 mb-8">Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo.</p>
          
          {submitStatus.message && (
            <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre completo</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo electrónico</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent"
                    placeholder="tucorreo@ejemplo.com"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Teléfono (opcional)</label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent"
                    placeholder="+1 (___) ___-____"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Asunto</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent appearance-none"
                    required
                  >
                    <option value="" disabled>Selecciona un asunto</option>
                    <option value="Consulta general">Consulta general</option>
                    <option value="Soporte técnico">Soporte técnico</option>
                    <option value="Cotización">Cotización</option>
                    <option value="Soporte técnico">Soporte técnico</option>
                    <option value="Trabaja con nosotros">Trabaja con nosotros</option>
                    <option value="Otro">Otro</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent"
                placeholder="Cuéntanos cómo podemos ayudarte..."
                required
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#00C2FF] to-[#7000FF] hover:opacity-90 hover:shadow-lg hover:shadow-[#00C2FF]/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
        
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Información de contacto</h2>
            <p className="text-gray-400">Estamos aquí para ayudarte con cualquier pregunta que puedas tener. No dudes en ponerte en contacto con nosotros.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF]">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Dirección</h3>
                <p className="text-gray-400">Av. Principal 1234, Piso 5<br />Santiago, Región Metropolitana<br />Chile</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-[#7000FF]/10 text-[#7000FF]">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Correo electrónico</h3>
                <p className="text-gray-400">support@factotum.digital</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF]">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Teléfono</h3>
                <p className="text-gray-400">+56 9 1234 5678<br />Lunes a Viernes, 9:00 - 18:00</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-[#7000FF]/10 text-[#7000FF]">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Horario de atención</h3>
                <p className="text-gray-400">Lunes a Viernes: 9:00 - 18:00<br />Sábado: 10:00 - 14:00<br />Domingo: Cerrado</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <h3 className="font-semibold text-lg mb-4">Síguenos en redes sociales</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  name: 'Instagram', 
                  icon: <Instagram size={24} />, 
                  url: 'https://www.instagram.com/factotumdigitalpro/',
                  handle: '@factotumdigitalpro'
                },
                { 
                  name: 'YouTube', 
                  icon: <Youtube size={24} />, 
                  url: 'https://www.youtube.com/@FactotumDigital',
                  handle: '@FactotumDigital'
                },
                { 
                  name: 'Facebook', 
                  icon: <Facebook size={24} />, 
                  url: 'https://www.facebook.com/factotum360',
                  handle: '/factotum360'
                },
                { 
                  name: 'X (Twitter)', 
                  icon: <Twitter size={24} />, 
                  url: 'https://x.com/factotum_360',
                  handle: '@factotum_360'
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  aria-label={social.name}
                >
                  <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#00C2FF] to-[#7000FF] group-hover:opacity-90 transition-opacity">
                    {social.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{social.name}</div>
                    <div className="text-sm text-gray-400">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Mapa */}
      <div className="mt-16 rounded-2xl overflow-hidden border border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.0..."
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Ubicación de Factotum AI"
          className="w-full h-[400px] md:h-[450px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
