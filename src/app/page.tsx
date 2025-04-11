'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import ResumeModal from '../components/ResumeModal';

const skills = {
  languages: ['Python', 'JavaScript', 'C', 'TypeScript', 'SQL', 'NOSQL'],
  technologies: ['NextJS', 'NodeJS', 'MongoDB', 'Prisma', 'Postgresql', 'Tailwind', 'CSS', 'ExpressJS', 'ReactJS', 'AI/ML'],
  tools: ['AWS', 'Git', 'Github', 'Jenkins', 'CI/CD pipeline', 'Docker', 'Kubernetes']
};

const projects = [
  {
    title: 'Paytm-project : Paytm-like Payment Platform',
    link: 'https://payments-app-dusky.vercel.app/',
    description: [
      'Developed a secure payment platform with wallet management and recharge services.',
      'Built a robust backend using Node.js, Express.js with JWT authentication.',
      'Integrated Razorpay API for seamless payment processing.',
      'Designed a responsive frontend using React.js and Tailwind.',
      'Implemented MongoDB with Mongoose for efficient data management.',
      'Ensured secure transactions with token-based authentication, data encryption, and RESTful APIs.'
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Razorpay']
  },
  {
    title: 'Course Selling App : MERN Stack Online Course Platform',
    link: 'https://course-selling-website-iyag.vercel.app/',
    description: [
      'Enhanced a MERN stack web application for browsing, purchasing, and managing online courses.',
      'Designed a responsive frontend using React.js and Bootstrap for an intuitive user experience.',
      'Built a secure backend with Node.js, Express.js, and RESTful APIs for course management.',
      'Implemented MongoDB with Mongoose for efficient storage of user profiles, courses, and transactions.'
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap']
  },
  {
    title: 'Generative Music Model : RNN with LSTM',
    description: [
      'Developed a generative music model using RNN with LSTM to compose music based on Durga Raga.',
      'Refined the dataset by adding white noise and gain alterations for improved model reliability.',
      'Built and trained the model using categorical cross-entropy loss and the Adam optimizer.',
      'Enabled coherent note sequence generation reflecting Durga Raga\'s characteristics.',
      'Converted generated compositions to MIDI format for evaluation and fine-tuning.'
    ],
    tech: ['Python', 'TensorFlow', 'LSTM', 'Music21']
  }
];

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Google Drive embedded preview link
  const resumeUrl = "https://drive.google.com/file/d/18512h5REvJXN-Z9HBkCb63sH--1J9kWH/preview";

  return (
    <>
      <Navbar />
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        resumeUrl={resumeUrl}
      />
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4 py-16 relative z-10"
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8 perspective-text-container"
              >
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 perspective-text mb-4">
                  G RAMA KRISHNA REDDY
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-blue-500 mt-4 perspective-text">
                  Full Stack Developer | DevOps & AWS Enthusiast
                </h2>
                <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                  Passionate about building scalable, efficient web applications and learning new technologies
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-6"
              >
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 transform"
                >
                  View Resume
                </button>
                <div className="flex items-center gap-6">
                  <motion.a
                    href="https://github.com/Ramakrishnareddy380"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-7 h-7" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/rama-krishna-reddy-34a979228/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="w-7 h-7" />
                  </motion.a>
                  <motion.a
                    href="mailto:reddyrk31@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope className="w-7 h-7" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Education</h2>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-blue-600">Indian Institute of Information Technology, Dharwad</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Bachelor of Technology in Electronics and Communication Engineering</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">2021 - 2025</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">CPA: 7.6</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Relevant work: Generative AI, Object-Oriented Programming, Database Management System, Data Structures Algorithms, Project Management
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Skills</h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-600 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                        whileHover={{ scale: 1.05, backgroundColor: '#3B82F6', color: '#ffffff' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Experience</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-600">Full Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">HarleyGrow - Oct 2023 - March 2024</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">IIIT dharwad</p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Achieved 25% improvement in application performance by optimizing RESTful APIs with Node.js and Express.js.</li>
                <li>• Developed dynamic interfaces using React.js, ensuring responsiveness and an intuitive user experience.</li>
                <li>• Implemented state management using Redux, streamlining application workflows and reducing bugs by 15%.</li>
                <li>• Deployed applications on cloud platforms like AWS, achieving high availability and scalability.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="text-blue-500 hover:text-blue-600 mb-3 inline-block">
                      View Project →
                    </a>
                  )}
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    {project.description.map((desc, i) => (
                      <li key={i}>• {desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra-Curricular Activities */}
        <section id="activities" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Extra-Curricular Activities</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-600">Badminton Committee Head</h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Led the college badminton committee, organizing tournaments and managing events.</li>
                <li>• Represented the college in national-level intra-collegiate badminton tournaments.</li>
                <li>• Competed against teams from IIITs across India.</li>
                <li>• Demonstrated strong sportsmanship, teamwork, and commitment to excellence.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <motion.a
                href="mailto:reddyrk31@gmail.com"
                className="group px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-5 h-5" />
                <span>reddyrk31@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+919398093268"
                className="group px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>+91 9398093268</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 