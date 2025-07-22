import React from 'react';
import './css/Certificates.css';
import { FaCertificate } from 'react-icons/fa';

// Sample certificate data (add more if needed)
const certificates = [
  {
    title: 'Full Stack Java Web Development',
    issuer: 'ICT',
    date: '8th August 2024',
    link: 'https://drive.google.com/file/d/1YaU2IYyLo3CdbCg995LJhsH11CGs3f2A/view?usp=drive_link',
  },
  {
    title: 'Basics of Python ',
    issuer: 'Hacker Rank',
    date: '6th March 2025',
    link: 'https://drive.google.com/file/d/1_xbKp7xSOf1J6hgE5eQBsRXElc_9NQC7/view?usp=drive_link',
  },
  {
    title: 'Certificate of Participation - Software testing Workshop',
    issuer: 'TechMasters Kochi',
    date: '14th October 2024',
    link: 'https://drive.google.com/file/d/1_yUEymSxDRA8SBRfIqEeTC27yw74E53L/view?usp=drive_link',
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <h2 className="certificates-title">
        <FaCertificate className="cert-icon" /> Certificates
      </h2>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer"><strong>Issued by:</strong> {cert.issuer}</p>
            <p className="cert-date"><strong>Date:</strong> {cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
