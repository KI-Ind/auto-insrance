export interface InsuranceProvider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  features: string[];
  minPrice: number;
}

export const insuranceProviders: InsuranceProvider[] = [
  {
    id: 'axa',
    name: 'AXA Assurance',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/AXA_Logo.svg/2560px-AXA_Logo.svg.png',
    rating: 4.5,
    features: [
      'Assistance 24/7',
      'Protection tous risques',
      'Garantie conducteur étendue'
    ],
    minPrice: 45
  },
  {
    id: 'allianz',
    name: 'Allianz',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Allianz_logo.svg/2560px-Allianz_logo.svg.png',
    rating: 4.3,
    features: [
      'Franchise modulable',
      'Bonus fidélité',
      'App mobile dédiée'
    ],
    minPrice: 42
  },
  {
    id: 'maif',
    name: 'MAIF',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Logo_maif_2019.svg/1200px-Logo_maif_2019.svg.png',
    rating: 4.4,
    features: [
      'Assurance collaborative',
      'Engagement responsable',
      'Service client premium'
    ],
    minPrice: 39
  }
];