import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import { blogArticles } from '../data/blogArticles';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function BlogPost() {
  const { slug } = useParams();
  const article = blogArticles.find(article => article.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageTransition>
      <SEO
        title={article.metaTitle}
        description={article.metaDescription}
        path={`/blog/${article.slug}`}
        type="article"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {article.readTime}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  {article.category}
                </div>
              </div>
            </header>

            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            <div className="prose prose-indigo max-w-none">
              {article.content}
            </div>

            <footer className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </footer>
          </article>
        </div>
      </div>
    </PageTransition>
  );
}
