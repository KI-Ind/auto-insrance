import React from 'react';

const articles = [
  {
    title: "Comment choisir la meilleure assurance auto en 2024",
    date: "15 Mars 2024",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Guide complet pour vous aider à trouver l'assurance auto qui correspond le mieux à vos besoins."
  },
  {
    title: "Les nouvelles technologies dans l'assurance automobile",
    date: "10 Mars 2024",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Découvrez comment l'IA et les objets connectés révolutionnent le secteur de l'assurance auto."
  },
  {
    title: "5 astuces pour réduire votre prime d'assurance",
    date: "5 Mars 2024",
    image: "https://images.unsplash.com/photo-1484136540910-d66bb475348d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Conseils pratiques pour optimiser votre budget assurance auto sans compromettre votre couverture."
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog 1SwiS</h1>
          <p className="text-xl text-gray-500">
            Actualités, conseils et guides sur l'assurance automobile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-500 mb-4">
                  {article.description}
                </p>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Lire la suite →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
