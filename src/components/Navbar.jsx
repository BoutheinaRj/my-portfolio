import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', route: '/' },
    { label: 'ABOUT', route: '/about' },
    { label: 'PROJECTS', route: '/projects' },
    { label: 'EXPERIENCE', route: '/experience' },
    { label: 'CONTACT', route: '/contact' }
  ];

  const handleNavClick = (item) => {
    if (item.label === 'ABOUT') {
      if (location.pathname === '/') {
        const section = document.getElementById('about');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.assign('/#about');
        }
      } else {
        // From any other route (including /about), go to Home and jump to About
        window.location.assign('/#about');
      }
    } else if (item.label === 'HOME') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(item.route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setVisible(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg' : 'bg-white/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <img
              src={assets.logo}
              alt="Logo"
              className="h-12 cursor-pointer"
              onClick={() => navigate('/')}
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              {navItems.map(item => (
                <span
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="cursor-pointer px-4 py-2 hover:text-blue-600"
                >
                  {item.label}
                </span>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setVisible(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {visible && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white/95 z-50 flex flex-col items-center justify-center space-y-6 transition-transform duration-300">
          {navItems.map(item => (
            <span
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="cursor-pointer text-xl hover:text-blue-600"
            >
              {item.label}
            </span>
          ))}
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setVisible(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Spacer to prevent content under navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
