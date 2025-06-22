import './css/Hero.css';
import { motion } from 'framer-motion';
import pranavImage from '../assets/pranav.jpg';

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-100 hero" id="home">
      <motion.img
        src={pranavImage}
        alt="Pranav Eswar"
        className="hero-photo mx-auto rounded-full shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, duration: 1 }}
      />

      <motion.h1
        className="text-4xl font-bold mt-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Hi, I'm Pranav Eswar
      </motion.h1>

      <motion.p
        className="mt-2 text-lg text-gray-600"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Full Stack Developer | BCA Graduate | University of Kerala
      </motion.p>

      <motion.div
        className="bg-white mt-10 mx-auto max-w-2xl p-6 rounded-lg shadow-md text-left text-justify"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <p className="mb-4 text-gray-700">
          As a BCA graduate and an aspiring Full-Stack Developer, I am passionate about building scalable and efficient web applications. With a strong foundation in Java, Python and PHP, I specialize in developing end-to-end solutions that enhance functionality, performance, and user experience.
          I am constantly exploring new technologies, refining my problem-solving skills, and staying up to date with industry trends. My goal is to create impactful solutions that address real-world challenges while collaborating with like-minded professionals.
          Driven by curiosity and a commitment to growth, I am always open to learning, networking, and embracing new opportunities in the tech space. 
          Let’s connect and build something great together!
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
