import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import bannerImage from '../assets/banner.jpg';
import './css/Hero.css';

const Hero = () => {
  return (
    <section className="bg-light hero" id="home">
      <motion.div
        className="blurred-box mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bannerImage}
          alt="Hero Banner"
          className="blurred-image interactive-blur"
        />
      </motion.div>

      {/* Intro Text */}
      <div className="container text-center pt-4 px-3 px-md-5">
        <motion.h1
          className="fs-1 fw-bold mt-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          K PRANAV ESWAR
        </motion.h1>

        <motion.p
          className="lead text-primary fw-semibold fs-5 mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I'm a{' '}
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
    </section>
  );
};

export default Hero;
