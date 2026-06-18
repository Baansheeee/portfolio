'use client';

import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaCheck } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      title: 'MERN Stack Developer (Internship)',
      company: 'HHTECHHUB',
      period: 'April 2026 – Present',
      type: 'Internship',
      highlights: [
        'Developed and maintained full-stack MERN applications using MongoDB, Express.js, React.js, and Node.js',
        'Built e-commerce platforms with user authentication, product management, shopping cart, order processing, and secure payment integration',
        'Designed and integrated RESTful APIs, managed database operations',
        'Collaborated on frontend and backend to ensure high performance and seamless user experience',
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Payment Integration'],
      current: true,
    },
    {
      title: 'ERP System Developer',
      company: 'Freelancing Project',
      period: 'Summer 2025',
      type: 'Freelance',
      highlights: [
        'Developed a web-based ERP system to streamline HR, Finance, Sales, Inventory, and Purchasing Management',
        'Implemented role-based authentication, reporting dashboards, and scheduling tools',
        'Built dynamic data tables with search and filtering capabilities',
        'Used React (Vite), JavaScript, Context API, and component-based architecture with responsive UI',
      ],
      skills: ['React (Vite)', 'JavaScript', 'Context API', 'RBAC', 'Dashboard', 'ERP'],
      current: false,
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="experience" className="py-24 px-6 md:px-12 w-full bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <span className="text-orange-500 text-sm font-mono font-medium tracking-wider uppercase mb-3 block">
            04 — Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            Professional <span className="text-orange-500">Journey</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Real-world experience building production applications and enterprise solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-[2px] bg-zinc-800" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative pl-12 md:pl-16">
                
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-[3px] top-8 w-8 h-8 md:w-9 md:h-9 rounded-full border-4 border-[#18181b] flex items-center justify-center z-10 transition-colors duration-300 ${exp.current ? 'bg-orange-500 text-white' : 'bg-zinc-700 text-zinc-400 hover:bg-orange-500 hover:text-white'}`}>
                  <FaBriefcase size={12} />
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-orange-500/30 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className="dark-card p-8 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-orange-500 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-orange-500 font-semibold mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[11px] px-3 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 font-semibold uppercase tracking-wider">
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="text-[11px] px-3 py-1 rounded bg-orange-500/10 text-orange-500 border border-orange-500/20 font-semibold uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
                    <FaCalendarAlt size={14} />
                    <span>{exp.period}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-8">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-zinc-400 text-sm">
                        <FaCheck className="text-orange-500 shrink-0 mt-1" size={12} />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800/50">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded bg-zinc-800/50 text-[11px] font-medium text-zinc-400 border border-zinc-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
