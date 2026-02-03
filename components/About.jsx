'use client';

import { motion } from 'framer-motion'
import { FaBook, FaAward } from 'react-icons/fa'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const education = [
    {
      school: 'COMSATS University Islamabad',
      degree: 'Bachelor of Science in Computer Science',
      period: '2022 - 2026',
      status: 'Ongoing'
    },
    {
      school: 'Punjab College of Information and Technology',
      degree: 'Pre-Engineering (HSSC)',
      period: '2020 - 2022',
      status: 'Completed'
    },
    {
      school: 'Sir Syed Public School',
      degree: 'Secondary School Certificate (SSC)',
      period: '2011 - 2020',
      status: 'Completed'
    }
  ]

  const certifications = [
    { name: 'COMPETE 24 - National Hackathon', badge: '🏆' },
    {name: 'Web Innovators Hackathon', badge: '💻' },
    { name: 'CGPA: 3.61/4.0', badge: '⭐' }
  ]

  const highlights = [
    'Currently studying at COMSATS University Islamabad',
    'MERN Stack specialization with AI/ML integration',
    'Focus on scalable architecture and performance',
    'Open source contributor and tech enthusiast'
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-slate-400">Education, achievements, and key highlights</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex items-center gap-3 mb-10">
              <FaBook className="text-blue-400 text-2xl" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}
                  className="p-5 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all bg-slate-800/30 backdrop-blur-sm cursor-default"
                >
                  <h4 className="font-bold text-blue-300 mb-1 text-lg">{edu.school}</h4>
                  <p className="text-slate-400 text-sm mb-3 font-medium">{edu.degree}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">{edu.period}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      edu.status === 'Ongoing' 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/50' 
                        : 'bg-green-500/20 text-green-300 border border-green-400/50'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex items-center gap-3 mb-10">
              <FaAward className="text-purple-400 text-2xl" />
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>

            <div className="space-y-4 mb-10">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 rounded-xl bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-purple-400/40 flex items-center gap-4 hover:border-purple-400/60 transition-all"
                >
                  <span className="text-4xl flex-shrink-0">{cert.badge}</span>
                  <span className="font-semibold text-slate-200 text-sm md:text-base">{cert.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/20 rounded-xl p-6 border border-slate-700/50">
              <h4 className="font-bold text-lg mb-4 text-white">Quick Facts</h4>
              <ul className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0 mt-1.5"></span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
