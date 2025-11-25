import React from 'react';
import { Helmet } from 'react-helmet';

const DatasetSchema = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Dataset",
    "name": "Factotum AEO Knowledge Base",
    "description": "Conjunto de datos estructurados para optimización en motores de respuesta (AEO) que incluye preguntas frecuentes, guías y mejores prácticas para mejorar la visibilidad en asistentes de IA.",
    "url": "https://factotum.digital/aeo-dataset.json",
    "sameAs": "https://factotum.digital/services",
    "version": "1.0",
    "isAccessibleForFree": true,
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "keywords": [
      "AEO",
      "Optimización para Motores de Respuesta",
      "IA conversacional",
      "Estructura de datos",
      "ChatGPT",
      "Perplexity",
      "Gemini"
    ],
    "creator": {
      "@type": "Organization",
      "name": "Factotum AI",
      "url": "https://factotum.digital"
    },
    "includedInDataCatalog": {
      "@type": "DataCatalog",
      "name": "Factotum AEO Resources"
    },
    "distribution": [
      {
        "@type": "DataDownload",
        "encodingFormat": "JSON",
        "contentUrl": "https://factotum.digital/aeo-dataset.json"
      },
      {
        "@type": "DataDownload",
        "encodingFormat": "JSON",
        "contentUrl": "https://factotum.digital/aeo-knowledge.json"
      },
      {
        "@type": "DataDownload",
        "encodingFormat": "Markdown",
        "contentUrl": "https://factotum.digital/aeo-blueprint.md"
      }
    ],
    "temporalCoverage": "2023-11-25/2025-11-25",
    "spatialCoverage": {
      "@type": "Country",
      "name": "Global"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default DatasetSchema;
