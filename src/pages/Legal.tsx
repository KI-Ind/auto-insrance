import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function Legal() {
  return (
    <PageTransition>
      <SEO
        title="Mentions Légales | 1SwiS"
        description="Mentions légales et conditions d'utilisation de notre comparateur d'assurance auto."
        path="/mentions-legales"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-indigo max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Informations légales
              </h2>
              <p className="text-gray-600 mb-4">
                Le site 1SwiS est édité par la société 1SwiS SARL, au capital de 30 000 euros,
                immatriculée au RCS de Paris sous le numéro 830 181 137   .
              </p>
              <p className="text-gray-600 mb-4">
                Siège social : 54 Avenue de la Motte Picquet, 75015 Paris, France
                <br />
                Téléphone : +33 (0)1 84 20 00 60
                <br />
                Email : contact@1swis.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Hébergement
              </h2>
              <p className="text-gray-600 mb-4">
                Le site est hébergé par Netlify, Inc.
                <br />
                2325 3rd Street, Suite 215
                <br />
                San Francisco, California 94107
                <br />
                United States
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Protection des données personnelles
              </h2>
              <p className="text-gray-600 mb-4">
                Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée,
                et au Règlement Général sur la Protection des Données (RGPD), vous disposez
                d'un droit d'accès, de rectification, de suppression et d'opposition aux
                données personnelles vous concernant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Propriété intellectuelle
              </h2>
              <p className="text-gray-600 mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé
                par le droit d'auteur. Toute reproduction ou représentation, totale ou
                partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation.
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être
                averti lors de leur utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Limitation de responsabilité
              </h2>
              <p className="text-gray-600 mb-4">
                1SwiS ne pourra être tenu responsable des dommages directs ou indirects
                résultant de l'utilisation de ce site ou des sites qui lui sont liés.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}