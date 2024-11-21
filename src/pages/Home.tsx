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
        description="Trouvez la meilleure assurance auto grâce à notre comparateur intelligent alimenté par l'IA."
        path="/"
      />
      <Hero />
      <Features />
    </PageTransition>
  );
};

export default Home;