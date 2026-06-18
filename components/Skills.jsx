'use client';

import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaMobileAlt, FaTools, FaCloud, FaBrain } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Web-Dev',
      icon: FaCode,
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React.js', 'Next.js'],
    },
    {
      title: 'React Ecosystem',
      icon: FaCode,
      skills: ['Hooks', 'Redux Toolkit', 'Context API', 'React Router DOM', 'Framer Motion', 'Axios', 'React Hook Form'],
    },
    {
      title: 'Backend Web-Dev',
      icon: FaServer,
      skills: ['Node.js', 'Express.js', 'MVC Architecture', 'REST API', 'CORS', 'Cookies', 'JWT', 'Passport.js', 'Bcrypt'],
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: ['MongoDB', 'Mongoose', 'DBMS', 'Firebase'],
    },
    {
      title: 'Mobile Dev',
      icon: FaMobileAlt,
      skills: ['Flutter', 'Dart', 'Provider'],
    },
    {
      title: 'Languages & Core',
      icon: FaBrain,
      skills: ['Python', 'C++', 'Java', 'Data Structures', 'Algorithms', 'OOPs', 'Operating System', 'Computer Networks'],
    },
    {
      title: 'Tools & Others',
      icon: FaTools,
      skills: ['Git', 'GitHub', 'Problem Solving', 'Communication Skills', 'Cloud architecture'],
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-24 px-6 md:px-12 w-full bg-[#18181b]">
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
            02 — Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            My <span className="text-orange-500">Expertise</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A comprehensive overview of my technical toolkit, ranging from frontend interfaces to backend architectures.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="dark-card p-6 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-zinc-800 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 rounded-md text-xs font-medium bg-[#1f1f22] text-zinc-300 border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
