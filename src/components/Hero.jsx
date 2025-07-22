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

      <div className="container-fluid px-0 hero-content d-flex flex-column justify-content-center align-items-center text-center">
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
          <span style={{ color: '#000' }}>I'm </span>
          <span style={{ color: '#0051ff', fontWeight: 'bold' }}>
            <Typewriter
              words={[
                'currently pursuing MCA',
                'a BCA Graduate',
                'a Full Stack Developer',
                'a MERN Enthusiast',
                'an Artist',
                'a Gamer',
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

        <div className="social-icons mt-4 d-flex gap-4">
          <a href="https://x.com/PranavEswar5" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/equizzle_arts" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/k-pranav-eswar1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@equizzlearts" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
