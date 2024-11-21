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

            <div className="relative w-full h-96 mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </div>

            <div 
              className="prose prose-indigo max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

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
