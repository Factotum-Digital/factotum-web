# Blueprint AEO de Factotum Digital

## Paso 1 · Ingesta de Datos Omnicanal
- Conectar CRM, Help Desk, comunidad, LMS y Analytics.
- Normalizar campos críticos (intención, sentimiento, producto, idioma).
- Escribir a data lake propio en formato Delta/JSON listo para exportar a motores de respuesta.

## Paso 2 · Schema Conversacional
- Generar FAQPage, HowTo y Dataset JSON-LD a partir de los insights del paso 1.
- Firmar feeds con metadatos de procedencia y fecha de actualización.
- Publicar endpoints versionados (`/aeo-dataset.json`, `/aeo-knowledge.json`).

## Paso 3 · Feedback y Citaciones
- Monitorizar respuestas destacadas en ChatGPT, Perplexity, Gemini y SGE.
- Realimentar prompts y embeddings cuando baje la tasa de citación (<70%).
- Documentar hallazgos semanalmente y compartir con el cliente.

> Última actualización: 25 noviembre 2025
