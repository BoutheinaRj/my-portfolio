import React, { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import bgImg from "../assets/aaa.png";

function Hero() {
  const [glitters, setGlitters] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, () => ({
      id: Math.random(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }));
    setGlitters(generated);
  }, []);

  return (
    <section id="home">
      <div className="max-w-screen-xl mx-auto h-[85vh] relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={bgImg}
            alt="Background"
            className="w-full h-full object-cover blur-sm brightness-100"
          />
        </div>

        {/* Glitters */}
        {glitters.map((g) => (
          <span
            key={g.id}
            className="absolute bg-white rounded-full animate-glitter"
            style={{
              top: `${g.top}%`,
              left: `${g.left}%`,
              width: `${g.size}px`,
              height: `${g.size}px`,
              animationDelay: `${g.delay}s`,
            }}
          />
        ))}

        {/* Main content */}
        <div className="relative z-10 h-full flex items-center px-6 sm:px-12 lg:px-20">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Left side - Text content */}
            <div className="text-left space-y-6 animate-[slideUp_1s_ease-out]">
              <div className="space-y-3">
                <h2
                  className="text-gray-100 text-2xl font-medium tracking-wide"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Hello, I'm
                </h2>
                <h1
                  className="text-white text-6xl sm:text-5xl font-bold leading-tight"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Boutheina Rjab
                </h1>
                <h3
                  className="text-xl sm:text-xl font-semibold text-blue-300"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Software Engineer
                </h3>
                <p
                  className="text-gray-200 text-base font-medium max-w-md"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Specializing in{" "}
                  <span className="text-blue-300 font-semibold">Data Science</span>{" "}
                  and{" "}
                  <span className="text-blue-300 font-semibold">
                    Artificial Intelligence
                  </span>
                </p>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/CVBR.pdf"
                  download="CVBR.pdf"
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-all duration-300 shadow-md flex items-center gap-2 transform hover:-translate-y-1"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  <Download size={18} />
                  Download CV
                </a>

                <Link
                  to="/projects"
                  className="border-2 border-blue-600 text-blue-400 px-6 py-2.5 rounded-md font-medium hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  View Projects
                </Link>
              </div>

              {/* Social links */}
              <div className="flex gap-3 pt-3">
                <a
                  href="https://github.com/BoutheinaRj"
                  className="p-2 rounded-full text-gray-300 hover:bg-blue-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/boutheina-rj-b26085225/"
                  className="p-2 rounded-full text-gray-300 hover:bg-blue-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:Boutheina.RJAB@esprim.tn"
                  className="p-2 rounded-full text-gray-300 hover:bg-blue-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right side empty */}
            <div></div>
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes glitter {
            0%,
            100% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-glitter {
            animation: glitter 1.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
}

export default Hero;
