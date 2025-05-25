import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = (LucideIcons as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[skill.icon] || LucideIcons.Code;

  return (
    <div
      ref={ref}
      className={`mb-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center mb-2">
        <div className="p-2 mr-3 bg-blue-100 rounded-md transform hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div className="font-medium text-gray-800">{skill.name}</div>
        <div className="ml-auto text-sm font-medium text-gray-500">{skill.percentage}%</div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.percentage}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;