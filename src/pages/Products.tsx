import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Tag, Box, Zap } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Basic Plan',
    description: 'Perfect for small businesses and startups',
    price: '$29',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    icon: Box,
  },
  {
    id: 2,
    name: 'Pro Plan',
    description: 'Ideal for growing businesses',
    price: '$59',
    features: ['All Basic features', 'Feature 4', 'Feature 5', 'Feature 6'],
    icon: Tag,
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'For large organizations',
    price: '$99',
    features: ['All Pro features', 'Feature 7', 'Feature 8', 'Feature 9'],
    icon: Zap,
  },
];

const Products = () => {
  return (
    <PageTransition>
      <SEO
        title="Our Products"
        description="Explore our range of products and services designed to help your business grow."
        path="/products"
      />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                    product.popular ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {product.description}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                      {product.price}
                      <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        /month
                      </span>
                    </p>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <svg
                            className="h-5 w-5 text-primary-500 mr-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900">
                      Get Started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Products;