import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import profilePic from '../assets/image111.jpg';
import './css/Hero.css';

const Hero = () => {
  const descriptionText = "A dedicated and passionate developer with a knack for building modern, responsive, and user-friendly web applications. I'm always eager to learn new technologies and solve complex problems.";

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-intro">Hello, I'm</p>
          <h1 className="hero-name">K Pranav Eswar</h1>
          
          <h2 className="hero-title">
            <span>I'm a </span>
            <Typewriter
              words={[
                'Full Stack Developer',
                'MERN Enthusiast',
                'UIUX Frontend Developer',
                'MCA Student',
                'BCA Graduate',
                'Creative Artist',
                'Passionate Gamer',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="hero-description">
            {/* ✅ THE ONLY CHANGE IS HERE: .split(' ') splits by words */}
            {descriptionText.split(' ').map((word, index) => (
              <span key={index} style={{ transitionDelay: `${index * 0.05}s` }}>
                {word}{'\u00A0'} {/* Adds a space after each word */}
              </span>
            ))}
          </p>
          
          <a href="#contact" className="hero-cta-button">Let's Talk</a>

          <div className="hero-socials">
            <span className="social-text">Check Out My</span>
            <div className="social-icons">
              <a href="https://x.com/PranavEswar5" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/equizzle_arts" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/k-pranav-eswar1/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@equizzlearts" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <img src={profilePic} alt="K Pranav Eswar" className="hero-image" />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;