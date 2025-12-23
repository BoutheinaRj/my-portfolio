import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Footer from '../components/Footer'


function Home() {
  // Handle anchor scrolling for about section
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#about') {
      const section = document.getElementById('about');
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
      <Footer />
    </div>
  )
}

export default Home