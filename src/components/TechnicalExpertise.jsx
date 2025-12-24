import React, { useState, useEffect, useRef } from 'react';

function TechnicalExpertise() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Tailwind CSS', logo:null },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Symfony', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'MERN Stack', logo: null },
      ],
    },
    {
      title: 'Database & API',
      skills: [
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'REST API', logo: null },
      ],
    },
    {
      title: 'Data & AI',
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Machine Learning', logo: null },
        { name: 'Data Analysis', logo: null },
        { name: 'Data Visualization', logo: null },
      ],
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'UI/UX Design', logo: null },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Ubuntu', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg' },
        { name: 'Agile Methodologies', logo: null },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-blue-200 to-gray-50 py-20 px-6 overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-15 blur-2xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-6xl font-semibold text-gray-900 mb-4" style={{ fontFamily: "'Jost', sans-serif" }}>
            Technical Expertise
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-12 rounded-full"></div>

          {categories.map((cat, catIndex) => (
            <div key={cat.title} className="mb-10">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-500 text-blue-800 font-medium shadow-sm transform transition-all duration-500 ${
                      isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${(index + catIndex * 5) * 100}ms` : '0ms',
                    }}
                  >
                    {skill.logo && <img src={skill.logo} alt={skill.name} className="w-5 h-5" />}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalExpertise;
