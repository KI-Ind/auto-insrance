import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { FileText, Download, BookOpen, Video } from 'lucide-react';

const resources = [
  {
    title: "Guide de l'Assurance Auto",
    description: "Un guide complet pour comprendre les différentes garanties et options d'assurance auto.",
    icon: FileText,
    link: "#",
    type: "PDF"
  },
  {
    title: "Calculateur de Prime",
    description: "Outil Excel pour estimer votre prime d'assurance avant de faire une demande.",
    icon: Download,
    link: "#",
    type: "Excel"
  },
  {
    title: "Glossaire Assurance",
    description: "Tous les termes techniques de l'assurance auto expliqués simplement.",
    icon: BookOpen,
    link: "#",
    type: "Article"
  },
  {
    title: "Tutoriels Vidéo",
    description: "Série de vidéos explicatives sur l'assurance automobile.",
    icon: Video,
    link: "#",
    type: "Vidéo"
  }
];

export default function Ressources() {
  return (
    <PageTransition>
      <SEO
        title="Ressources et Outils"
        description="Découvrez nos ressources et outils gratuits pour mieux comprendre l'assurance auto et faire le meilleur choix."
        path="/ressources"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ressources et Outils
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Des outils gratuits et des guides pratiques pour vous aider à faire le meilleur choix d'assurance auto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                  <resource.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-indigo-600 font-medium">
                    {resource.type}
                  </span>
                  <a
                    href={resource.link}
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Télécharger →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-indigo-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'aide supplémentaire ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe d'experts est là pour vous guider dans votre choix d'assurance auto.
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