import React from 'react';
import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaPaintBrush,
} from 'react-icons/fa';

const categories = [
  {
    icon: <FaLaptopCode className="text-wine-700 text-4xl animate-float" />,
    title: 'Web Development',
    description:
      'Building responsive and interactive websites using modern frameworks and technologies.',
  },
  {
    icon: <FaServer className="text-wine-700 text-4xl animate-float" />,
    title: 'Backend Development',
    description:
      'Creating robust server-side applications and API integrations.',
  },
  {
    icon: <FaCode className="text-wine-700 text-4xl animate-float" />,
    title: 'Programming',
    description:
      'Proficient in C, Java, Python, JavaScript, SQL .',
  },
  {
    icon: <FaCloud className="text-wine-700 text-4xl animate-float" />,
    title: 'Data analytics',
    description: 'Data collection, Data Segmentation, Data Pre-Processing and Developing cloud based data analytics using azure,.',
  },
  {
    icon: <FaDatabase className="text-wine-700 text-4xl animate-float" />,
    title: 'Database Management',
    description:
      'Designing and managing database systems with SQL and NoSQL technologies.',
  },
  {
    icon: <FaPaintBrush className="text-wine-700 text-4xl animate-float" />,
    title: 'UI/UX Design',
    description:
      'Creating user-friendly interfaces with a focus on user experience.',
  },
];

const skills = {
  'Frontend': [
    'JavaScript',
    'React.js',
    'HTML5',
    'CSS3',
    'Responsive UI Design',
  ],
  'Backend': [
    'Node.js',
    'Python',
    'Flask',
    'SQL',
    'Backend Development',
    'API Integration',
  ],
  'Tools & Others': [
    'Git / GitHub',
    'Power BI',
    'Tableau',
    'Machine Learning',
    'Artificial Intelligence (AI)',
  ],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            My <span className="text-wine-700">Skills</span>
          </h2>
          {/* <p className="text-gray-600 mt-2">
            Here are my technical skills and areas of expertise that I’ve developed through education and projects.
          </p> */}
          <div className="w-16 h-1 bg-wine-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 border border-wine-100 text-center"
            >
              <div className="flex justify-center mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Skills as Tags - 3 Columns Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, skillList]) => (
            <div
              key={group}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-wine-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-wine-600 to-wine-700 px-5 py-3">
                <h4 className="text-lg font-bold text-white">{group}</h4>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-wine-50 to-wine-100 text-wine-800 font-semibold text-xs rounded-md border border-wine-300 hover:from-wine-100 hover:to-wine-200 hover:border-wine-500 transition-all duration-200"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
