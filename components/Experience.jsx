'use client';

import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaLightbulb, FaCheck } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      title: 'Self-Directed Full-Stack Developer',
      company: 'Continuous Learning & Projects',
      period: 'Present',
      type: 'Professional Development',
      highlights: [
        'Developing production-grade applications using MERN stack',
        'Implementing modern UI/UX patterns with animations',
        'Exploring ML/AI integration in web applications',
        'Building microservices architecture with Docker'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS', 'Docker'],
      icon: FaCode
    },
    {
      title: 'Web Development',
      company: 'Academic & Personal Projects',
      period: '2023 - Present',
      type: 'Project-Based Experience',
      highlights: [
        'Built full-featured e-commerce platform (ShopSphere)',
        'Created peer-to-peer trading platform with authentication',
        'Developed AI-powered cloud management platform',
        'Implemented REST APIs with secure authentication'
      ],
      skills: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
      icon: FaRocket
    },
    {
      title: 'Machine Learning Exploration',
      company: 'Research & Learning',
      period: '2023 - Present',
      type: 'Technical Learning',
      highlights: [
        'Studying NLP and Transformers for AI applications',
        'Working with TensorFlow and PyTorch frameworks',
        'Implementing CNN and RNN models',
        'Analyzing complex datasets and creating predictive models'
      ],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'CNN', 'RNN'],
      icon: FaLightbulb
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const StatCard = ({ title, description, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`bg-gradient-to-br ${color} rounded-xl p-6 border border-slate-700/50 hover:border-opacity-100 transition-all`}
    >
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-300">{description}</p>
    </motion.div>
  )

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
            Experience & Background
          </h2>
          <p className="text-lg text-slate-400">My professional journey and technical growth</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-6 mb-16"
        >
          {experiences.map((exp, idx) => {
            const IconComponent = exp.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 4, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.1)' }}
                className="relative pl-8 border-l-2 border-blue-400/50 hover:border-blue-400 transition-all"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-[-11px] top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/30"
                />

                {/* Card */}
                <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/20 rounded-xl p-7 border border-slate-700/50 hover:border-blue-500/50 transition-all backdrop-blur-sm">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="text-3xl flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                      <IconComponent />
                    </div>
                  </div>

                  {/* Period & Type */}
                  <div className="flex flex-wrap items-center gap-3 mb-5 text-sm">
                    <span className="text-slate-400 font-medium">{exp.period}</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-400/50">
                      {exp.type}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                        <FaCheck className="text-blue-400 flex-shrink-0 mt-1" size={14} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                    {exp.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.08 }}
                        className="px-3 py-1.5 bg-slate-700/40 border border-slate-600/50 rounded-lg text-xs text-slate-300 font-medium hover:border-blue-400/50 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <StatCard
            title="Technical Foundation"
            description="Strong grasp of Data Structures, Algorithms, DBMS, and OOP principles"
            color="from-blue-500/15 to-blue-400/5 border-blue-400/30"
          />
          <StatCard
            title="Full-Stack Expertise"
            description="End-to-end solutions using modern web technologies with scalability focus"
            color="from-purple-500/15 to-purple-400/5 border-purple-400/30"
          />
          <StatCard
            title="Continuous Growth"
            description="Actively exploring AI/ML, Cloud Architecture, and DevOps practices"
            color="from-pink-500/15 to-pink-400/5 border-pink-400/30"
          />
        </div>
      </div>
    </section>
  )
}
