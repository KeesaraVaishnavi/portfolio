import React from 'react';
import { Award, GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

const educationItems: EducationItem[] = [
  {
    degree: 'Bachelor of Technology, Computer Science and Engineering - Honors',
    institution: 'KL University, Vaddeswaram, Vijayawada',
    location: 'Andhra Pradesh',
    period: '2022 - 2026',
    details: [
      'Current CGPA: 9.4/10',
      'Specializing in Data Science and big data Analytics',
      'Completed 4 Stack Development courses with hands-on projects',
      'Participated in various hackathons and technical events'
    ]
  },
  {
    degree: 'Board of Intermediate Secondary Education',
    institution: 'Sri Chaitanya Junior College, Vijayawada',
    location: 'Andhra Pradesh',
    period: '2020 - 2022',
    details: [
      'CGPA:8.0/10',
      'Achieved 95% in Mathematics',
      'Foundation in Physics, Chemistry with practical lab experience'
    ]
  },
  {
    degree: 'Central Board of Secondary Education, High School',
    institution: 'N St Mathews Public School, Vijayawada',
    location: 'Andhra Pradesh',
    period: '2016 - 2020',
    details: [
      'CGPA: 8.5/10',
      'Completed core subjects including Mathematics, Social Sciences, and Languages',
      'Actively participated in school-level science exhibitions',
      'Participated in almost all extracurricular activities'
    ]
  }
];

const certifications: CertificationItem[] = [
  {
    name: 'TalentNext Java Full Stack',
    issuer: 'Wipro',
    date: '2025'
  },
  {
    name: 'Google Cloud Certified Associate Engineer',
    issuer: 'Google Cloud',
    date: '2025'
  },
  {
    name: 'BEC Lingua Skills',
    issuer: 'Cambridge Assessment',
    date: '2025'
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024'
  },
  {
    name: 'RedHat Certified Enterprise Application Developer',
    issuer: 'RedHat',
    date: '2024'
  },
  {
    name: 'Oracle Cloud Infrastructure Generative AI Certified Professional',
    issuer: 'Oracle',
    date: '2023'
  },
  {
    name: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    date: '2023'
  },
  {
    name: 'PowerBI Workshop',
    issuer: 'Microsoft',
    date: '2023'
  },
  {
    name: 'Coursera Credentials',
    issuer: 'Java FullStack Developer Specialization (Board Infinity), Spring Framework Specialization (LearnQuest), Software Development Lifecycle Specialization (University of Minnesota)',
    date: '2024'
  },
  {
    name: 'Coursera Courses',
    issuer: 'Data Structures & Backend with Java, Frontend for Java Full Stack Development, Spring Data Repositories, Spring MVC, Spring Boot and Rest Controllers, Data Warehousing: Schema, ETL, Optimal Performance',
    date: '2023'
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-wine-50 via-wine-100 to-wine-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-wine-800 mb-4">Education & Certifications</h2>
          <p className="text-lg text-wine-700 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my knowledge and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mt-16">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-wine-700" />
              <h3 className="text-2xl font-bold text-wine-800">Educational Background</h3>
            </div>

            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-wine-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-wine-700 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-bold text-wine-800 mb-2">{item.degree}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-wine-600 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-wine-700" />
                        {item.institution}, {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-wine-700" />
                        {item.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-wine-700">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-wine-700" />
              <h3 className="text-2xl font-bold text-wine-800">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-wine-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-wine-800">{cert.name}</h4>
                    <span className="text-sm text-wine-700 font-medium">{cert.date}</span>
                  </div>
                  <p className="text-wine-600 font-medium mb-2">{cert.issuer}</p>
                  {cert.description && (
                    <p className="text-wine-600 text-sm">{cert.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
