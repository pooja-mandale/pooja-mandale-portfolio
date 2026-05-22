import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from '../components/SocialIcons'
import poojaImg from '../assets/pooja.jpeg'

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-transparent">
      
      {/* Left Content Side */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 relative z-10 pt-32 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Subtitle */}
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block">
            Pooja Mandale
          </span>

          {/* Headline */}
          <h1 className="text-[6.5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-light leading-[1.2] tracking-tight mb-8 whitespace-nowrap">
            Code. Create. <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent italic pr-2">Innovate.</span>
          </h1>

          {/* Body Text */}
          <p className="text-light/80 text-lg md:text-xl font-light max-w-lg leading-relaxed mb-12">
            I design and develop high-performance web applications that deliver smooth user experiences and meaningful digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="bg-primary text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-1">
              View Work
            </a>
            <button 
              onClick={onOpenResume}
              className="bg-transparent text-light text-sm font-medium px-8 py-4 rounded-full border border-primary/45 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              View Resume
            </button>
            <a href="#contact" className="text-light/80 text-sm font-medium px-8 py-4 rounded-full border border-light/20 hover:border-light hover:bg-light/5 transition-all duration-300 hover:-translate-y-1">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Visual Side */}
      <div className="flex-1 relative min-h-[50vh] md:min-h-full flex items-center justify-center pointer-events-none mt-12 md:mt-0">
        {/* Rotating dash outline */}
        <div 
          className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[480px] rounded-[48px] border border-dashed border-primary/20 animate-spin pointer-events-none"
          style={{ animationDuration: '30s' }}
        />

        {/* Floating tech tags */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-12 left-8 md:left-12 py-2.5 px-5 bg-dark/40 backdrop-blur-xl border border-primary/30 rounded-full shadow-[0_8px_32px_rgba(99,102,241,0.15)] pointer-events-auto hover:scale-110 hover:border-primary transition-all duration-300 z-20 cursor-default flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-light text-xs md:text-sm font-semibold tracking-wider font-outfit">{"<Code />"}</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-12 right-8 md:right-12 py-2.5 px-5 bg-dark/40 backdrop-blur-xl border border-secondary/30 rounded-full shadow-[0_8px_32px_rgba(168,85,247,0.15)] pointer-events-auto hover:scale-110 hover:border-secondary transition-all duration-300 z-20 cursor-default flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-light text-xs md:text-sm font-semibold tracking-wider font-outfit">{"{ React }"}</span>
        </motion.div>

        <motion.div
          animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 left-4 md:-left-12 py-2.5 px-5 bg-dark/40 border border-accent/30 rounded-full shadow-[0_8px_32px_rgba(236,72,153,0.15)] pointer-events-auto hover:scale-110 hover:border-accent transition-all duration-300 z-20 cursor-default flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-light text-xs md:text-sm font-semibold tracking-wider font-outfit">{"[ Bootstrap ]"}</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl p-[3px] bg-gradient-to-tr from-primary via-secondary to-accent shadow-2xl z-10 animate-border-glow"
        >
          <div className="w-full h-full rounded-[21px] overflow-hidden relative bg-dark">
            <img
              src={poojaImg}
              alt="Pooja Mandale"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
          </div>
        </motion.div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-[100px] -z-10" />
      </div>

      {/* Vertical Socials */}
      <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-8 z-20">
        {[
          { Icon: Github, href: "https://github.com/pooja-mandale" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/pooja-mandale-abb484399/" },
          { Icon: Mail, href: "mailto:mandalepooja669@gmail.com" }
        ].map((social, idx) => (
          <a 
            key={idx} 
            href={social.href} 
            target={social.href !== "#" ? "_blank" : undefined}
            rel={social.href !== "#" ? "noopener noreferrer" : undefined}
            className="text-light/40 hover:text-primary hover:-translate-x-1 transition-all duration-300"
          >
            <social.Icon size={18} />
          </a>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-10 md:left-20 lg:left-32 z-20 flex flex-col items-center gap-4 opacity-70"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium vertical-text rotate-180 text-primary">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>

    </section>
  )
}

export default Hero