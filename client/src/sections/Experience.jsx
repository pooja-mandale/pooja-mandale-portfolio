import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Fullstack Developer',
    company: 'Arkraz Tech',
    duration: 'Present (6 Months)',
    description: 'Currently building and maintaining scalable full-stack applications. Collaborating with cross-functional teams to deliver high-quality, performant software solutions.',
  },
  {
    role: 'Fullstack Developer',
    company: 'Indux Solar',
    duration: '3 Months',
    description: 'Developed full-stack web applications tailored for the solar energy sector. Focused on responsive frontend designs and robust backend integrations.',
  }
]

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="experience" className="py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
          >
            Career
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-normal text-light mb-6"
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-light/70 text-base md:text-lg font-light leading-relaxed max-w-2xl"
          >
            A timeline of my professional journey, highlighting key roles where I contributed to building impactful digital products.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-start ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Node */}
                <div 
                  className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full z-10 flex items-center justify-center pointer-events-none"
                >
                  <div className={`w-full h-full rounded-full border-2 transition-all duration-500 ${
                    hoveredIndex === i 
                      ? 'bg-primary border-light scale-125 shadow-[0_0_20px_#6366f1,0_0_10px_#6366f1]' 
                      : 'bg-dark border-primary/40 scale-100'
                  }`} />
                  
                  {hoveredIndex === i && (
                    <motion.div 
                      layoutId="timeline-ripple"
                      className="absolute w-8 h-8 rounded-full border border-primary/45 bg-primary/5 pointer-events-none -z-10 animate-ping"
                    />
                  )}
                </div>

                {/* Connector Line (Desktop only) */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === i ? '48px' : '0px' }}
                  transition={{ duration: 0.3 }}
                  className={`hidden md:block absolute top-10 h-[1px] bg-gradient-to-r from-primary to-primary/10 -z-10 ${
                    i % 2 === 0 
                      ? 'left-1/2 origin-left' 
                      : 'right-1/2 origin-right'
                  }`}
                />

                {/* Content Card Container */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card p-6 md:p-8 rounded-3xl hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(99,102,241,0.12)] hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                      {/* Mobile-only duration pill */}
                      <span className="text-primary text-xs font-semibold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full md:hidden">
                        {exp.duration}
                      </span>
                      <div className="flex items-center gap-2 text-light/50 text-xs md:text-sm font-medium uppercase tracking-widest">
                        <Briefcase size={14} className="text-primary/70" />
                        {exp.company}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-normal text-light mb-3">
                      {exp.role}
                    </h3>
                    <p className="text-light/70 text-sm md:text-base font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Opposite Side (Duration Pill on desktop) */}
                <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'} pt-8`}>
                  <span className={`text-xs md:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${
                    hoveredIndex === i 
                      ? 'text-primary bg-primary/10 border-primary/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]' 
                      : 'text-light/40 bg-light/5 border-light/5'
                  }`}>
                    {exp.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  )
}

export default Experience
