import React from 'react';
import { Shield, Zap, CheckCircle, Car } from 'lucide-react';

const steps = [
  {
    icon: Car,
    title: "Renseignez votre véhicule",
    description: "Indiquez les caractéristiques de votre voiture pour obtenir des devis personnalisés."
  },
  {
    icon: Zap,
    title: "Comparez instantanément",
    description: "Notre IA analyse en temps réel les meilleures offres d'assurance adaptées à votre profil."
  },
  {
    icon: CheckCircle,
    title: "Choisissez votre assurance",
    description: "Sélectionnez l'offre qui vous convient le mieux et souscrivez en ligne en quelques clics."
  }
];

export default function Comment() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Trouvez votre assurance auto idéale en 3 étapes simples grâce à notre technologie innovante.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Sécurisé</h3>
              <p className="text-gray-500">Vos données sont protégées par un cryptage de niveau bancaire.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Comparaison Instantanée</h3>
              <p className="text-gray-500">Obtenez des devis en quelques secondes grâce à notre technologie IA.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Accompagnement Expert</h3>
              <p className="text-gray-500">Une équipe dédiée pour vous guider dans votre choix d'assurance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}