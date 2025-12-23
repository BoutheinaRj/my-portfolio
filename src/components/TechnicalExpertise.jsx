import React, { useState, useEffect, useRef } from 'react';

function TechnicalExpertise() {
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-blue-50 to-gray-50 py-20 px-6 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-15 blur-2xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2
            className="text-4xl font-semibold text-gray-900 mb-4"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Technical Expertise
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-12"></div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'JavaScript',
              'MERN Stack',
              'PHP',
              'Symfony',
              'Spring Boot',
              'Java',
              'Python',
              'MongoDB',
              'MySQL',
              'Machine Learning',
              'Data Analysis',
              'Data Visualization',
              'UI/UX Design',
            ].map((skill, index) => (
              <span
                key={skill}
                className={`px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-50 transition-all duration-300 shadow-sm transform ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalExpertise;
