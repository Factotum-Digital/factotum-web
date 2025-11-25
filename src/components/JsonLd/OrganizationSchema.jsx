import React from 'react';
import { Helmet } from 'react-helmet';

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Factotum AI",
    "url": "https://factotum.digital",
    "logo": "https://factotum.digital/logo.png",
    "description": "Expertos en Optimización para Motores de Respuesta (AEO) y estrategias de IA conversacional para mejorar la visibilidad de tu marca en asistentes virtuales y motores de búsqueda.",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Equipo Factotum"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogotá",
      "addressRegion": "Bogotá D.C.",
      "addressCountry": "CO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "soporte@factotum.digital",
      "url": "https://factotum.digital/contacto"
    },
    "sameAs": [
      "https://www.instagram.com/factotumdigitalpro/",
      "https://www.youtube.com/@FactotumDigital",
      "https://www.facebook.com/factotum360",
      "https://x.com/factotum_360"
    ],
    "keywords": [
      "AEO",
      "Optimización para Motores de Respuesta",
      "IA conversacional",
      "ChatGPT",
      "Perplexity",
      "Gemini",
      "Google SGE"
    ],
    "owns": [
      {
        "@type": "Dataset",
        "name": "Factotum AEO Dataset",
        "description": "Colección de datos estructurados para optimización en motores de respuesta",
        "url": "https://factotum.digital/aeo-dataset.json"
      },
      {
        "@type": "WebApplication",
        "name": "Factotum AEO Platform",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
