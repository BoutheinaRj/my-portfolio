import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

 const education = [
  {
    degree: 'Bachelor’s in Computer Engineering (in progress)',
    institution: 'ESPRIT Monastir, Tunisia',
    period: '2024 – Present',
    description: 'Specialization in AI & Data Science',
    achievements: []
  },
  {
    degree: 'Bachelor’s in Electronics, Electrical Engineering & Automation',
    institution: 'Higher Institute of Applied Sciences and Technology of Mahdia (ISSATM), Tunisia',
    period: '2021 – 2024',
    description: 'Specialization in Industrial Computer Science',
    achievements: ['Graduated with Highest Honors']
  },
  {
    degree: 'Baccalaureate',
    institution: 'Mahdia, Tunisia',
    period: '2021',
    description: 'Technical Sciences',
    achievements: ['Graduated with Merit']
  }
];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-blue-200 via-white to-blue-200 py-20 px-6 overflow-hidden" style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-15 blur-2xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-5xl md:text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Jost', sans-serif" }}>
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                 

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-gray-600 bg-blue-50 px-4 py-2 rounded-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-lg text-blue-600 font-semibold mb-3">
                      {edu.institution}
                    </p>

                    <p className="text-gray-600 mb-4">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <Award className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
