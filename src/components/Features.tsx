import React from 'react';
import { Brain, Shield, Zap, Clock, BarChart, Lock } from 'lucide-react';

const features = [
  {
    name: 'Recommandations IA',
    description: 'Nos algorithmes d\'IA analysent votre profil pour trouver l\'assurance parfaite.',
    icon: Brain
  },
  {
    name: 'Devis Instantanés',
    description: 'Obtenez des devis instantanés de plusieurs assureurs grâce à notre moteur de comparaison.',
    icon: Zap
  },
  {
    name: 'Sécurisé & Privé',
    description: 'Vos données sont protégées par un chiffrement de niveau entreprise.',
    icon: Lock
  },
  {
    name: 'Assistant Virtuel 24/7',
    description: 'Notre assistant IA est toujours disponible pour répondre à vos questions.',
    icon: Clock
  },
  {
    name: 'Analyses Intelligentes',
    description: 'Suivez vos métriques d\'assurance et obtenez des conseils personnalisés.',
    icon: BarChart
  },
  {
    name: 'Protection Premium',
    description: 'Bénéficiez d\'options de couverture complètes adaptées à vos besoins.',
    icon: Shield
  }
];

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Fonctionnalités</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une meilleure façon d'assurer votre véhicule
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez l'avenir de l'assurance auto avec notre plateforme innovante alimentée par une technologie de pointe.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}