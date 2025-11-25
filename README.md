# Factotum AI – Sitio Web

Landing page construida con **React 19 + Vite** y TailwindCSS para presentar los servicios de Factotum AI (auditoría gratuita, growth hub, casos de éxito, etc.). Incluye routing interno, animaciones con Framer Motion y formularios validados en cliente (registro, auditoría y newsletter).

## Requisitos previos

- Node.js 20+
- npm 10+

## Scripts disponibles

```bash
npm install         # instala dependencias
npm run dev         # entorno local con HMR
npm run lint        # reglas ESLint
npm run build       # compila a /dist
npm run preview     # sirve la build localmente
npm run serve       # preview accesible desde la red
npm run vercel-build# hook para Vercel
```

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `VITE_BASE_PATH` | Prefijo de la app al construir. Úsalo para GitHub Pages (`/nombre-repo/`). Por defecto `/`. |

Para añadir integraciones reales (newsletter, formularios), define variables adicionales en `.env` o en el panel de Vercel y consúmelas desde los handlers.

## Despliegue en Vercel

1. Importa el repositorio en Vercel.
2. Configura el comando de build `npm run vercel-build` y el directorio `dist`.
3. El archivo `vercel.json` ya redirige tráfico SPA a `index.html`, por lo que las rutas de React funcionarán correctamente.

## Despliegue en GitHub Pages

1. Define `VITE_BASE_PATH=/nombre-repo/` antes de ejecutar `npm run build` (o crea `.env.production`).
2. Publica el contenido de `dist/` en la rama `gh-pages`.
3. Si usas GitHub Actions, asegúrate de exportar la variable y subir el artefacto generado.

## Estructura relevante

- `src/components`: Header, Footer, Hero, FAQ, GrowthHub, etc.
- `src/pages`: Home, Services, SuccessStories, StartNow, Demo, Audit.
- `vercel.json`: reglas de reescritura para SPA.
- `vite.config.js`: configuración de `base` para soportar subpaths.

## Próximos pasos

- Integrar backend o servicios de terceros para los formularios (newsletter, auditoría, registro).
- Añadir monitoreo (Analytics, LogRocket, etc.) y pruebas e2e.
