import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#004BFF] mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#004BFF] text-white font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
