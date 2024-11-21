import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Countries Served', value: '20+', icon: Globe },
    { label: 'Happy Clients', value: '10k+', icon: Heart },
  ];

  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="Learn about our company, our mission, and the team behind our success."
        path="/about"
      />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              About Our Company
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're on a mission to transform the digital landscape through innovative solutions
              and exceptional user experiences.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2014, we started with a simple idea: to make technology more
                accessible and user-friendly. Since then, we've grown into a global team of
                passionate individuals working together to create innovative solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our journey has been marked by continuous learning, adaptation, and a
                relentless pursuit of excellence in everything we do.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                      ✓
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Innovation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We constantly push boundaries and explore new possibilities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                      ✓
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We strive for the highest quality in everything we deliver.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                      ✓
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Collaboration
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We believe in the power of working together to achieve great things.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;