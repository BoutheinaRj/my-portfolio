import React from 'react';

function Experience() {
  const internships = [
    {
      role: 'AI & Data Science Intern (Final Year Project)',
      company: 'Monastir Habib Bourguiba International Airport',
      duration: '2024',
      description:
        'Developed an intelligent airport assistant robot (Aerobot) capable of scanning passengers’ boarding passes using computer vision and displaying real-time flight information. The system relied on data scraping techniques to retrieve live flight data and presented results through an interactive React-based interface.',
      certificate: '' // Ajouter le lien PDF ici, ex: '/certificates/airport.pdf'
    },
    {
      role: 'Web Development Intern',
      company: 'YOUPTECK',
      duration: 'July 2023 – September 2023',
      description:
        'Contributed to the design and development of the company’s WordPress website. Actively participated in content creation and integration for both French and English versions of the site. Worked closely with the team while demonstrating creativity, rigor, and strong professional skills.',
      certificate: '' // Ajouter le lien PDF ici
    },
    {
      role: 'Web Development Intern',
      company: 'NeuralBey',
      duration: 'July 2025 – August 2025',
      description:
        'Developed the front-end of a corporate website and internship management platform using React.js. Implemented responsive landing pages, services and contact sections, dynamic internship listings, and online application forms. Integrated REST APIs with a Django backend, focusing on clean UI/UX, component reusability, and modern design principles.',
      certificate: '' // Ajouter le lien PDF ici
    }
  ];

  const trainings = [
    {
      title: 'Insight Cybersecurity Hackathon—Certificate of Participation',
      institute: 'IEEE ESPRIM Student Branch',
      duration: 'November 2025',
      description:
        'Participated in a cybersecurity hackathon focused on security challenges and teamwork.',
      certificate: '' // Ajouter le lien PDF ici
    },
    {
      title: 'IoT, AI, and Big Data Workshop',
      institute: 'APII Mahdia',
      duration: 'July 2025',
      description:
        'Participated in a workshop focused on Internet of Things (IoT), Artificial Intelligence (AI), and Big Data technologies, gaining practical knowledge of data processing, AI integration, and IoT applications.',
      certificate: '' // Ajouter le lien PDF ici
    },
    {
      title: 'Connected Objects Symposium',
      institute: 'APII Mahdia',
      duration: 'June 2025',
      description:
        'Attended a symposium focused on connected objects (IoT), discussing emerging technologies, trends, and practical applications in IoT ecosystems.',
      certificate: '' // Ajouter le lien PDF ici
    },
    {
      title: 'Ethical Hacking & IoT Cybersecurity',
      institute: 'IT CyberSec Expert',
      duration: 'December 2022',
      description:
        'Training on ethical hacking principles, IoT security, and penetration testing of IoT equipment.',
      certificate: '' // Ajouter le lien PDF ici
    }
  ];

  const handleCardClick = (pdfLink) => {
    if (pdfLink) {
      window.open(pdfLink, '_blank', 'noopener,noreferrer');
    }
  };

  // Fonction pour convertir la durée en date pour le tri
  const parseDate = (duration) => {
    // Extrait l'année ou le mois+année
    const monthMap = {
      January: 0, February: 1, March: 2, April: 3,
      May: 4, June: 5, July: 6, August: 7,
      September: 8, October: 9, November: 10, December: 11
    };

    // Exemple : "July 2025 – August 2025" ou "2024"
    const yearMatch = duration.match(/\d{4}/);
    const monthMatch = duration.match(/(January|February|March|April|May|June|July|August|September|October|November|December)/);

    const year = yearMatch ? parseInt(yearMatch[yearMatch.length - 1]) : 0;
    const month = monthMatch ? monthMap[monthMatch[monthMatch.length - 1]] : 0;

    return new Date(year, month);
  };

  // Trier les arrays
  const sortedInternships = [...internships].sort((a, b) => parseDate(b.duration) - parseDate(a.duration));
  const sortedTrainings = [...trainings].sort((a, b) => parseDate(b.duration) - parseDate(a.duration));

  return (
    <section id="experience" className="min-h-screen p-8 bg-gray-50 text-gray-800">
      <h2 className="text-5xl font-bold mb-12 text-center text-blue-800" style={{ fontFamily: "'Jost', sans-serif" }}>
        Experience & Trainings
      </h2>

      {/* Internships */}
      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-blue-950">Internships</h3>
        <div className="space-y-8">
          {sortedInternships.map((exp, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(exp.certificate)}
              className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 ${exp.certificate ? 'cursor-pointer hover:-translate-y-1' : ''}`}
            >
              <h4 className="text-2xl font-semibold text-blue-600 mb-1">{exp.role}</h4>
              <p className="text-sm text-gray-500 mb-2">{exp.company} | {exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trainings / Certifications */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-blue-950">Trainings & Certifications</h3>
        <div className="space-y-8">
          {sortedTrainings.map((train, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(train.certificate)}
              className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 ${train.certificate ? 'cursor-pointer hover:-translate-y-1' : ''}`}
            >
              <h4 className="text-2xl font-semibold text-blue-600 mb-1">{train.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{train.institute} | {train.duration}</p>
              <p className="text-gray-700">{train.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;