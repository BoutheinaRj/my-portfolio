import React, { useEffect, useState } from 'react';
import NutriSmartImg from '../assets/NutriSmart.png';
import Dental from '../assets/Dental.png';
import Aeropot from '../assets/Aerobot.png';
import PortfolioImg from '../assets/Portfolio.png'; // Ajoute une image pour ton portfolio si tu veux
import AIRImg from '../assets/aa.png';
import TumorAIImage from '../assets/TumorAIImage.png';
import LivraisonImage from '../assets/LivraisonImage.png';
import LumiaImg from '../assets/LumiaImg.png';
import TradroroImg from '../assets/Tradroro.png';
import DoobyImg from '../assets/Dooby.png';

function Projects() {
  const [activeDemo, setActiveDemo] = useState(null);

  useEffect(() => {
    if (!activeDemo) return;
    const onKeyDown = (e) => e.key === 'Escape' && setActiveDemo(null);
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeDemo]);

  const projects = [
    {
      title: 'Tradroro – AI-Powered Productivity Assistant',
      type: 'Internship Project | Tradrly | 2026',
      description:
        'A desktop productivity module featuring NOVA, an AI assistant that manages tasks, calendar and Pomodoro sessions through natural language and voice commands.',
      details: [
        'LLM (Google Gemini) for intent understanding, multi-turn conversational context and multilingual interaction (French, English, Arabic, Arabizi)',
        'Local NLP layer: spaCy for entity extraction, Sentence-Transformers for intent classification by semantic similarity, dateparser for natural-language dates',
        'Voice control with speech recognition (STT) and speech synthesis (TTS)',
        'Desktop automation from the assistant: launching apps, adjusting volume and locking the screen'
      ],
      technologies: ['React', 'TypeScript', 'Electron', 'Node.js', 'Express', 'FastAPI', 'Python', 'Gemini', 'spaCy', 'Sentence-Transformers', 'SQLAlchemy', 'SQLite', 'Material UI'],
      image: TradroroImg,
      imagePosition: 'center top',
      github: 'https://github.com/BoutheinaRj/Tradroro',
      demo: '/videos/Tradroro-demo.mp4',
      link: '#'
    },
    {
      title: 'Dooby – AI Educational Robot for Children',
      type: 'Internship Project | Tradrly | 2026',
      description:
        'AI modules for an educational voice robot that answers children\'s questions at the right level, grounded in the official Tunisian school curriculum. I built the educational knowledge base and the RAG API connecting the robot to it.',
      details: [
        'Built a knowledge base from ~400 PDFs (official curricula, textbooks, workbooks): 667 chunks covering 6 grade levels, 12 subjects and 3 languages',
        'PDF ingestion pipeline: text/scan detection, extraction with PyMuPDF or Tesseract OCR, cleaning, chunking (500 words, 50 overlap), metadata, embeddings',
        'RAG pipeline: language detection, hybrid retrieval (RRF + MMR) and Gemini answers adapted to the child\'s age and level, returned as JSON',
        'FastAPI service (/health, /search, /answer) between the robot and the knowledge base — 3 sources retrieved and an answer in 2–4 s in integration tests'
      ],
      technologies: ['Python', 'RAG', 'Gemini', 'FastAPI', 'Embeddings', 'Semantic Search', 'PyMuPDF', 'Tesseract OCR', 'NLP'],
      image: DoobyImg,
      imagePosition: 'center top',
      github: 'https://github.com/BoutheinaRj/plateforme-pedagogique-rag',
      demo: '/videos/Dooby-demo.mp4',
      link: '#'
    },
    {
  title: 'LUMIA – AI Skin Care Recommendation Platform',
  type: 'Personal Summer Project | Full Stack + Computer Vision',
  description:
    'A full-stack mobile platform that combines facial image analysis with AI to recommend personalized natural homemade remedies and parapharmacy skincare products, while also facilitating direct connections with dermatologists for professional consultations.',
  details: [
    'Developing a cross-platform mobile application using React Native for a smooth, native-like user experience',
    'Implementing facial skin analysis (dryness, oiliness, acne, wrinkles, redness) using Python-based Computer Vision (OpenCV) and Deep Learning models for accurate condition classification',
    'Designing a dual recommendation engine: suggests DIY natural homemade recipes (honey, aloe vera, oats) and curated parapharmacy products (serums, creams, cleansers) based on the user\'s skin profile',
    'Building a scalable RESTful API with Node.js, Express.js, and MongoDB for user authentication, skin history tracking, and product/remedy database management',
    'Integrating a dermatologist connection module, allowing users to book online consultations or share their skin analysis reports directly with professionals for expert follow-up'
  ],
  technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Computer Vision (OpenCV)', 'Deep Learning'],
  image: LumiaImg,
  link: '#'
},
    {
      title: 'Artificial Intelligence Recruitment ForsaTech ',
      type: 'AI Recruitment Platform',
      description:
        'A smart recruitment platform (ForsaTech) that analyzes CVs and matches candidate profiles with job requirements using a deep learning model based on spaCy and RoBERTa.',
      details: [
        'Parsed and structured CV content automatically from uploaded resumes',
        'Used a deep learning model (spaCy + RoBERTa) to evaluate candidate-job similarity and generate matching scores',
        'Displayed ranked candidate profiles with clear indicators for recruiters'
      ],
      technologies: ['Python', 'NLP', 'Deep Learning', 'MERN','FastAPI', 'JavaScript'],
      image: AIRImg,
      link: '#'
    },
  {
  title: 'OncoScan IA – Brain Tumor & Breast Cancer',
  type: 'Deep Learning Medical Diagnosis',
  description:
    'Automatic brain tumor classification on MRI (4 classes) and breast cancer (IDC+) detection on histopathology images, with a doctor-friendly interface and explainable models.',
  details: [
    'Brain: 4 classes (Glioma, Meningioma, Normal, Pituitary) – 92% accuracy, 0.97 AUC',
    'Breast: IDC+ detection – 94% sensitivity, 88% accuracy',
    'Preprocessing: undersampling, augmentations, fine-tuning (brain)',
    'Streamlit interface for fast predictions',
    'Deployment: FastAPI + Docker'
  ],
  technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Streamlit', 'FastAPI', 'Docker', 'OpenCV'],
  image: TumorAIImage,
  link: '#'
},
{
  title: 'LivraisonApp – Parcel & Delivery System',
  type: 'ASP.NET Core MVC Web App',
  description:
    'A delivery management platform with role-based access, parcel tracking, customer and driver management, and an admin dashboard for revenue statistics.',
  details: [
    'Full parcel CRUD operations',
    'Customer, driver, and vehicle management',
    'Role-based authentication (Admin / User)',
    'Admin dashboard with stats and revenue',
    'Parcel image upload support'
  ],
  technologies: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'Identity', 'SQLite', 'Bootstrap'],
  image: LivraisonImage,
  link: '#'
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
      title: 'Personal Portfolio',
      type: 'Web Development Project',
      description:
        'A personal portfolio website designed to present my projects, technical expertise, and professional journey through a modern and responsive interface.',
      details: [
        'Built with a component-based architecture using React and Vite for fast performance',
        'Styled with Tailwind CSS to ensure a clean UI and consistent design system',
        'Implemented responsive layouts and smooth animations for desktop and mobile'
      ],
      technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      image: PortfolioImg,
      link: 'https://your-portfolio-link.com'
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
    <section id="projects" className="min-h-screen p-8 bg-blue-100" style={{ fontFamily: "'Jost', sans-serif" }}>
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
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                  style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                />
                {project.demo && (
                  <button
                    type="button"
                    onClick={() => setActiveDemo(project)}
                    aria-label={`Watch the ${project.title} demo`}
                    className="absolute inset-0 flex items-center justify-center rounded-t-xl bg-black/20 group-hover:bg-black/40 transition-colors duration-300 cursor-pointer"
                  >
                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-blue-700 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1" fill="currentColor" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
                      Demo video
                    </span>
                  </button>
                )}
              </div>
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

              {(project.github || project.demo) && (
                <div className="mt-auto pt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {project.demo && (
                    <button
                      type="button"
                      onClick={() => setActiveDemo(project)}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                    >
                      ▶ Watch the demo
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      🔗 Explore the project on GitHub
                    </a>
                  )}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* Demo video modal */}
      {activeDemo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveDemo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeDemo.title} demo`}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3 text-white">
              <h3 className="text-lg md:text-xl font-semibold">{activeDemo.title}</h3>
              <button
                type="button"
                onClick={() => setActiveDemo(null)}
                aria-label="Close demo"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-2xl leading-none cursor-pointer"
              >
                ×
              </button>
            </div>
            <video
              src={activeDemo.demo}
              poster={activeDemo.image}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[80vh] rounded-xl shadow-2xl bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
