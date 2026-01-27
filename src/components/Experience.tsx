import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Developer Intern',
    company: 'Digineous Pvt Ltd, Pune',
    period: 'Present',
    description: [
      'Developed responsive and user-friendly frontend interfaces using React.js, ensuring cross-browser compatibility and optimized performance.',
      'Integrated RESTful APIs with the frontend using Node.js, enabling seamless data flow between client and server components.',
      'Collaborated with backend and product teams to implement scalable features, follow best coding practices, and improve overall application usability.'
    ],
    technologies: ['React', 'Node.js', 'Restful APIs', 'Web Technologies']
  },
  {
    title: 'Research Intern',
    company: 'AIIMS, Mangalagiri (Collabed with KLU)',
    period: 'Present',
    description: [
      'Collected real-time patient data for analysis and system development',
      'Segmented and analyzed medical audio data using .wav processing tools',
      'Assisted in the development of a web-based assistive application for medical use',
      'Worked closely with medical professionals to understand data workflows'
    ],
    technologies: ['.wav tools', 'Python', 'Data Collection', 'Web Technologies']
  },
  {
    title: 'President, Data Science Club',
    company: 'KL University, Vaddeswaram',
    period: '2024 – 2025',
    description: [
      'Organized workshops and hackathons to enhance student skills in data science',
      'Led mentorship programs focused on real-world applications of data analysis',
      'Collaborated with faculty and industry professionals to deliver technical sessions',
      'Oversaw club operations and guided members in using industry-standard tools'
    ],
    technologies: ['Power BI', 'SQL', 'Tableau', 'Excel', 'Python']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-wine-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-wine-700"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="mb-4 flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-wine-700 text-white text-sm font-bold rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-wine-700 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-wine-700 font-semibold text-sm mt-1">{exp.company}</p>
                    <p className="text-gray-500 text-xs mt-2">{exp.period}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-wine-700 font-bold flex-shrink-0 mt-1">•</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gradient-to-r from-wine-50 to-wine-100 text-wine-800 text-xs font-semibold rounded-lg hover:from-wine-100 hover:to-wine-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
