import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Resume from './components/Resume';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import Loader from './components/Loader'; // 👈 Add this line

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => setIsLoading(false), 2200); // ⏱ adjust delay here
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-wrapper">
      {isLoading ? (
        <Loader /> // 🌟 Show loader until ready
      ) : (
        <>
          <Header />
          <main className="app-main">
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

            <section id="portfolio" data-aos="fade-up" className="mt-16">
              <Portfolio />
            </section>

            <section id="contact" data-aos="fade-up" className="mt-16">
              <Contact />
            </section>
          </main>

          <Footer />
          <Scroll />
        </>
      )}
    </div>
  );
}

export default App;
