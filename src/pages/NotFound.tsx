import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <PageTransition>
      <SEO
        title="Page Non Trouvée | 1SwiS"
        description="La page que vous recherchez n'existe pas."
        path="/404"
      />
      <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center px-4 bg-gray-50">
        <div className="max-w-md w-full text-center">
          <img 
            src="https://cdn.prod.website-files.com/62da7459154e24c9c208c7fa/62da788addddd20328fd6974_logo.svg"
            alt="1SwiS Logo"
            className="h-12 mx-auto mb-8"
          />
          <h1 className="text-6xl font-bold text-indigo-600 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Page Non Trouvée
          </h2>
          <p className="text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="mb-8">
            <div className="relative max-w-xs mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Rechercher sur le site..."
              />
            </div>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contactez-nous
            </Link>
          </div>

          <div className="mt-8 space-y-2">
            <p className="text-sm text-gray-500">Pages populaires :</p>
            <div className="space-y-2">
              <Link to="/comparateur" className="block text-sm text-indigo-600 hover:text-indigo-500">
                Comparateur d'assurance
              </Link>
              <Link to="/comment-ca-marche" className="block text-sm text-indigo-600 hover:text-indigo-500">
                Comment ça marche
              </Link>
              <Link to="/blog" className="block text-sm text-indigo-600 hover:text-indigo-500">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;