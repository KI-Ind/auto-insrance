import React from 'react';
import { Star } from 'lucide-react';
import { InsuranceProvider } from '../data/insuranceProviders';

interface InsuranceCardProps {
  provider: InsuranceProvider;
  onSelect: (provider: InsuranceProvider) => void;
}

export default function InsuranceCard({ provider, onSelect }: InsuranceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <img 
          src={provider.logo} 
          alt={provider.name}
          className="h-8 object-contain"
        />
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600">{provider.rating}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{provider.name}</h3>
      
      <ul className="space-y-2 mb-4">
        {provider.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-4">
        <div className="text-gray-900">
          <span className="text-2xl font-bold">€{provider.minPrice}</span>
          <span className="text-gray-600">/mois</span>
        </div>
        <button
          onClick={() => onSelect(provider)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Choisir
        </button>
      </div>
    </div>
  );
}