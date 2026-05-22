import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Scene from './components/Scene'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import ResumeModal from './components/ResumeModal'

const Footer = () => (
  <footer className="py-12 border-t border-light/5 text-center">
    <p className="text-light/30 text-sm font-medium tracking-widest uppercase">
      © {new Date().getFullYear()} Pooja Mandale. Crafted with Love.
    </p>
  </footer>
)

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className="bg-dark min-h-screen relative overflow-hidden">
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/20 blur-xl pointer-events-none z-[9999]"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <div className="bg-gradient-mesh fixed inset-0 pointer-events-none" style={{ opacity: 'var(--mesh-opacity)' }} />
      <div className="bg-grid-pattern fixed inset-0 pointer-events-none" />
      <Scene />
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        onOpenResume={() => {
          console.log('onOpenResume triggered in App.jsx');
          setIsResumeOpen(true);
        }} 
      />
      <main className="relative">
        <Hero onOpenResume={() => {
          console.log('onOpenResume triggered in App.jsx from Hero');
          setIsResumeOpen(true);
        }} />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            key="resume-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark/80 backdrop-blur-xl p-4 md:p-6 overflow-y-auto no-print"
          >
            <ResumeModal 
              isOpen={isResumeOpen} 
              onClose={() => {
                console.log('onClose triggered in App.jsx');
                setIsResumeOpen(false);
              }} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default App