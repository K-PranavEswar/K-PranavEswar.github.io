import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h3>K PRANAV ESWAR</h3>
        <p className="footer-quote">
          Passion fuels progress. Always learning, always building.
        </p>

        {/* Social Icons */}
        <div className="footer-icons">
          <a
            href="https://github.com/pranav1495"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/k-pranav-eswar1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/equizzle_arts/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:pranavartist1@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} <b>Pranav Eswar 2025</b>. All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
