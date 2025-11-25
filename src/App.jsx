import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import SuccessStories from './pages/SuccessStories';
import Audit from './pages/Audit';
import StartNow from './pages/StartNow';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToHashElement from './components/ScrollToHashElement';
import OrganizationSchema from './components/JsonLd/OrganizationSchema';
import DatasetSchema from './components/JsonLd/DatasetSchema';

function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-[#7000FF] selection:text-white flex flex-col">
      <Helmet>
        <title>Factotum AI - Soluciones de Automatización y Optimización</title>
        <meta name="description" content="Factotum AI ofrece soluciones de automatización, optimización y análisis de datos para potenciar tu negocio en la era digital." />
        <meta name="keywords" content="automatización, inteligencia artificial, optimización, análisis de datos, transformación digital" />
        <link rel="canonical" href="https://factotum.digital/" />
      </Helmet>
      
      <OrganizationSchema />
      <DatasetSchema />
      <ScrollToHashElement />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/start" element={<StartNow />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
