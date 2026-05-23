import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const Navbar = ({ isDarkMode, setIsDarkMode, onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Intro', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', onClick: onOpenResume },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isOpen ? 'h-20 bg-transparent' : scrolled ? 'h-20 bg-dark/60 backdrop-blur-xl border-b border-light/10 shadow-[0_4px_30px_rgba(99,102,241,0.03)]' : 'h-28 bg-transparent'}`}>
        
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[200] pointer-events-none" 
          style={{ scaleX }} 
        />

        <div className="relative w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer group flex items-center gap-1.5"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-2xl font-serif font-medium text-light tracking-widest group-hover:text-primary transition-colors">
            PM.
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href || '#'}
              onClick={(e) => {
                console.log('Desktop nav click:', link.name);
                if (link.name === 'Resume') {
                  e.preventDefault();
                  console.log('Resume clicked, calling onOpenResume. Prop is function:', typeof onOpenResume === 'function');
                  if (typeof onOpenResume === 'function') {
                    onOpenResume();
                  } else {
                    console.error('onOpenResume is not a function');
                  }
                } else if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative text-sm font-medium tracking-wide text-light/80 hover:text-primary transition-colors py-2 px-4 rounded-full flex items-center justify-center cursor-pointer"
            >
              {link.name}
              {hoveredIndex === i && (
                <motion.span
                  layoutId="navbar-hover-indicator"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </motion.a>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 p-2 text-light/70 hover:text-primary hover:bg-light/5 rounded-full transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden z-50 flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 text-light/70 hover:text-primary hover:bg-light/5 rounded-full transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 text-light/70 hover:text-light hover:bg-light/5 rounded-full transition-all cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-12 z-[90] border-b border-light/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href || '#'}
              className="text-light text-sm font-medium uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => {
                setIsOpen(false);
                console.log('Mobile nav click:', link.name);
                if (link.name === 'Resume') {
                  e.preventDefault();
                  console.log('Resume clicked (mobile), calling onOpenResume. Prop is function:', typeof onOpenResume === 'function');
                  if (typeof onOpenResume === 'function') {
                    onOpenResume();
                  } else {
                    console.error('onOpenResume is not a function (mobile)');
                  }
                } else if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </>
)
}

export default Navbar