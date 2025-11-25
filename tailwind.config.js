/** @type {import('tailwindcss').Config} */
export default {
     content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               colors: {
                    primary: '#7000FF',
                    secondary: '#00C2FF',
                    accent: '#FF0080',
                    'bg-deep': '#030014',
               },
               fontFamily: {
                    sans: ['Outfit', 'sans-serif'],
               }
          },
     },
     plugins: [],
}
