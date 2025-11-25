import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import GrowthHub from '../components/GrowthHub';
import FAQ from '../components/FAQ';

const Home = () => {
     return (
          <>
               <Helmet>
                    <title>Factotum AI - Soluciones de Inteligencia Artificial Premium</title>
                    <meta name="description" content="Transforma tu negocio con Factotum AI. Soluciones avanzadas de inteligencia artificial, automatización y crecimiento estratégico para empresas líderes." />
               </Helmet>
               <Hero />
               <GrowthHub />
               <FAQ />
          </>
     );
};

export default Home;
