import React from 'react';
import { motion } from 'framer-motion';
import './css/Certificates.css';
import { FaCertificate } from 'react-icons/fa';

const certificates = [
  {
    title: 'Full Stack Java Web Development',
    issuer: 'ICT Academy of Kerala',
    date: 'August 8, 2024',
    link: 'https://drive.google.com/file/d/1YaU2IYyLo3CdbCg995LJhsH11CGs3f2A/view?usp=drive_link',
  },
  {
    title: 'Software Testing Workshop',
    issuer: 'TechMasters Kochi',
    date: 'October 14, 2024',
    link: 'https://drive.google.com/file/d/1_yUEymSxDRA8SBRfIqEeTC27yw74E53L/view?usp=drive_link',
  },
  {
    title: 'Basics of Python',
    issuer: 'HackerRank',
    date: 'March 6, 2025',
    link: 'https://drive.google.com/file/d/1_xbKp7xSOf1J6hgE5eQBsRXElc_9NQC7/view?usp=drive_link',
  },
  {
    title: 'Full Stack PHP - intern',
    issuer: 'Trinity Technologies',
    date: 'March 22, 2025',
    link: 'https://drive.google.com/file/d/1eZP7kS-qlE0x6eTBI8e7mPj9m4BssjM8/view?usp=sharing',
  },
  {
    title: 'NASA SPACE APPS CHALLENGE-2025 HACKTHON',
    issuer: 'NASA',
    date: 'October 5, 2025',
    link:'https://drive.google.com/file/d/1e1UpOUpjufbKbUAlSmHmEkEU1BuXs90s/view?usp=drive_link',
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Certificates = () => {
  return (
    <section className="certificates-section" id="certifications">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div
            className="certificate-card"
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <div className="cert-header">
                <FaCertificate className="cert-icon" />
                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">Issued by: {cert.issuer}</p>
                </div>
              </div>
            </div>
            <div className="cert-footer">
              <p className="cert-date">Date: {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;