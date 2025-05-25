import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { ROLES } from '../data/portfolio-data';
import { FileDown } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Hero: React.FC = () => {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <div className="mb-4 inline-block md:block">
              <span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Alex Smith</span>
            </h1>
            
            <div className="h-8 mb-6">
              <h2 className="text-xl sm:text-2xl text-gray-700">
                I'm a <span className="text-blue-600">{role}</span>
                <span className="animate-blink">|</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto md:mx-0">
              Passionate about creating engaging digital experiences with clean code and creative problem-solving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
              >
                <FileDown className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full overflow-hidden bg-white group">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;