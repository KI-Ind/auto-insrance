import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <PageTransition>
      <SEO
        title="Conditions Générales d'Utilisation | 1SwiS"
        description="Consultez nos conditions générales d'utilisation pour le comparateur d'assurance auto."
        path="/conditions"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Conditions Générales d'Utilisation
          </h1>

          <div className="prose prose-indigo max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Objet
              </h2>
              <p className="text-gray-600">
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir
                les modalités et conditions d'utilisation des services proposés sur le site
                1SwiS (ci-après "le Service"), ainsi que de définir les droits et obligations
                des parties dans ce cadre.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Accès au service
              </h2>
              <p className="text-gray-600">
                Le Service est accessible gratuitement à tout utilisateur disposant d'un accès
                à Internet. Tous les coûts afférents à l'accès au Service, que ce soient les
                frais matériels, logiciels ou d'accès à Internet sont exclusivement à la
                charge de l'utilisateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Inscription et utilisation
              </h2>
              <p className="text-gray-600">
                L'utilisation du Service nécessite que l'utilisateur remplisse le formulaire
                de comparaison d'assurance auto. L'utilisateur s'engage à fournir des
                informations exactes et à les mettre à jour si nécessaire.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Responsabilités
              </h2>
              <p className="text-gray-600">
                1SwiS ne peut être tenu responsable des dommages directs ou indirects causés
                au matériel de l'utilisateur lors de l'accès au site, et résultant de
                l'apparition d'un bug ou d'une incompatibilité.
              </p>
              <p className="text-gray-600 mt-4">
                1SwiS n'est pas responsable des dommages indirects (tels que perte de marché
                ou perte de chance) consécutifs aux éventuels dysfonctionnements des services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Propriété intellectuelle
              </h2>
              <p className="text-gray-600">
                La structure générale du site 1SwiS, ainsi que les textes, graphiques, images,
                sons et vidéos la composant, sont la propriété de l'éditeur ou de ses
                partenaires. Toute représentation et/ou reproduction et/ou exploitation
                partielle ou totale des contenus et services proposés par le site 1SwiS, par
                quelque procédé que ce soit, sans l'autorisation préalable et par écrit de
                1SwiS et/ou de ses partenaires est strictement interdite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Protection des données
              </h2>
              <p className="text-gray-600">
                Les informations recueillies font l'objet d'un traitement informatique destiné
                à la comparaison d'assurances auto. Conformément à la loi "Informatique et
                Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection
                des Données (RGPD), vous disposez d'un droit d'accès, de rectification, et
                d'opposition aux données vous concernant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Modifications
              </h2>
              <p className="text-gray-600">
                1SwiS se réserve le droit de modifier les présentes CGU à tout moment. Les
                utilisateurs seront informés de toute modification par la publication des CGU
                modifiées sur le site. La continuation de l'utilisation du Service après
                modification des CGU constitue l'acceptation de ces modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Droit applicable
              </h2>
              <p className="text-gray-600">
                Les présentes CGU sont régies par le droit français. En cas de litige et à
                défaut d'accord amiable, le litige sera porté devant les tribunaux français
                conformément aux règles de compétence en vigueur.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}