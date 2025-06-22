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
        Full Stack Developer | BCA Graduate | Mern Enthusiast 
      </motion.p>

      <motion.div
        className="bg-white mt-10 mx-auto max-w-2xl p-6 rounded-lg shadow-md text-left text-justify"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <p className="mb-4 text-gray-700">
          Being passionate about building responsive and efficient web experiences. With a BCA background, I’m exploring full-stack development and gradually gaining confidence in technologies like Java, Python, and PHP.

I enjoy learning how different tools fit together, and I’m always curious to discover new ways to solve real-world problems. While I’m still growing, I aim to build thoughtful, usable solutions and connect with others who share a love for tech.

I'm open to learning, collaborating, and evolving with every step. Let’s build something meaningful together.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
