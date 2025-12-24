import React from 'react';
import NutriSmartImg from '../assets/NutriSmart.png';
import Dental from '../assets/Dental.png';
import Aeropot from '../assets/Aerobot.png';
import PortfolioImg from '../assets/Portfolio.png'; // Ajoute une image pour ton portfolio si tu veux

function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      type: 'Web Development Project',
      description:
        'A personal portfolio website built to showcase my web development projects, technical skills, and professional experience. Created using React, Vite, and Tailwind CSS with responsive design and modern animations.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      image: PortfolioImg,
      link: 'https://your-portfolio-link.com'
    },
     {
      title: 'Dental X-Ray Diagnosis',
      type: 'Machine Learning Web Application',
      description:
        'An automatic dental pathology classification system using CNN models on OPG X-ray images. The system detects 6 dental diseases from medical images.',
      details: [
        'Worked with an anonymized clinical dataset of approximately 800 X-ray images',
        'Performed data preprocessing and dataset splitting (train / validation / test)',
        'Designed, trained, and evaluated a CNN model for image classification'
      ],
      technologies: ['Python', 'TensorFlow / PyTorch', 'NumPy', 'Pandas', 'CNN', 'Medical Image Processing'],
      image: Dental,
      link: '#'
    },
    {
      title: 'NutriSmart (PFA)',
      type: 'Web & Desktop Application',
      description:
        'A smart nutrition tracking application that helps users manage daily meals, calculate BMI, and follow a healthier lifestyle through an intuitive interface.',
      award:
        'Selected among the best projects at ESPRIM and participated in the "Bal des Projets (12th Edition)" — Certificate of Participation | ESPRIT, 2025',
      technologies: ['Symfony', 'JavaFX', 'MySQL'],
      image: NutriSmartImg,
      link: '#'
    },
    {
      title: 'Aerobot (PFE)',
      type: 'Intelligent Airport System',
      description:
        'Aerobot is an intelligent airport assistant that scans passengers’ boarding passes and instantly displays all flight information. The system uses computer vision and data scraping to extract and validate flight details in real-time, providing an interactive interface for passengers and airport staff.',
      technologies: [
        'Python',
        'Computer Vision',
        'Data Scraping',
        'Machine Learning',
        'React',
        'JavaScript'
      ],
      image: Aeropot,
      link: '#'
    }
   
  ];

  return (
    <section id="projects" className="min-h-screen p-8 bg-blue-50" style={{ fontFamily: "'Jost', sans-serif" }}>
      <h2
        className="text-6xl font-bold mb-8 text-center text-blue-800"
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            )}

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-sm text-blue-600 font-medium mb-4">{project.type}</p>
              <p className="text-gray-700 mb-2 leading-relaxed">{project.description}</p>

              {/* Award if exists */}
              {project.award && (
                <p className="text-gray-800 font-bold mt-2">{project.award}</p>
              )}

              {project.details && (
                <ul className="mb-4 space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Link */}
{project.link && project.link !== '#' && (
  <a
    href={"https://github.com/BoutheinaRj/my-portfolio"}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-block text-center bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
  >
    Code Source →
  </a>
)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
