import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Marie Laurent',
    role: 'CEO & Fondatrice',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: '15 ans d\'expérience dans l\'assurance et la technologie',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Thomas Dubois',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Expert en IA et développement de plateformes',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Sophie Martin',
    role: 'Directrice Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Spécialiste du marketing digital et de l\'acquisition',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Pierre Durand',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Full-stack developer passionné par l\'innovation',
    social: {
      linkedin: '#',
      github: '#'
    }
  }
];

export default function Team() {
  return (
    <PageTransition>
      <SEO
        title="Notre Équipe | 1SwiS"
        description="Découvrez l'équipe derrière 1SwiS, le comparateur d'assurance auto nouvelle génération"
        path="/equipe"
      />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Une équipe passionnée qui travaille chaque jour pour révolutionner
              l'assurance auto en France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-indigo-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-indigo-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-indigo-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}