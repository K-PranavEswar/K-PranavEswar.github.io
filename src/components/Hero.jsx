import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Background from '../assets/image111.jpg';
import './css/Hero.css';

const Hero = () => {
  return (
    <section className="hero-full" id="home">
      <div className="hero-container">
        
        {/* Left Side - Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Background} alt="Profile" />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="hero-content text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="fs-1 fw-bold">K PRANAV ESWAR</h1>
          <p className="lead fw-semibold fs-5 mt-3">
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
          </p>

          <div className="social-icons mt-4 d-flex gap-4 justify-content-center">
            <a href="https://x.com/PranavEswar5" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/equizzle_arts" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/k-pranav-eswar1/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.youtube.com/@equizzlearts" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
