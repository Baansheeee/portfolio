'use client';

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export default function Navigation({ scrollToSection, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems = ['home', 'about', 'projects', 'experience', 'contact']

  const toggleMobile = () => setMobileOpen(!mobileOpen)

  const handleNavClick = (item) => {
    scrollToSection(item)
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-slate-700/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          onClick={() => handleNavClick('home')}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
        >
          Shayan Ahmed
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`capitalize text-sm font-medium transition-colors relative ${
                activeSection === item
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item}
              {activeSection === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Social Links & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={18} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobile}
            className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            {mobileOpen ? (
              <FaTimes className="text-white" size={20} />
            ) : (
              <FaBars className="text-white" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileOpen ? 1 : 0, height: mobileOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-slate-700/30"
      >
        <div className="px-4 py-6 space-y-4 bg-slate-900/50 backdrop-blur-sm">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`block w-full text-left capitalize text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                activeSection === item
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-400/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
              whileHover={{ x: 4 }}
            >
              {item}
            </motion.button>
          ))}
          <div className="flex gap-4 pt-4 border-t border-slate-700/30">
            <motion.a
              href="https://github.com/Baansheeee?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 bg-slate-800/50 text-slate-300 rounded-lg text-center hover:bg-slate-700 transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shayan-ahmed-30173b325"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 bg-slate-800/50 text-slate-300 rounded-lg text-center hover:bg-slate-700 transition-colors"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
