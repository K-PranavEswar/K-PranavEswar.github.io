import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import bannerImage from '../assets/image.png';
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

        {/* Right Side: Animated Photo */}
        <motion.div
          className="blurred-box mt-4 mt-md-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 10px 30px rgb(0, 0, 0)',
            transition: { duration: 0.4 },
          }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src={bannerImage}
            alt="Hero Banner"
            className="blurred-image"
            animate={{
              y: [0, -6, 0], // floating animation
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
