import React, { useState, useEffect, useRef } from 'react';
import photo from '../assets/prof_blur.jpg';

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

              <div className="relative bg-white rounded-2xl p-1 shadow-2xl">
                <div className="w-10/12 mx-auto aspect-[4/5] overflow-hidden rounded-xl">
                  <img
                    src={photo}
                    alt="Boutheina Rjab"
                    className="block w-full h-full object-cover scale-125"
                    style={{ transformOrigin: '48% 30%' }}
                  />
                </div>
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
              className="text-3xl font-semibold text-gray-900"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Hi, I'm{' '}
              <span className="text-blue-700">Boutheina Rjab</span> 👋
            </h3>

            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              I’m a final-year Computer Engineering student specializing in{' '}
              <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                Artificial Intelligence
              </span>{' '}
              and{' '}
              <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                Data Science
              </span>{' '}
              at ESPRIM, with a strong interest in{' '}
              <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                AI engineering
              </span>{' '}
              and{' '}
              <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                full-stack web development
              </span>.
            </p>

            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              I build modern, responsive, and user-friendly applications, combining{' '}
              <span className="font-semibold text-blue-700">web technologies, data science, and AI</span>{' '}
              to develop intelligent, practical solutions. My experience spans{' '}
              <span className="font-semibold text-blue-700">
                machine learning, deep learning, Natural Language Processing (NLP), Large Language
                Models (LLMs), Retrieval-Augmented Generation (RAG), and AI Agents
              </span>.
            </p>

            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              I’m particularly interested in developing intelligent applications powered by{' '}
              <span className="font-semibold text-blue-700">
                Generative AI, conversational agents, and data-driven systems
              </span>
              , from backend APIs and database design to intuitive user interfaces.
            </p>

            <div className="bg-gradient-to-r from-blue-100 to-white p-6 rounded-xl border-l-4 border-blue-600">
              <p
                className="text-gray-800 leading-relaxed font-medium"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                My goal is to continuously grow as an{' '}
                <span className="font-semibold text-blue-700">AI Engineer and Full-Stack Developer</span>,
                transforming innovative ideas into reliable digital products with real-world impact.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default About;