import './App.css';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import AboutUs from './components/AboutUs';
import Counts from './components/Counts';
import Services from './components/Services';
import MoreServices from './components/MoreServices';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const toggleVisibility = () => {
      const backToTop = document.querySelector('.back-to-top');
      if (window.scrollY > 100) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <Hero id="hero" setActiveSection={setActiveSection} />
      <Clients />
      <AboutUs id="about" setActiveSection={setActiveSection} />
      <Counts />
      <Services id="services" setActiveSection={setActiveSection} />
      <MoreServices />
      <Features />
      <Contact />
      <Footer />

      <button
        className="back-to-top d-flex align-items-center justify-content-center position-fixed border-0"
        onClick={scrollToTop}>
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </div>
  );
}

export default App;
