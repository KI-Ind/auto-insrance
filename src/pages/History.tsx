import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Calendar, Award, Users, Target } from 'lucide-react';

const milestones = [
  {
    year: '2020',
    title: 'Création de 1SwiS',
    description: 'Lancement de notre startup avec une vision innovante de l\'assurance auto.'
  },
  {
    year: '2021',
    title: 'Premier partenariat majeur',
    description: 'Signature avec l\'un des plus grands assureurs français.'
  },
  {
    year: '2022',
    title: 'Développement de l\'IA',
    description: 'Intégration de notre technologie d\'intelligence artificielle.'
  },
  {
    year: '2023',
    title: 'Expansion nationale',
    description: 'Couverture complète du territoire français.'
  }
];

export default function History() {
  return (
    <PageTransition>
      <SEO
        title="Notre Histoire | 1SwiS"
        description="Découvrez l'histoire de 1SwiS et notre vision pour l'avenir de l'assurance auto"
        path="/notre-histoire"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Histoire
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              De startup ambitieuse à leader de l'innovation dans l'assurance auto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Notre Mission
              </h2>
              <p className="text-gray-600">
                Révolutionner l'assurance auto en la rendant plus accessible,
                transparente et adaptée aux besoins de chacun grâce à la
                technologie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-gray-600">
                Innovation, transparence et satisfaction client sont au cœur de
                notre ADN. Nous travaillons chaque jour pour améliorer
                l'expérience de nos utilisateurs.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gray-50 text-lg font-medium text-gray-900">
                Notre Parcours
              </span>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="flow-root">
              <ul className="-mb-8">
                {milestones.map((milestone, index) => (
                  <li key={milestone.year}>
                    <div className="relative pb-8">
                      {index !== milestones.length - 1 && (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      )}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center ring-8 ring-white">
                            <Calendar className="h-4 w-4 text-white" />
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                          <div>
                            <p className="text-lg font-medium text-gray-900">
                              {milestone.title}
                            </p>
                            <p className="mt-1 text-gray-500">
                              {milestone.description}
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-indigo-600 font-medium">
                            {milestone.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}