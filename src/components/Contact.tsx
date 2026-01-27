import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-wine-700 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="mailto:keesaravaishnavi2005@gmail.com" className="group">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg hover:border-wine-700 transition-all duration-300">
                <Mail className="text-wine-700 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 group-hover:text-wine-700 transition-colors">keesaravaishnavi2005@gmail.com</p>
              </div>
            </a>

            <a href="tel:9032034945" className="group">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg hover:border-wine-700 transition-all duration-300">
                <Phone className="text-wine-700 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600 group-hover:text-wine-700 transition-colors">+91 9032034945</p>
              </div>
            </a>

            <div className="group">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg hover:border-wine-700 transition-all duration-300">
                <MapPin className="text-wine-700 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">Vijayawada, Andhra Pradesh, India</p>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/vaishu24" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg hover:border-wine-700 transition-all duration-300">
                <Linkedin className="text-wine-700 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">LinkedIn</h3>
                <div className="flex items-center text-gray-600 group-hover:text-wine-700 transition-colors">
                  <span>Connect with me</span>
                  <ExternalLink className="ml-2" size={16} />
                </div>
              </div>
            </a>

            <a href="https://github.com/KeesaraVaishnavi" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg hover:border-wine-700 transition-all duration-300">
                <Github className="text-wine-700 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">GitHub</h3>
                <div className="flex items-center text-gray-600 group-hover:text-wine-700 transition-colors">
                  <span>View projects</span>
                  <ExternalLink className="ml-2" size={16} />
                </div>
              </div>
            </a>

            <div className="bg-gradient-to-br from-wine-700 to-wine-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-white opacity-90">
                I'm open to discussing new opportunities, projects, or just connecting! Feel free to reach out using any of the methods above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
