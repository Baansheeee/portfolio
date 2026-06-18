'use client';

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'AWSOME',
      subtitle: 'AWS Optimization & Management Engine',
      description:
        'AI-powered cloud management platform to simplify design, deployment, and management of AWS infrastructure. Automated architecture generation from natural language, producing Infrastructure-as-Code (Terraform).',
      highlights: [
        'One-click deployment with real-time cost estimation',
        'Performance monitoring & compliance validation',
      ],
      tags: ['React', 'Node.js', 'AWS', 'Terraform', 'AI'],
      github: null,
      live: "https://awsome.mugheesulhassan.dev/",
    },
    {
      title: 'Step & Style',
      subtitle: 'Full-Stack E-Commerce — Live',
      description:
        'Full-stack e-commerce web application providing a complete online shopping experience with secure payment processing via Stripe.',
      highlights: [
        'Stripe payment integration with secure checkout',
        'Dynamic & responsive UI with Recharts data visualization',
      ],
      tags: ['Next.js', 'React', 'Tailwind', 'MongoDB', 'Prisma', 'Stripe'],
      github: 'https://github.com/Baansheeee/step_any_style.git',
      live: 'https://www.stepandstyl.com',
    },
    {
      title: 'ShopSphere',
      subtitle: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce web app with CRUD operations for products, orders, and users. Features separate User and Admin dashboards with role-based access control.',
      highlights: [
        'React Context API for global state management',
        'Admin panel to add/manage products and view orders',
      ],
      tags: ['React', 'MongoDB', 'Tailwind CSS', 'RESTFul APIs'],
      github: 'https://github.com/Baansheeee/Shop-Sphere.git',
      live: null,
    },
    {
      title: 'TaxSwap',
      subtitle: 'Device Resale Platform',
      description:
        'Device resale platform enabling users to sell smartphones, tablets, and laptops by submitting detailed device information. Features automated price estimation.',
      highlights: [
        'Admin review workflow for condition verification',
        'Secure transaction flows with identity verification',
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      github: 'https://github.com/Baansheeee/Compete.git',
      live: null,
    },
    {
      title: 'TaskHive',
      subtitle: 'Flutter Task Management',
      description:
        'Flutter-based task management application with task categorization, priorities, analytics dashboard, notifications, and AI chatbot integration.',
      highlights: [
        'Firebase Auth, Firestore, Realtime DB, Storage',
        'AI chatbot & local notification system',
      ],
      tags: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      github: 'https://github.com/Baansheeee/TaskHive.git',
      live: null,
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-24 px-6 md:px-12 w-full bg-[#18181b]">
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
            03 — Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            Featured <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A showcase of projects that demonstrate my technical range and problem-solving approach.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants} className="dark-card p-8 flex flex-col h-full group relative overflow-hidden">
              
              {/* Subtle hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      {project.live && (
                        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider rounded border border-emerald-500/20">
                          Live
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-500 font-medium">{project.subtitle}</p>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white bg-zinc-800 rounded transition-colors">
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-orange-500 bg-zinc-800 rounded transition-colors">
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-400 mb-6 text-[15px] leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-8 space-y-2">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-orange-500 font-bold shrink-0 mt-0.5">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-800">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2.5 py-1 rounded text-[11px] font-semibold bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
