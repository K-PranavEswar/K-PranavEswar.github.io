import nasaCert from '../certificates/nasa.png'
import pythonCert from '../certificates/python.png'
import mernCert from '../certificates/mern.png'
import phpCert from '../certificates/php.png'
import fullstackCert from '../certificates/fullstack.png'

import broBg from '../projects/bg-brotracks.webp'
import reliefBg from '../projects/bg-relieflink.webp'
import medinetBg from '../projects/bg-medinet.webp'

// Your project images
import brotracksImg from '../projects/brotrack.webp'
import disasterReliefImg from '../projects/relieflink.webp'
import medinetImg from '../projects/medinet.webp'

// ----------------------------------------------------------------------
// ICONS IMPORT (Using react-icons)
// ----------------------------------------------------------------------
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython, FaPhp, FaFigma, FaGitAlt, FaLinux } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiThreedotjs, SiFramer, SiExpress, SiMongodb, SiFlask, SiMysql } from 'react-icons/si'

export const profile = {
  name: 'K PRANAV ESWAR',
  role: 'Software Developer | Artist | Graphic Designer',
  location: 'Trivandrum, Kerala',
  email: 'pranavartist1@gmail.com',
  phone: '+91 9074261433',
  linkedin: 'linkedin.com/in/k-pranav-eswar1',
  github: 'https://github.com/K-PranavEswar',
  instagram: 'https://www.instagram.com/equizzle_arts',
}

export const aboutText =
  'As an MCA student and aspiring MERN Stack Developer with a strong understanding of full-stack development and modern web technologies, I specialize in building dynamic and scalable web applications using React.js, Node.js, Express, and MongoDB, focusing on performance and user experience. Alongside development, I have a keen interest in the offensive side of cybersecurity, particularly penetration testing, where I enjoy identifying vulnerabilities and strengthening system security.'

export const stats = [
  { value: '19+', label: 'Core Skills' },
  { value: '05', label: 'Training Paths' },
  { value: '06', label: 'Featured Builds' }, 
  { value: '60', label: 'FPS Target' },
]

export const skills = [
  'HTML', 'CSS', 'BOOTSTRAP', 'React.js', 'Node.js', 
  'Express.js', 'NEXT js', 'MongoDB', 'Python', 'Flask', 
  'PHP', 'MySQL', 'Three.js', 'Framer Motion', 'Tailwind CSS', 
  'REST APIs', 'JWT', 'Authentication & Authorization', 'UI/UX', 'Figma'
]

export const skillCategories = [
  {
    title: 'Frontend',
    accent: '#ff3147',
    skills: [
      { name: 'HTML', level: 92, icon: <FaHtml5 color="#E34F26" /> },
      { name: 'CSS', level: 90, icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'BOOTSTRAP', level: 84, icon: <FaBootstrap color="#7952B3" /> },
      { name: 'React.js', level: 88, icon: <FaReact color="#61DAFB" /> },
      { name: 'NEXT js', level: 76, icon: <SiNextdotjs color="#ffffff" /> },
      { name: 'Tailwind CSS', level: 86, icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'Three.js', level: 72, icon: <SiThreedotjs color="#ffffff" /> },
      { name: 'Framer Motion', level: 78, icon: <SiFramer color="#0055FF" /> },
    ],
  },
  {
    title: 'Backend',
    accent: '#2dd4bf',
    skills: [
      { name: 'Node.js', level: 84, icon: <FaNodeJs color="#339933" /> },
      { name: 'Express.js', level: 82, icon: <SiExpress color="#ffffff" /> },
      { name: 'MongoDB', level: 82, icon: <SiMongodb color="#47A248" /> },
      { name: 'Python', level: 86, icon: <FaPython color="#3776AB" /> },
      { name: 'Flask', level: 70, icon: <SiFlask color="#ffffff" /> },
      { name: 'PHP', level: 76, icon: <FaPhp color="#777BB4" /> },
      { name: 'MySQL', level: 78, icon: <SiMysql color="#4479A1" /> },
    ],
  },
  {
    title: 'UI/UX & Tools',
    accent: '#60a5fa',
    skills: [
      { name: 'Figma', level: 76, icon: <FaFigma color="#F24E1E" /> },
      { name: 'Git', level: 82, icon: <FaGitAlt color="#F05032" /> },
      { name: 'Linux Basics', level: 78, icon: <FaLinux color="#FCC624" /> }
    ],
  },
]

export const timeline = [
  {
    id: 1,
    role: 'Student Lead',
    company: 'Lourdes Matha College of Science & Technology',
    duration: 'Jun 2026 - Present',
    location: 'Thiruvananthapuram, Kerala, India · On-site',
    description:
      'Student Lead of the MCA Department, coordinating academic activities, student engagement initiatives, and department-level programs.',
    tech: [
      'Leadership',
      'Team Management',
      'Communication',
      'Event Coordination'
    ],
  },
  {
    id: 2,
    role: 'Penetration Tester',
    company: 'RedTeam Hacker Academy',
    duration: 'Feb 2026 - Present',
    location: 'Trivandrum, Kerala, India · On-site',
    description:
      'Performed ethical hacking labs, vulnerability assessments, OWASP security testing, reconnaissance, and penetration testing methodologies.',
    tech: [
      'Ethical Hacking',
      'Burp Suite',
      'Nmap',
      'C#',
      'Web Security',
      'OWASP'
    ],
  },
  {
    id: 3,
    role: 'Advanced Python',
    company: 'ICT Academy of Kerala',
    duration: 'Mar 2026 - May 2026',
    location: 'Thiruvananthapuram, Kerala, India · On-site',
    description:
      'Worked on advanced Python programming, automation, Jupyter Notebook workflows, APIs, scripting, and problem-solving techniques.',
    tech: [
      'Python',
      'Jupyter',
      'Automation',
      'APIs',
      'Data Processing',
      'Problem Solving'
    ],
  },
  {
    id: 4,
    role: 'FULL STACK PHP',
    company: 'Trinity Technologies and Software Solutions Pvt Ltd',
    duration: 'Jan 2025 - Mar 2025',
    location: 'Thiruvananthapuram, Kerala, India · On-site',
    description:
      'Built full-stack PHP applications using AJAX, Bootstrap, MySQL, and admin dashboard systems with secure authentication modules.',
    tech: [
      'PHP',
      'AJAX',
      'Bootstrap',
      'MySQL',
      'JavaScript',
      'Authentication'
    ],
  },
  {
    id: 5,
    role: 'MERN Stack Development',
    company: 'Luminar Technolab',
    duration: 'Feb 2025',
    location: 'Kochi, Kerala, India · Remote',
    description:
      'Developed modern MERN applications using React, Node.js, Express, MongoDB, JWT authentication, and REST APIs.',
    tech: [
      'React.js',
      'MongoDB',
      'Express.js',
      'Node.js',
      'JWT',
      'REST API'
    ],
  },
  {
    id: 6,
    role: 'FULL STACK JAVA',
    company: 'ICT Academy of Kerala',
    duration: 'May 2024 - Jun 2024',
    location: 'Thiruvananthapuram, Kerala, India · On-site',
    description:
      'Worked on Java full-stack concepts, backend development, SQL integration, enterprise applications, and web technologies.',
    tech: [
      'Java',
      'JavaScript',
      'Node.js',
      'SQL',
      'HTML',
      'CSS'
    ],
  },
]

export const projects = [
  {
    title: 'BroTracks',
    subtitle: 'Smart School Transport Tracking System',
    tags: ['PHP', 'GPS', 'Realtime'],
    gradient: 'from-red-500 via-rose-900 to-black',
    image: brotracksImg,
    background: broBg,
    copy: 'A safety-first transport command center for live school bus tracking, route visibility, and parent confidence.',
    sourceCode: 'https://github.com/K-PranavEswar/brotracks',
  },
  {
    title: 'Disaster Relief Resource Tracker',
    subtitle: 'Emergency inventory and allocation grid',
    tags: ['PHP', 'Maps', 'Emergency Response', 'Resource Management'],
    gradient: 'from-red-700 via-zinc-900 to-black',
    image: disasterReliefImg,
    background: reliefBg,
    copy: 'A rapid-response tracker for relief resources, location-aware distribution, and operational clarity during crisis windows.',
    sourceCode: 'https://github.com/K-PranavEswar/relieflink',
  },
  {
    title: 'MEDINET',
    subtitle: 'GPS Accident Emergency Support',
    tags: ['PHP', 'Emergency', 'Maps', 'Healthcare'],
    gradient: 'from-rose-600 via-red-950 to-zinc-950',
    image: medinetImg,
    background: medinetBg,
    copy: 'A GPS-assisted emergency support concept that accelerates accident response and keeps critical care signals visible.',
    sourceCode: 'https://github.com/K-PranavEswar/medinet',
  },
]

export const certifications = [
  {
    id: 1,
    title: 'NASA SPACE APPS CHALLENGE',
    issuer: 'NASA',
    issued: 'Oct 2025',
    expires: 'Oct 2025',
    image: nasaCert,
  },
  {
    id: 2,
    title: 'Python (Basic) Certificate',
    issuer: 'HackerRank',
    issued: 'Mar 2025',
    image: pythonCert,
  },
  {
    id: 3,
    title: 'Workshop on MernStack Development',
    issuer: 'Luminar Technolab',
    issued: 'Feb 2025',
    expires: 'Feb 2025',
    image: mernCert,
  },
  {
    id: 4,
    title: 'FULL STACK PHP',
    issuer: 'Trinity Technology',
    issued: 'Nov 2024',
    expires: 'Mar 2025',
    image: phpCert,
  },
  {
    id: 5,
    title: 'Full Stack Development Certification',
    issuer: 'ICT Academy of Kerala',
    issued: 'May 2024',
    expires: 'Jun 2024',
    image: fullstackCert,
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram',
    years: 'Aug 2025 - 2027',
    specialization: 'Lourdes Matha College of Science and Technology',
    subjects: [
      'Advanced Software Engineering',
      'Python',
      'Data Structures',
      'Database Systems',
      'Computer Networks',
      'Web Technologies'
    ],
    grade: '1st Semester - 8.55 SGPA',
    logo: 'KTU',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Kerala University, Thiruvananthapuram',
    years: 'Oct 2022 - Apr 2025',
    specialization: 'Christ College Vizhinjam',
    subjects: [
      'PHP',
      'Java',
      'Python',
      'MySQL',
      'Software Engineering',
      'Computer Networks'
    ],
    grade: 'Sem 3 - 8.13 CGPA | Sem 4 - 8.06 CGPA | Sem 5 - 8.25 CGPA',
    logo: 'KU',
  },
] 