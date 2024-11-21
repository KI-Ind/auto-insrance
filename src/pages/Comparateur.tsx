import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Car, Calendar, User, MapPin } from 'lucide-react';
import { insuranceProviders, InsuranceProvider } from '../data/insuranceProviders';
import ComparisonResults from '../components/ComparisonResults';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

interface FormData {
  marque: string;
  modele: string;
  annee: number;
  age: number;
  codePostal: string;
}

export default function Comparateur() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showResults, setShowResults] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setShowResults(true);
  };

  const handleSelectProvider = (provider: InsuranceProvider) => {
    console.log('Selected provider:', provider);
    // Handle provider selection
  };

  return (
    <PageTransition>
      <SEO
        title="Comparer les Assurances Auto | 1SwiS"
        description="Comparez les meilleures offres d'assurance auto et trouvez celle qui vous correspond"
        path="/comparateur"
      />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Comparez les meilleures assurances auto
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marque du véhicule
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    {...register('marque', { required: 'Ce champ est requis' })}
                    type="text"
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ex: Renault"
                  />
                  {errors.marque && (
                    <p className="mt-1 text-sm text-red-600">{errors.marque.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Modèle
                </label>
                <input
                  {...register('modele', { required: 'Ce champ est requis' })}
                  type="text"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Ex: Clio"
                />
                {errors.modele && (
                  <p className="mt-1 text-sm text-red-600">{errors.modele.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Année de mise en circulation
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    {...register('annee', { 
                      required: 'Ce champ est requis',
                      min: { value: 1990, message: 'Année minimum: 1990' },
                      max: { value: new Date().getFullYear(), message: 'Année invalide' }
                    })}
                    type="number"
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ex: 2020"
                  />
                  {errors.annee && (
                    <p className="mt-1 text-sm text-red-600">{errors.annee.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Âge du conducteur principal
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    {...register('age', { 
                      required: 'Ce champ est requis',
                      min: { value: 18, message: 'Âge minimum: 18 ans' },
                      max: { value: 99, message: 'Âge maximum: 99 ans' }
                    })}
                    type="number"
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ex: 25"
                  />
                  {errors.age && (
                    <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Code postal
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    {...register('codePostal', { 
                      required: 'Ce champ est requis',
                      pattern: { value: /^[0-9]{5}$/, message: 'Code postal invalide' }
                    })}
                    type="text"
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ex: 75001"
                  />
                  {errors.codePostal && (
                    <p className="mt-1 text-sm text-red-600">{errors.codePostal.message}</p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Comparer les offres
            </button>
          </form>
        </div>

        {showResults && (
          <ComparisonResults
            providers={insuranceProviders}
            onSelectProvider={handleSelectProvider}
          />
        )}
      </div>
    </PageTransition>
  );
}