import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import TechnicalExpertise from '../components/TechnicalExpertise'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Footer from '../components/Footer'


function Home() {
  // Handle anchor scrolling for about and skills sections
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#about') {
      const section = document.getElementById('about');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (hash === '#skills') {
      const section = document.getElementById('skills');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div>
      <Hero />
      <div id="about">
        <About />
      </div>
      <TechnicalExpertise />
      <Footer />
    </div>
  )
}

export default Home