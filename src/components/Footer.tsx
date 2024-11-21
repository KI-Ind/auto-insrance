import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src="https://cdn.prod.website-files.com/62da7459154e24c9c208c7fa/62da788addddd20328fd6974_logo.svg" 
                alt="1SwiS Logo" 
                className="h-8"
              />
            </Link>
            <p className="text-gray-500 text-base">
              Simplifiez votre assurance auto grâce à l'intelligence artificielle pour une expérience sur mesure.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/1swis.fr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/1SwiS_fr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/1swis_fr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/1swis/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/comparateur" className="text-base text-gray-500 hover:text-gray-900">
                      Comparateur Auto
                    </Link>
                  </li>
                  <li>
                    <Link to="/comment-ca-marche" className="text-base text-gray-500 hover:text-gray-900">
                      Comment ça marche
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">
                      Nous contacter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Assistance</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">
                      Support Client
                    </Link>
                  </li>
                  <li>
                    <Link to="/ressources" className="text-base text-gray-500 hover:text-gray-900">
                      Ressources
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">À Propos</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/notre-histoire" className="text-base text-gray-500 hover:text-gray-900">
                      Notre Histoire
                    </Link>
                  </li>
                  <li>
                    <Link to="/equipe" className="text-base text-gray-500 hover:text-gray-900">
                      L'Équipe
                    </Link>
                  </li>
                  <li>
                    <Link to="/carrieres" className="text-base text-gray-500 hover:text-gray-900">
                      Carrières
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Légal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/confidentialite" className="text-base text-gray-500 hover:text-gray-900">
                      Confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link to="/conditions" className="text-base text-gray-500 hover:text-gray-900">
                      CGU
                    </Link>
                  </li>
                  <li>
                    <Link to="/mentions-legales" className="text-base text-gray-500 hover:text-gray-900">
                      Mentions Légales
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} 1SwiS. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}