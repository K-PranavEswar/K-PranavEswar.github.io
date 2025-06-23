import { motion } from 'framer-motion';
import pranavImage from '../assets/pranav.jpg';
import './css/About.css';

const About = () => {
  return (
    <section className="about-section bg-white py-5" id="about">
      <div className="container px-3 px-md-5">
        <div className="row align-items-center justify-content-center g-5">
          {/* Left: Profile Image */}
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <motion.div
              className="about-image-wrapper"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 80, duration: 1 }}
            >
              <img
                src={pranavImage}
                alt="Pranav Eswar"
                className="about-photo"
              />
            </motion.div>
          </div>

          {/* Right: Text Section */}
          <div className="col-12 col-md-7">
            <motion.div
              className="bg-light p-4 p-md-5 rounded shadow text-start h-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h2 className="text-primary fw-bold mb-3">About Me</h2>
              <p className="text-secondary fs-6 lh-lg mb-4">
                Being passionate about building responsive and efficient web experiences, I enjoy exploring full-stack development and gradually gaining confidence in technologies like Java, Python, and PHP. I’m always eager to learn how tools fit together and love discovering ways to solve real-world problems. While I’m still growing, I focus on crafting thoughtful solutions and connecting with others who enjoy tech. Open to learning and collaboration, I’m excited about building meaningful things together. 
              </p>
                <strong><h2><b><i>Programmer & Web Developer</i></b></h2></strong>
              <div className="row text-secondary fs-6 gx-4 gy-2">
                <div className="col-sm-6"><strong>Birthday:</strong> 22 Aug 2004</div>
                <div className="col-sm-6"><strong>Degree:</strong> Bachelors of Computer Applications</div>
                <div className="col-sm-6"><strong>Website:</strong> <a href="https://pranaveswar.github.io" target="_blank" rel="noopener noreferrer">pranaveswar.github.io</a></div>
                <div className="col-sm-6"><strong>Email:</strong> <a href="mailto:pranavartist1@gmail.com">pranavartist1@gmail.com</a></div>
                <div className="col-sm-6"><strong>Phone:</strong> 9074261433</div>
                <div className="col-sm-6"><strong>Freelance:</strong> Available</div>
                <div className="col-sm-6"><strong>Blood Group:</strong> O+ve</div>
                <div className="col-sm-6"><strong>City:</strong> Trivandrum</div>
                <div className="col-sm-6"><strong>State:</strong> Kerala</div>
                <div className="col-sm-6"><strong>Country:</strong> India</div>
              </div>

              <p className="mt-4 mb-0">
                As a student pursuing a degree in Computer Applications, I am excited to learn about the latest technologies and bring innovative solutions to the table. With coursework covering various programming languages and web development frameworks, I have gained a strong understanding of both front-end and back-end development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
