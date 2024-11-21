import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  return (
    <PageTransition>
      <SEO
        title="1SwiS - Comparateur d'Assurance Auto Nouvelle Génération"
        description="Comparez et trouvez l'assurance auto idéale en quelques clics grâce à notre comparateur intelligent alimenté par l'IA. Obtenez des devis personnalisés rapidement et économisez dès aujourd'hui !."
        path="/"
      />
      <Hero />
      <Features />
    </PageTransition>
  );
};

export default Home;
