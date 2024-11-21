import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function Privacy() {
  return (
    <PageTransition>
      <SEO
        title="Politique de Confidentialité | 1SwiS"
        description="Découvrez comment nous protégeons vos données personnelles."
        path="/confidentialite"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-500">
              La protection de vos données personnelles est notre priorité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Protection des Données
              </h3>
              <p className="text-gray-600">
                Nous utilisons les dernières technologies de cryptage pour protéger vos informations personnelles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lock className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sécurité Renforcée
              </h3>
              <p className="text-gray-600">
                Accès sécurisé et authentification à double facteur pour protéger votre compte.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Eye className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Transparence
              </h3>
              <p className="text-gray-600">
                Nous vous informons clairement de l'utilisation de vos données.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Conformité RGPD
              </h3>
              <p className="text-gray-600">
                Nous respectons toutes les exigences du Règlement Général sur la Protection des Données.
              </p>
            </div>
          </div>

          <div className="prose prose-indigo max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Collecte des données
              </h2>
              <p className="text-gray-600">
                Nous collectons uniquement les données nécessaires pour vous fournir nos services
                de comparaison d'assurance auto. Ces données incluent vos informations personnelles,
                les détails de votre véhicule et votre historique de conduite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Utilisation des données
              </h2>
              <p className="text-gray-600">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-2">
                <li>Vous fournir des devis d'assurance personnalisés</li>
                <li>Améliorer nos services et votre expérience utilisateur</li>
                <li>Vous contacter concernant nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Vos droits
              </h2>
              <p className="text-gray-600">
                Vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Sécurité
              </h2>
              <p className="text-gray-600">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
                pour protéger vos données contre tout accès non autorisé, modification,
                divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Contact
              </h2>
              <p className="text-gray-600">
                Pour toute question concernant notre politique de confidentialité ou pour
                exercer vos droits, contactez notre délégué à la protection des données :
              </p>
              <p className="text-gray-600 mt-2">
                Email : dpo@1swiss.com<br />
                Téléphone : +33 (0)1 84 20 00 60<br />
                Adresse : 54 Avenue de la Motte Picquet, 75015 Paris, France
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}