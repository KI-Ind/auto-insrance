import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Users, FileText, Settings, Activity } from 'lucide-react';

export default function Admin() {
  return (
    <PageTransition>
      <SEO
        title="Administration | 1SwiS"
        description="Panneau d'administration 1SwiS"
        path="/admin"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Administration
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Utilisateurs
              </h3>
              <p className="text-gray-600">1,234 utilisateurs actifs</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Devis
              </h3>
              <p className="text-gray-600">567 devis en cours</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Activity className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Activité
              </h3>
              <p className="text-gray-600">89 actions aujourd'hui</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Settings className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Configuration
              </h3>
              <p className="text-gray-600">Paramètres système</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Derniers Utilisateurs
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nom
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {/* Example rows */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Jean Dupont</td>
                        <td className="px-6 py-4 whitespace-nowrap">jean@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">2024-03-15</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Actif
                          </span>
                        </td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Activité Récente
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Activity className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Nouvelle inscription</p>
                      <p className="text-sm text-gray-600">Il y a 5 minutes</p>
                    </div>
                  </div>
                  {/* Add more activity items */}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Actions Rapides
                </h2>
                <div className="space-y-4">
                  <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Ajouter un utilisateur
                  </button>
                  <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Gérer les rôles
                  </button>
                  <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Configuration système
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Statistiques
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Taux de conversion</span>
                    <span className="font-medium">15.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Devis / jour</span>
                    <span className="font-medium">42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Temps moyen</span>
                    <span className="font-medium">2m 30s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}