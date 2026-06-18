'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'
import {FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Baansheeee' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/shayan-ahmed-30173b325' },
    { icon: FaEnvelope, href: "mailto:shayanahmed675432@gmail.com" },
  ]

  const stats = [
    { number: '2+', label: 'Experiences' },
    { number: '5+', label: 'Project done' },
    { number: '3+', label: 'Happy Clients' },
  ]

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative w-full min-h-screen pt-28 pb-16 flex items-center bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start z-10"
        >
          <h3 className="text-zinc-400 text-lg md:text-xl font-medium mb-1">
            Hi I am
          </h3>
          <h2 className="text-zinc-100 text-2xl md:text-3xl font-semibold mb-2">
            Shayan Ahmed
          </h2>
          <h1 className="text-orange-500 text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Full-Stack Developer
          </h1>

          {/* Social Icons */}
          <div className="flex gap-4 mb-10">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(249, 115, 22, 0.1)', borderColor: '#f97316', color: '#f97316' }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              )
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded text-sm transition-colors shadow-[0_4px_14px_0_rgba(234,88,12,0.39)]"
            >
              Hire Me
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1vVyA6VJuamf_YKqyqveGzUmlJCoq36bt/view?usp=sharing"
              target="_blank"
              className="px-8 py-3 bg-transparent border border-zinc-600 hover:border-zinc-400 text-zinc-300 font-medium rounded text-sm transition-colors"
            >
              Download CV
            </motion.a>
          </div>

          {/* Stats Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#222222] border border-zinc-800 rounded-lg p-6 w-full max-w-md grid grid-cols-3 gap-4"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className={`flex flex-col ${idx !== 2 ? 'border-r border-zinc-700' : ''}`}>
                <span className="text-orange-500 font-bold text-xl mb-1">{stat.number}</span>
                <span className="text-zinc-400 text-xs font-medium pr-2">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end items-center h-full min-h-[400px] lg:min-h-[600px] z-0"
        >
          {/* Profile Image Overlay (Circular) */}
          <div className="relative z-10 w-[350px] h-[350px] md:w-[500px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-full bg-[#202022] shadow-2xl">
            <Image
              src="/me.png"
              alt="Shayan Ahmed"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
