import React from 'react';
import { SOCIAL_LINKS } from '../data/portfolio-data';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-6">Alex Smith</div>
          
          <div className="flex space-x-6 mb-8">
            {SOCIAL_LINKS.map((link) => {
              const Icon = (LucideIcons as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          <div className="text-gray-400 text-sm text-center">
            <p className="mb-2">Designed and built with ❤️ by Alex Smith</p>
            <p>&copy; {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;