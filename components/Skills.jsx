'use client'

import { motion } from 'framer-motion'
import {
  FaReact, FaNode, FaPython, FaDatabase, FaDocker, FaCode
} from 'react-icons/fa'
import {
  SiJavascript, SiTailwindcss, SiMongodb, SiExpress,
  SiKubernetes, SiAmazon, SiTypescript, SiFramer,
  SiBootstrap, SiNextdotjs, SiPostgresql, SiRedux,
  SiGit, SiNumpy, SiTensorflow, SiPytorch
} from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'React', icon: FaReact, color: '#61dafb' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
        { name: 'Framer Motion', icon: SiFramer, color: '#0055ff' },
        { name: 'Redux', icon: SiRedux, color: '#764abc' },
      ]
    },
    {
      category: 'Backend',
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', icon: FaNode, color: '#68a063' },
        { name: 'Express', icon: SiExpress, color: '#ffffff' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'JWT/Authentication', icon: FaCode, color: '#8b5cf6' },
      ]
    },
    {
      category: 'Languages',
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776ab' },
        { name: 'C++', icon: FaCode, color: '#00599c' },
        { name: 'Java', icon: FaCode, color: '#007396' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'Git', icon: SiGit, color: '#f1502f' },
      ]
    },
    {
      category: 'DevOps & Cloud',
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'Docker', icon: FaDocker, color: '#2496ed' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326ce5' },
        { name: 'AWS', icon: SiAmazon, color: '#ff9900' },
        { name: 'Firebase', icon: FaDatabase, color: '#ffa500' },
        { name: 'Linux', icon: FaCode, color: '#fcc624' },
        { name: 'CI/CD', icon: FaCode, color: '#0366d6' },
      ]
    },
    {
      category: 'Machine Learning',
      color: 'from-indigo-400 to-blue-400',
      skills: [
        { name: 'Python ML', icon: FaPython, color: '#3776ab' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
        { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
        { name: 'NumPy', icon: SiNumpy, color: '#013243' },
        { name: 'NLP', icon: FaCode, color: '#00d4ff' },
        { name: 'Data Analysis', icon: FaDatabase, color: '#2bbc8a' },
      ]
    },
    {
      category: 'Other Skills',
      color: 'from-teal-400 to-cyan-400',
      skills: [
        { name: 'REST API', icon: FaCode, color: '#00d4ff' },
        { name: 'DBMS', icon: FaDatabase, color: '#336791' },
        { name: 'OOP', icon: FaCode, color: '#f1502f' },
        { name: 'Algorithms', icon: FaCode, color: '#8b5cf6' },
        { name: 'Problem Solving', icon: FaCode, color: '#4ade80' },
        { name: 'Communication', icon: FaCode, color: '#ec4899' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className={`text-2xl font-semibold text-foreground mb-8 flex items-center gap-3`}>
                <span className={`h-1 w-6 bg-gradient-to-r ${category.color} rounded-full`} />
                {category.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {category.skills.map((skill, idx) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group cursor-pointer"
                    >
                      <div className="text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                        <IconComponent />
                      </div>
                      <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 group">
            <h4 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <span className="h-2 w-2 bg-primary rounded-full" />
              Expert Level
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                <span className="text-primary font-bold">✓</span> React & JavaScript
              </p>
              <p className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                <span className="text-primary font-bold">✓</span> Node.js & Express
              </p>
              <p className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                <span className="text-primary font-bold">✓</span> MongoDB & Databases
              </p>
              <p className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                <span className="text-primary font-bold">✓</span> Tailwind CSS
              </p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 group">
            <h4 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <span className="h-2 w-2 bg-primary rounded-full" />
              Advanced Level
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                <span className="text-primary font-bold">✓</span> Python & ML Libraries
              </p>
              <p className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                <span className="text-primary font-bold">✓</span> Docker & DevOps
              </p>
              <p className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                <span className="text-primary font-bold">✓</span> TypeScript
              </p>
              <p className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                <span className="text-primary font-bold">✓</span> Algorithms & DSA
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
