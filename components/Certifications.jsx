'use client';

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaAward, FaCalendarAlt } from 'react-icons/fa'
import Image from 'next/image'

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null)

  const certifications = [
    {
      title: "Compete'24",
      subtitle: 'Web Development Hackathon',
      year: '2024',
      image: '/Compete24.jpg',
      certificateUrl: '/Compete24.jpg',
      highlights: [
        'Acquired solid understanding of fundamental concepts in Web Development, especially MERN Stack',
        'Independently developed Frontend using React.js and Backend using Node.js and Express.js',
        'Gained deep understanding of how REST APIs work and how data is fetched and managed',
      ],
    },
    {
      title: 'Web Innovators Hackathon',
      subtitle: 'Web Development Hackathon',
      year: '2025',
      image: '/hackathon.png',
      highlights: [
        'Developed a website that helps farmers interact with the market more efficiently',
        'Built full-stack solution with ease of use and familiarity for non-technical users',
        'Applied MERN Stack concepts with React.js frontend and Node.js/Express.js backend',
      ],
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 w-full bg-[#18181b]">
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
            05 — Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            Courses & <span className="text-orange-500">Awards</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Hackathon victories and hands-on learning experiences.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => cert.certificateUrl && setSelectedImage(cert.certificateUrl)}
              className={`dark-card p-8 group relative overflow-hidden ${cert.certificateUrl ? 'cursor-pointer' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-3xl overflow-hidden shrink-0 transition-colors ${cert.image ? 'bg-transparent' : 'bg-zinc-800 group-hover:bg-orange-500/10'}`}>
                    {cert.image ? (
                      <Image src={cert.image} alt={cert.title} width={56} height={56} className="object-cover w-full h-full" />
                    ) : (
                      cert.icon
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-zinc-100 mb-1 group-hover:text-orange-500 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-zinc-500 font-medium">{cert.subtitle}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="flex items-center gap-1.5 text-[11px] px-3 py-1 rounded bg-zinc-800 text-zinc-300 font-semibold border border-zinc-700">
                    <FaCalendarAlt size={10} className="text-orange-500" />
                    {cert.year}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] px-3 py-1 rounded bg-orange-500/10 text-orange-500 font-semibold border border-orange-500/20">
                    <FaAward size={10} />
                    Hackathon
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-8">
                  {cert.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-sm text-zinc-400">
                      <span className="text-orange-500 font-bold shrink-0 mt-0.5">›</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="pt-6 border-t border-zinc-800/50 flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'Express.js', 'REST APIs', 'MERN Stack'].map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-[10px] font-medium bg-[#1f1f22] text-zinc-400 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full rounded-lg overflow-hidden border border-zinc-800 bg-[#18181b] p-2 flex justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Using a standard img tag with the direct Google Drive URL */}
              <img 
                src={selectedImage.includes('drive.google.com/file/d/') 
                  ? `https://drive.google.com/uc?export=view&id=${selectedImage.split('/d/')[1].split('/')[0]}` 
                  : selectedImage
                } 
                alt="Certificate" 
                className="max-w-full h-auto max-h-[85vh] object-contain rounded-md" 
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
