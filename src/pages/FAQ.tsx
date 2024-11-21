import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Comment fonctionne la comparaison d'assurance auto ?",
    answer: "Notre plateforme utilise une technologie d'IA avancée pour analyser les offres de différents assureurs en fonction de votre profil et de vos besoins spécifiques. Nous comparons instantanément les prix, les garanties et les services pour vous proposer les meilleures options."
  },
  {
    question: "Combien de temps faut-il pour obtenir un devis ?",
    answer: "Grâce à notre système automatisé, vous obtenez des devis instantanés en quelques secondes après avoir rempli le formulaire. Nos partenaires assureurs répondent en temps réel à votre demande."
  },
  {
    question: "Les devis sont-ils gratuits ?",
    answer: "Oui, absolument ! La comparaison et l'obtention de devis sont totalement gratuites. Vous ne payez que si vous décidez de souscrire à une assurance."
  },
  {
    question: "Quelles informations dois-je fournir ?",
    answer: "Pour obtenir un devis précis, nous avons besoin des informations de base sur votre véhicule (marque, modèle, année), votre profil de conducteur et votre historique de conduite."
  },
  {
    question: "Comment sont protégées mes données personnelles ?",
    answer: "Nous utilisons un système de cryptage avancé pour protéger vos données. Toutes les informations sont traitées conformément au RGPD et ne sont jamais partagées sans votre consentement."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <PageTransition>
      <SEO
        title="FAQ - Questions Fréquentes | 1SwiS"
        description="Trouvez les réponses à toutes vos questions sur notre comparateur d'assurance auto."
        path="/faq"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-gray-500">
              Tout ce que vous devez savoir sur notre comparateur d'assurance auto
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-indigo-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Vous n'avez pas trouvé la réponse à votre question ?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}