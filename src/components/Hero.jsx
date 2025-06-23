import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Background from '../assets/image.jpg';
import './css/Hero.css';

const Hero = () => {
  return (
    <section
      className="hero-full"
      id="home"
      style={{
  backgroundImage: `url(${Background})`,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}

    >
      <div className="hero-overlay" />

      <div className="container hero-content d-flex flex-column justify-content-center align-items-center text-center">
        <motion.h1
          className="fs-1 fw-bold"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          K PRANAV ESWAR
        </motion.h1>

        <motion.p
          className="lead fw-semibold fs-5 mt-3"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span style={{ color: '#000' }}>I'm a </span>
          <span style={{ color: '#2563eb', fontWeight: 'bold' }}>
            <Typewriter
              words={[
                'Bachelor of Computer Application Student',
                'Full Stack Developer',
                'MERN Enthusiast',
                'Artist',
                'Gamer',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.p>

        {/* Social Media Icons */}
        <div className="social-icons mt-4">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>&nbsp;&nbsp;&nbsp;
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>&nbsp;&nbsp;&nbsp;
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>&nbsp;&nbsp;&nbsp;
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
