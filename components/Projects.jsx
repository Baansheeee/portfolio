'use client';

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'AWSOME - AI Cloud Management',
      description: 'AI-powered platform for designing and managing AWS infrastructure. Features IaC generation, real-time cost estimation, and compliance checking.',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'AI/ML'],
      outcome: 'Reduced deployment time by 40%',
      github: '#',
      live: '#'
    },
    {
      title: 'ShopSphere - E-Commerce Platform',
      description: 'Full-featured e-commerce solution with product management, shopping cart, and admin dashboard. Real-time inventory management.',
      tags: ['React', 'MongoDB', 'Express', 'Tailwind'],
      outcome: 'Handles 1000+ products smoothly',
      github: '#',
      live: '#'
    },
    {
      title: 'TaxSwap - Device Trading Platform',
      description: 'Peer-to-peer trading platform for devices with secure authentication, price estimation, and admin verification system.',
      tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
      outcome: 'Verified 500+ device listings',
      github: '#',
      live: '#'
    },
    {
      title: 'OCHI - Animated Portfolio',
      description: 'Modern animated portfolio website with smooth scroll interactions and responsive design. Achieved 95+ Lighthouse score.',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      outcome: '60fps animations throughout',
      github: '#',
      live: '#'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400">Showcasing my latest work and technical expertise</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/20 border border-slate-700/50 rounded-2xl p-8 md:p-10 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <motion.a
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                      href={project.github}
                      className="p-3 bg-slate-700/50 hover:bg-blue-500/20 rounded-lg transition-all"
                    >
                      <FaGithub size={18} className="text-slate-300" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                      href={project.live}
                      className="p-3 bg-slate-700/50 hover:bg-purple-500/20 rounded-lg transition-all"
                    >
                      <FaExternalLinkAlt size={18} className="text-slate-300" />
                    </motion.a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>

                {/* Outcome */}
                <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-lg flex-shrink-0">✓</span>
                  <p className="text-slate-300">
                    <span className="text-blue-400 font-semibold">Outcome: </span>
                    {project.outcome}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={tagIdx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-blue-500/15 text-blue-300 border border-blue-500/40 rounded-full text-sm font-medium hover:bg-blue-500/25 transition-colors cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  )
}
