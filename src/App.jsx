import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Resume from './components/Resume';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
// Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      <Header />
      <main className="flex-1 w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-10 mx-auto">
        <section id="home" data-aos="fade-up">
          <Hero />
        </section>

        <section id="about" data-aos="fade-up">
          <About />
        </section>

        <section id="resume" data-aos="fade-up" className="mt-16">
          <Resume />
        </section>

        <section id="skills" data-aos="fade-up" className="mt-16">
          <Skills />
        </section>

        <section id="projects" data-aos="fade-up" className="mt-16">
          <Projects />
        </section>

        <section id="contact" data-aos="fade-up" className="mt-16">
          <Contact />
        </section>
      </main> <Footer />
      <Scroll />
    </div>
  );
}

export default App;
