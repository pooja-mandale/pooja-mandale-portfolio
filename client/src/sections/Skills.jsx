import React from 'react'
import { motion } from 'framer-motion'
import { Database, Layout, Server, Smartphone, Terminal, Cpu } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="w-6 h-6 text-primary" />,
    hoverClass: 'hover:!bg-primary/15 hover:!text-primary hover:!border-primary/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:-translate-y-0.5 hover:scale-105',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-6 h-6 text-secondary" />,
    hoverClass: 'hover:!bg-secondary/15 hover:!text-secondary hover:!border-secondary/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:-translate-y-0.5 hover:scale-105',
    skills: ['Node.js', 'Express']
  },
  {
    title: 'Database & DevOps',
    icon: <Database className="w-6 h-6 text-accent" />,
    hoverClass: 'hover:!bg-accent/15 hover:!text-accent hover:!border-accent/30 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] hover:-translate-y-0.5 hover:scale-105',
    skills: ['MongoDB', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Other Tools',
    icon: <Terminal className="w-6 h-6 text-light/50" />,
    hoverClass: 'hover:!bg-light/10 hover:!text-light hover:!border-light/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:scale-105',
    skills: ['Git', 'Postman', 'Figma']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-transparent border-t border-light/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-light/5 pb-10">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
            >
              Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-normal text-light mb-6"
            >
              Technical Arsenal
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-light/70 text-base md:text-lg font-light leading-relaxed"
            >
              I leverage modern technologies to build scalable, secure, and high-performance applications with an emphasis on code quality.
            </motion.p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-light/5 p-3 rounded-xl group-hover:bg-primary/10 transition-all duration-300 border border-light/5 group-hover:rotate-12 group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-base font-medium tracking-wide text-light uppercase">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, si) => (
                  <span 
                    key={si} 
                    className={`px-4 py-2 bg-light/5 border border-light/10 rounded-full text-sm font-light text-light/80 transition-all duration-300 cursor-default ${category.hoverClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  )
}

export default Skills
