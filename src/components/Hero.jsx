import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import bannerImage from '../assets/banner.jpg';
import './css/Hero.css';

const Hero = () => {
  return (
    <section className="bg-light hero" id="home">
      <div className="container hero-content d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Left Side: Text */}
        <div className="hero-text text-center text-md-start">
          <motion.h1
            className="fs-1 fw-bold"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            K PRANAV ESWAR
          </motion.h1>

<motion.p
  className="lead fw-semibold fs-5 mt-3"
  initial={{ x: -30, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
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

        </div>

        {/* Right Side: Blurred Image */}
        <motion.div
          className="blurred-box mt-4 mt-md-0"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={bannerImage}
            alt="Hero Banner"
            className="blurred-image interactive-blur"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
