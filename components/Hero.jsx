'use client';

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-slate-950/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl w-full"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: '0 0 60px rgba(59, 130, 246, 0.4)' }}
            transition={{ duration: 0.3 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 shadow-2xl shadow-blue-500/20 relative"
          >
            <Image
              src="/me.jpeg"
              alt="Shayan Ahmed"
              width={160}
              height={160}
              className="rounded-[15px] object-cover w-full h-full"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm">
            <p className="text-sm font-medium text-blue-400">✨ Full-Stack Developer & AI Enthusiast</p>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Shayan</span>{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Ahmed</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
        >
          Crafting scalable web applications with modern tech stack. Passionate about clean code, performance, and creating seamless user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
          >
            View My Work <FaArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-400/50 text-white rounded-xl font-semibold hover:border-blue-400 transition-all"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex justify-center"
        >
          <div className="p-2 rounded-full border border-blue-400/30">
            <svg className="w-6 h-6 text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
