import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Car, Shield, FileText, Bell } from 'lucide-react';

export default function Dashboard() {
  return (
    <PageTransition>
      <SEO
        title="Tableau de Bord | 1SwiS"
        description="Gérez vos assurances et suivez vos devis"
        path="/tableau-de-bord"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Tableau de Bord
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Car className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mes Véhicules
              </h3>
              <p className="text-gray-600">2 véhicules assurés</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mes Assurances
              </h3>
              <p className="text-gray-600">3 contrats actifs</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mes Devis
              </h3>
              <p className="text-gray-600">1 devis en attente</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Bell className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Notifications
              </h3>
              <p className="text-gray-600">2 nouvelles notifications</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Mes Véhicules Assurés
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Renault Clio</h3>
                      <p className="text-sm text-gray-600">AA-123-BB</p>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-700">
                      Voir détails
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Peugeot 308</h3>
                      <p className="text-sm text-gray-600">CC-456-DD</p>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-700">
                      Voir détails
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Dernières Activités
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <FileText className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Nouveau devis créé</p>
                      <p className="text-sm text-gray-600">Il y a 2 heures</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Contrat mis à jour</p>
                      <p className="text-sm text-gray-600">Il y a 1 jour</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Notifications
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <p className="font-medium text-indigo-900">
                      Nouveau devis disponible
                    </p>
                    <p className="text-sm text-indigo-700">Il y a 1 heure</p>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <p className="font-medium text-indigo-900">
                      Rappel : Renouvellement
                    </p>
                    <p className="text-sm text-indigo-700">Il y a 3 heures</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Actions Rapides
                </h2>
                <div className="space-y-4">
                  <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Nouveau Devis
                  </button>
                  <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Contacter Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}