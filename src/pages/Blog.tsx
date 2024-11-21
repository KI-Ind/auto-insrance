import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { blogArticles } from '../data/blogArticles';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <PageTransition>
      <SEO
        title="Blog Assurance Auto | Conseils et Actualités | 1SwiS"
        description="Découvrez nos articles experts sur l'assurance auto : guides, conseils, comparatifs et actualités pour faire les meilleurs choix pour votre véhicule."
        path="/blog"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog 1SwiS
            </h1>
            <p className="text-xl text-gray-500">
              Actualités, conseils et guides sur l'assurance automobile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Link to={`/blog/${article.slug}`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    {article.readTime}
                  </div>
                  <Link to={`/blog/${article.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-gray-500 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">{article.category}</span>
                    </div>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
