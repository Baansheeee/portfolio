'use client';

import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward, FaLaptopCode } from 'react-icons/fa'

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="about" className="py-24 px-6 md:px-12 w-full bg-[#18181b]">
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
            01 — About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-6">
            My <span className="text-orange-500">Background</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            I am a passionate Full-Stack Developer currently pursuing a BS in Computer Science at COMSATS University Islamabad. 
            I specialize in building robust MERN stack applications, responsive frontends, and scalable backends. 
            My goal is to craft digital experiences that are not only highly functional but also visually compelling.
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="dark-card p-8 group">
            <div className="w-12 h-12 rounded bg-zinc-800/50 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
              <FaLaptopCode size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-3">Development</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Extensive experience in full-stack web development using React, Node.js, Express, and MongoDB. Familiar with cross-platform mobile development using Flutter.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="dark-card p-8 group">
            <div className="w-12 h-12 rounded bg-zinc-800/50 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
              <FaGraduationCap size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-3">Education</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              BS Computer Science at COMSATS University Islamabad (2022-Present).
            </p>
            <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold rounded">
              CGPA: 3.61
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="dark-card p-8 group">
            <div className="w-12 h-12 rounded bg-zinc-800/50 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
              <FaAward size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-3">Problem Solving</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. Experienced in tackling complex technical challenges effectively.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-zinc-100 mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Academic Timeline
          </h3>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-zinc-800">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#18181b] bg-orange-500 text-zinc-400 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] dark-card p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-zinc-100 text-lg">BS Computer Science</h4>
                  <span className="text-orange-500 text-sm font-medium">July 2022 - Now</span>
                </div>
                <p className="text-sm text-zinc-400">COMSATS University Islamabad, Pakistan</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#18181b] bg-zinc-700 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-orange-500"></div>
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] dark-card p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-zinc-100 text-lg">Pre-Engineering (HSSC)</h4>
                  <span className="text-zinc-500 text-sm font-medium">2020 - 2022</span>
                </div>
                <p className="text-sm text-zinc-400">Punjab College of Information and Technology</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#18181b] bg-zinc-700 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-orange-500"></div>
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] dark-card p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-zinc-100 text-lg">SSC</h4>
                  <span className="text-zinc-500 text-sm font-medium">2011 - 2020</span>
                </div>
                <p className="text-sm text-zinc-400">Sir Syed Public School</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
