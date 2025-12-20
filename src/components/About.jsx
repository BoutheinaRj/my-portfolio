import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/img.png';

function About() {
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
      id="about"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-6 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-15 blur-2xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image section */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl transform -rotate-2 opacity-10"></div>

              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <img
                  src={img}
                  alt="Boutheina Rjab"
                  className="w-full h-85 lg:h-70 object-cover rounded-xl"
                />
              </div>

              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-600 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-pulse delay-75"></div>
            </div>
          </div>

          {/* Text content */}
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3
              className="text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              I'm{' '}
              <span className="text-blue-700">Boutheina Rjab</span>
            </h3>

            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              I’m a second-cycle engineering student specializing in{' '}
              <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                Data Science
              </span>{' '}
              and{' '}
              <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                Artificial Intelligence
              </span>
              , with a strong interest in{' '}
              <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                web development
              </span>.
            </p>

            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              I build modern, responsive, and user-friendly web applications, and I enjoy integrating
              data and AI to create smart, practical features. Through my studies and projects, I’ve
              gained solid skills in programming, algorithms, and data analysis.
            </p>

            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              I’m particularly interested in working at the intersection of web technologies and AI,
              designing solutions that are both functional and visually clear.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600">
              <p
                className="text-gray-800 leading-relaxed font-medium"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                My goal is to continuously grow in web development, data science, and AI, and to build
                digital products with real-world impact.
              </p>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3
            className="text-3xl font-semibold text-gray-900 mb-6"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Technical Expertise
          </h3>

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
                className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-300 shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
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

export default About;
