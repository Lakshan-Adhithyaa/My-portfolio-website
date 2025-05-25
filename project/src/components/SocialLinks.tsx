import React from 'react';
import { SOCIAL_LINKS } from '../data/portfolio-data';
import * as LucideIcons from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6">
      {SOCIAL_LINKS.map((link) => {
        const Icon = (LucideIcons as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white shadow-md rounded-full text-blue-600 hover:text-blue-700 hover:transform hover:scale-110 transition-all duration-300"
            aria-label={link.name}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;