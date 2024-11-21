import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center" aria-label="1SwiS Home">
            <img 
              src="https://cdn.prod.website-files.com/62da7459154e24c9c208c7fa/62da788addddd20328fd6974_logo.svg" 
              alt="1SwiS Logo" 
              className="h-8"
              width="120"
              height="32"
            />
          </Link>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link to="/comparateur" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Comparer
            </Link>
            <Link to="/comment-ca-marche" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Comment ça marche
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Blog
            </Link>
            {isAuthenticated && (
              <Link to="/tableau-de-bord" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Tableau de Bord
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/admin" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Admin
              </Link>
            )}

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profil" className="text-gray-600 hover:text-indigo-600 transition-colors" aria-label="Profile">
                  <User className="h-5 w-5" aria-hidden="true" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                  aria-label="Logout"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/connexion" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Connexion
                </Link>
                <Link 
                  to="/inscription" 
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/comparateur" 
              className="block px-3 py-2 text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Comparer
            </Link>
            <Link 
              to="/comment-ca-marche" 
              className="block px-3 py-2 text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            {isAuthenticated && (
              <Link 
                to="/tableau-de-bord" 
                className="block px-3 py-2 text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Tableau de Bord
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link 
                to="/admin" 
                className="block px-3 py-2 text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            {isAuthenticated ? (
              <>
                <Link 
                  to="/profil"
                  className="block px-3 py-2 text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profil
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-gray-600"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/connexion"
                  className="block px-3 py-2 text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link 
                  to="/inscription"
                  className="block w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}