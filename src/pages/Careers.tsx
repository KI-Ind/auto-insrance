import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Briefcase, MapPin, Clock, Award } from 'lucide-react';

const jobs = [
  {
    title: 'Développeur Full Stack Senior',
    department: 'Engineering',
    location: 'Paris',
    type: 'CDI',
    description: 'Nous recherchons un développeur expérimenté pour rejoindre notre équipe technique.'
  },
  {
    title: 'Data Scientist',
    department: 'Data',
    location: 'Paris',
    type: 'CDI',
    description: 'Expert en machine learning pour améliorer nos algorithmes de recommandation.'
  },
  {
    title: 'Product Manager',
    department: 'Produit',
    location: 'Paris',
    type: 'CDI',
    description: 'Définir et piloter la roadmap produit de notre plateforme.'
  }
];

const benefits = [
  {
    icon: Award,
    title: 'Package Attractif',
    description: 'Salaire compétitif, participation, intéressement et stock options'
  },
  {
    icon: Clock,
    title: 'Flexibilité',
    description: 'Horaires flexibles et télétravail partiel'
  },
  {
    icon: Briefcase,
    title: 'Formation Continue',
    description: 'Budget formation et conférences'
  }
];

export default function Careers() {
  return (
    <PageTransition>
      <SEO
        title="Carrières | 1SwiS"
        description="Rejoignez l'aventure 1SwiS et participez à la révolution de l'assurance auto"
        path="/carrieres"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Rejoignez l'Aventure
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Construisez avec nous le futur de l'assurance auto en France
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-lg">
                <benefit.icon className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Postes Ouverts
          </h2>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.department}
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    {job.location}
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Voir l'offre →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas le poste qui vous correspond ?
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Candidature spontanée
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}