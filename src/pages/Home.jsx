import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import FeaturedContent from '../components/FeaturedContent';
import CuratorSection from '../components/CuratorSection';
import LatestBlogPosts from '../components/LatestBlogPosts';
import FAQ from '../components/FAQ';

const Home = () => {
	 return (
		  <>
			   <Helmet>
					<title>Factotum Digital - Aprende AI, Marketing &amp; YouTube SEO</title>
					<meta
						 name="description"
						 content="Tu centro de aprendizaje en AI, marketing digital, YouTube SEO, podcasting y autopublicación. Videos, podcasts, cursos y libros."
					/>
					<meta
						 name="keywords"
						 content="YouTube SEO, AEO, podcast, AI learning, marketing digital, emprendimiento"
					/>
					<meta property="og:title" content="Factotum Digital - Aprende AI, Marketing &amp; YouTube SEO" />
					<meta property="og:description" content="Centro de aprendizaje digital con 150+ recursos gratuitos y premium" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://factotum.digital" />
			   </Helmet>

			   <Hero
					 title="Bienvenido a Factotum Digital"
					 subtitle="Tu centro de aprendizaje en AI, Marketing Digital y Crecimiento de Contenido"
					 cta1={{ text: 'Explorar Contenido', href: '/contenido' }}
					 cta2={{ text: 'Suscribirse Newsletter', href: '#footer-newsletter' }}
			   />

			   <FeaturedContent />
			   <CuratorSection />
			   <LatestBlogPosts limit={6} />
			   <FAQ />
		  </>
	 );
};

export default Home;
