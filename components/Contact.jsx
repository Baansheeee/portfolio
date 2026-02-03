'use client';

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'shayanahmed675432@gmail.com',
      link: 'mailto:shayanahmed675432@gmail.com',
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+92 318 5151606',
      link: 'tel:+923185151606',
      color: 'from-green-500/20 to-emerald-500/20 border-green-500/40'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com',
      link: 'https://www.linkedin.com/in/shayan-ahmed-30173b325',
      color: 'from-blue-600/20 to-blue-500/20 border-blue-500/40'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com',
      link: 'https://github.com/Baansheeee?tab=repositories',
      color: 'from-gray-500/20 to-gray-600/20 border-gray-500/40'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Contact Methods</h3>

            <div className="space-y-4 mb-12">
              {contactMethods.map((method, idx) => {
                const IconComponent = method.icon
                return (
                  <motion.a
                    key={idx}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ x: 8, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.15)' }}
                    className="flex items-center gap-4 p-5 rounded-xl border border-slate-700/50 hover:border-blue-500/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-white`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-medium">{method.label}</p>
                      <p className="font-semibold text-white group-hover:text-blue-400 transition-colors break-all">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Follow Me</h4>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="flex gap-4"
              >
                {[
                  { icon: FaGithub, link: 'https://github.com/Baansheeee?tab=repositories', color: 'hover:border-gray-400 hover:text-gray-400' },
                  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/shayan-ahmed-30173b325', color: 'hover:border-blue-400 hover:text-blue-400' }
                ].map((social, idx) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 ${social.color} transition-all`}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div
                whileHover={{ y: -2 }}
                className="relative"
              >
                <label className="text-sm text-slate-400 block mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-600 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="relative"
              >
                <label className="text-sm text-slate-400 block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-600 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="relative"
              >
                <label className="text-sm text-slate-400 block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-600 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all resize-none"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Send Message <FaArrowRight size={16} />
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-green-300 text-sm font-medium text-center"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let's Create Something <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Awesome</span> Together!
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always excited about new opportunities and interesting challenges. Let's collaborate and build something remarkable.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
