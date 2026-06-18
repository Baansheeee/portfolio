'use client';

import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaArrowRight, FaPaperPlane, FaCheck } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focused, setFocused] = useState(null)

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'shayanahmed675432@gmail.com',
      link: 'mailto:shayanahmed675432@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+92 318 5151606',
      link: 'tel:+923185151606',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Shayan Ahmed',
      link: 'https://www.linkedin.com/in/shayan-ahmed-30173b325',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Baansheeee',
      link: 'https://github.com/Baansheeee?tab=repositories',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "068bff32-51a7-4825-8c46-f3326661cb6b",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

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

  const inputClasses = (name) =>
    `w-full px-5 py-4 rounded-md bg-[#1f1f22] border transition-all duration-300 text-zinc-100 placeholder-zinc-600 focus:outline-none text-sm ${
      focused === name
        ? 'border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]'
        : 'border-zinc-800 hover:border-zinc-700'
    }`

  return (
    <section id="contact" className="py-24 px-6 md:px-12 w-full bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="text-orange-500 text-sm font-mono font-medium tracking-wider uppercase mb-3 block">
            06 — Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting conversations. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold mb-8 text-zinc-100 flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              Contact Methods
            </h3>

            <div className="space-y-4 mb-10">
              {contactMethods.map((method, idx) => {
                const IconComponent = method.icon
                return (
                  <motion.a
                    key={idx}
                    href={method.link}
                    target={method.link.startsWith('mailto') || method.link.startsWith('tel') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-5 rounded-lg dark-card group transition-all hover:border-orange-500/50"
                  >
                    <div className="p-3 rounded bg-zinc-800 text-zinc-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <IconComponent size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider mb-1">
                        {method.label}
                      </p>
                      <p className="font-semibold text-zinc-200 text-sm truncate group-hover:text-orange-500 transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <FaArrowRight
                      size={12}
                      className="text-zinc-600 group-hover:text-orange-500 transition-colors shrink-0"
                    />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold mb-8 text-zinc-100 flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 dark-card p-8">
              <div>
                <label className="text-[11px] text-zinc-400 block mb-2 font-medium uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  placeholder="John Doe"
                  className={inputClasses('name')}
                />
              </div>

              <div>
                <label className="text-[11px] text-zinc-400 block mb-2 font-medium uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                  placeholder="john@example.com"
                  className={inputClasses('email')}
                />
              </div>

              <div>
                <label className="text-[11px] text-zinc-400 block mb-2 font-medium uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  placeholder="Tell me about your project or idea..."
                  rows="4"
                  className={`${inputClasses('message')} resize-none`}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitted || isSubmitting}
                className="w-full px-6 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-md font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </motion.span>
                  ) : submitted ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <FaCheck size={14} /> Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <FaPaperPlane size={14} /> Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 text-center border-t border-zinc-800 pt-8"
        >
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Shayan Ahmed. Built with Next.js & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
