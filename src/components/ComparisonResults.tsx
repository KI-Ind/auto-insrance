import React from 'react';
import { InsuranceProvider } from '../data/insuranceProviders';
import InsuranceCard from './InsuranceCard';

interface ComparisonResultsProps {
  providers: InsuranceProvider[];
  onSelectProvider: (provider: InsuranceProvider) => void;
}

export default function ComparisonResults({ providers, onSelectProvider }: ComparisonResultsProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Meilleures offres pour vous
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map((provider) => (
          <InsuranceCard
            key={provider.id}
            provider={provider}
            onSelect={onSelectProvider}
          />
        ))}
      </div>
    </div>
  );
}