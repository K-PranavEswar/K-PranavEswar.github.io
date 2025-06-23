import { motion } from 'framer-motion';
import pranavImage from '../assets/pranav.jpg';
import './css/About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="row">
        {/* Left Column: Photo */}
        <motion.div
          className="about-image-wrapper col-md-5 col-12"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 1 }}
        >
          <img src={pranavImage} alt="Pranav Eswar" className="about-photo" />
        </motion.div>

        {/* Right Column: Text Content */}
        <div className="text-start col-md-7 col-12">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          {/* Intro Paragraph (hidden on small devices) */}
          <motion.p
            className="intro-text d-none d-md-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm passionate about building responsive and efficient web experiences. I explore full-stack
            development and am steadily gaining confidence in technologies like Java, Python, and PHP.
            Eager to learn and collaborate, I strive to craft thoughtful solutions to real-world problems.
          </motion.p>

          {/* Profession */}
          <motion.h3
            className="profession"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <b><i>Programmer & Web Developer</i></b>
          </motion.h3>
          <motion.div
            className="details-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div><strong>Birthday:</strong> 22 Aug 2004</div>
            <div><strong>Degree:</strong> BCA</div>
            <div><strong>Website:</strong> <a href="https://pranaveswar.github.io" target="_blank" rel="noopener noreferrer">pranaveswar.github.io</a></div>
            <div><strong>Email:</strong> <a href="mailto:pranavartist1@gmail.com">pranavartist1@gmail.com</a></div>
            <div><strong>Phone:</strong> 9074261433</div>
            <div><strong>Freelance:</strong> Available</div>
            <div><strong>Blood Group:</strong> O+ve</div>
            <div><strong>City:</strong> Trivandrum</div>
            <div><strong>State:</strong> Kerala</div>
            <div><strong>Country:</strong> India</div>
          </motion.div>
          <br></br>
          {/* Closing Paragraph */}
          <motion.p
            className="closing-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            As a student pursuing a degree in Computer Applications, I am excited to keep learning
            about emerging technologies and bring innovative solutions to the table. With hands-on experience
            in both front-end and back-end development, I am focused on becoming a better developer every day.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;