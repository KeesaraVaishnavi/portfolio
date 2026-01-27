import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-wine-700 mx-auto"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-base text-gray-700 leading-relaxed">
              I am a Computer Science undergraduate at KL University, specializing in Data Science & Big Data Analytics, with a strong interest in building scalable and data-driven software solutions.
            </p>
            
            <p className="text-base text-gray-700 leading-relaxed">
              I am currently working as a Software Development Intern at Digineous Pvt. Ltd., Pune, contributing as a Frontend Developer using React.js, Node.js, and SQL, and developing and integrating RESTful APIs for real-world applications.
            </p>
            
            <p className="text-base text-gray-700 leading-relaxed">
              I am also working as a Research Intern at AIIMS–Mangalagiri, in collaboration with KL University, on a Central Government–funded research project. My work involves real-world healthcare data collection, data segmentation, and data preprocessing using CNN-based techniques to support advanced analytics and machine learning workflows.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              I am actively exploring AI and Machine Learning alongside Data Science and am always open to learning, collaboration, and connecting with professionals working on impactful projects.
            </p>
          </div>

          {/* Sidebar Highlights */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-wine-600 to-wine-700 text-white p-6 rounded-lg shadow-lg border-l-4 border-white">
              <h3 className="text-xl font-bold mb-2">🎯 Focus Areas</h3>
              <ul className="text-sm space-y-1.5">
                <li>• Data Analytics</li>
                <li>• Frontend Development</li>
                <li>• Backend Development</li>
                <li>• Artifical Intelligence & Machine Learning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-wine-700 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">🎓 Education</h3>
              <p className="text-sm text-gray-600">CS Undergrad at KL University</p>
              <p className="text-xs text-wine-700 mt-2 font-semibold">Data Science & Big Data Analytics</p>
            </div>
          </div>
        </div>

        {/* Traits Cards - Full Width */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-wine-700 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-2">🧩 Problem Solver</h3>
            <p className="text-gray-600 text-sm">I enjoy tackling complex challenges and finding efficient, elegant solutions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-wine-700 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-2">⚡ Fast Learner</h3>
            <p className="text-gray-600 text-sm">I quickly adapt to new technologies and programming languages.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-wine-700 hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-2">🤝 Team Player</h3>
            <p className="text-gray-600 text-sm">I thrive in collaborative environments and effectively communicate ideas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
