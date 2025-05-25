import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Code, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const leftSide = useScrollAnimation();
  const rightSide = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div
            ref={leftSide.ref}
            className={`md:w-1/2 mb-10 md:mb-0 md:pr-10 transition-all duration-1000 ${
              leftSide.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-tl-3xl rounded-br-3xl transform -rotate-6"></div>
              <img
                src="https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg"
                alt="About Me"
                className="relative rounded-tl-3xl rounded-br-3xl shadow-lg"
              />
            </div>
          </div>

          <div
            ref={rightSide.ref}
            className={`md:w-1/2 md:pl-10 transition-all duration-1000 ${
              rightSide.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate software developer with a keen eye for detail and a dedication to creating clean, efficient, and 
              user-friendly applications. With over 5 years of experience in web development, I've cultivated a strong foundation 
              in both frontend and backend technologies.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in continuous learning and staying updated with the latest industry trends. My goal is to leverage technology 
              to solve real-world problems and create meaningful experiences for users.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Technical Expertise</h4>
                  <p className="text-gray-600 text-sm">Skilled in modern JavaScript frameworks, responsive design, and server-side development.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Creative Problem Solving</h4>
                  <p className="text-gray-600 text-sm">I enjoy tackling complex challenges and finding elegant solutions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Attention to Detail</h4>
                  <p className="text-gray-600 text-sm">I believe the smallest details make the biggest difference in user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;