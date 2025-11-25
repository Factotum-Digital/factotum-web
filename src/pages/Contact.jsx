import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#030014] text-white">
      <Helmet>
        <title>Contacto | Factotum AI</title>
        <meta name="description" content="Contáctanos para obtener más información sobre nuestros servicios de inteligencia artificial y cómo podemos ayudarte a transformar tu negocio." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00C2FF]/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030014]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#7000FF]">
              Hablemos
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            ¿Tienes alguna pregunta sobre nuestros servicios de IA? Estamos aquí para ayudarte. 
            Completa el formulario o utiliza cualquiera de nuestros canales de contacto.
          </motion.p>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#00C2FF]/10 to-[#7000FF]/10 rounded-3xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto max-w-7xl p-12 text-center my-16 border border-white/10">
        <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Agenda una llamada con nuestro equipo para discutir cómo podemos ayudarte a alcanzar tus objetivos con IA.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#7000FF] text-white font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Agendar llamada
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;
