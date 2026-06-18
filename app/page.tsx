'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-orange-600 transform-origin-left z-50"
      style={{ scaleX }}
    />
  )
}

export default function Page() {
  return (
    <main className="relative bg-[#18181b] min-h-screen text-zinc-100 font-sans selection:bg-orange-500/30 selection:text-white">
      <ScrollProgress />
      <Navigation />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <div className="w-full max-w-6xl section-divider opacity-50" />
        <About />
        <div className="w-full max-w-6xl section-divider opacity-50" />
        <Skills />
        <div className="w-full max-w-6xl section-divider opacity-50" />
        <Projects />
        <div className="w-full max-w-6xl section-divider opacity-50" />
        <Experience />
        <div className="w-full max-w-6xl section-divider opacity-50" />
        <Certifications />
        <div className="w-full max-w-6xl section-divider opacity-50" />
        <Contact />
      </div>

      {/* Subtle background noise for texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />
    </main>
  )
}
