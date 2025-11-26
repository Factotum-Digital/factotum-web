import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contenido from './pages/Contenido';
import Academy from './pages/Academy';
import Blog from './pages/Blog';
import About from './pages/About';
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
        <title>Factotum Digital - Aprende AI, Marketing &amp; YouTube SEO</title>
        <meta
          name="description"
          content="Centro de aprendizaje digital con 150+ recursos: videos, podcasts, cursos y libros sobre AI, marketing, YouTube SEO y crecimiento."
        />
        <meta name="keywords" content="YouTube SEO, AEO, podcast, AI, marketing digital, aprendizaje, cursos gratis, contenido" />
        <link rel="canonical" href="https://factotum.digital/" />
      </Helmet>
      
      <OrganizationSchema />
      <DatasetSchema />
      <ScrollToHashElement />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contenido" element={<Contenido />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
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
