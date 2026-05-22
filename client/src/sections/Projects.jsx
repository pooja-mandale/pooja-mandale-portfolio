import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Check, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { Github } from '../components/SocialIcons'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile && selectedProject && selectedProject.id === 'enamel' && activeImageIndex === 0) {
      setActiveImageIndex(1)
    }
  }, [isMobile, selectedProject, activeImageIndex])

  return (
    <section id="projects" className="py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
            >
              Selected Work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-normal text-light mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-light/70 text-base md:text-lg font-light leading-relaxed"
            >
              A selection of my favorite works, ranging from complex web apps to creative frontend experiments, all built with a focus on performance and aesthetics.
            </motion.p>
          </div>
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-light/80 hover:text-primary text-sm font-medium uppercase tracking-[0.2em] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 pb-1"
          >
            View Archive
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              onClick={() => {
                setSelectedProject(project)
                setActiveImageIndex(isMobile && project.id === 'enamel' ? 1 : 0)
              }}
              className="group flex flex-col glass-card rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-[0_12px_40px_rgba(99,102,241,0.1)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.images && project.images[0] ? project.images[0] : project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Brand-tinted Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
                  {project.github && project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 bg-dark/80 backdrop-blur-md text-light rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-light/10"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 bg-dark/80 backdrop-blur-md text-light rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-light/10"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-normal text-light mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-light/70 text-sm md:text-base font-light leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, ti) => (
                    <span 
                      key={ti} 
                      className="text-[10px] font-bold tracking-[0.05em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.25)] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && createPortal(
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          style={{ zIndex: 9999 }}
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Box */}
          <div
            className="w-full max-w-4xl max-h-[90vh] bg-dark border border-light/10 rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-light/5 hover:bg-light/10 flex items-center justify-center text-light/70 hover:text-light transition-all border border-light/10 hover:border-primary/30 z-50 cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Scrollable Content Container */}
            <div className="overflow-y-auto overflow-x-hidden p-5 md:p-10 space-y-6 md:space-y-8 w-full max-w-full">
              
              {/* Header */}
              <div className="space-y-4 pr-16 md:pr-0">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, ti) => (
                    <span key={ti} className="text-[10px] font-bold tracking-[0.05em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-4xl font-serif font-normal text-light">
                  {selectedProject.title}
                </h3>
                <p className="text-light/80 text-sm md:text-lg font-light leading-relaxed">
                  {selectedProject.desc}
                </p>
                
                {/* Mobile CTA Links */}
                <div className="flex flex-wrap gap-3 pt-2 md:hidden">
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-light/5 border border-light/10 text-light text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full flex-1 min-w-[120px] transition-all duration-300"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {selectedProject.link && selectedProject.link !== "#" && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-primary text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-[0_4px_15px_rgba(99,102,241,0.2)] flex-1 min-w-[120px] transition-all duration-300"
                    >
                      <Globe size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>

              {/* Main Media & Info Grid */}
              <div className="grid lg:grid-cols-2 gap-10 items-start w-full">
                
                {/* Left Side - Image Gallery */}
                <div className={`space-y-4 order-1 lg:order-1 w-full min-w-0 flex flex-col items-center ${selectedProject.id === 'enamel' ? 'block' : 'hidden md:block'}`}>
                  <div className={`relative rounded-2xl overflow-hidden bg-dark/40 border border-light/10 flex items-center justify-center transition-all duration-300 ${
                    selectedProject && selectedProject.images && selectedProject.images[activeImageIndex] && (selectedProject.id === 'enamel' && activeImageIndex > 0)
                      ? 'aspect-[9/16] w-full max-w-[240px] h-auto md:max-w-none md:h-[55vh] md:w-[31vh] mx-auto'
                      : 'aspect-[16/10] w-full'
                  }`}>
                    <img
                      src={(selectedProject.images && selectedProject.images[activeImageIndex]) || selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain cursor-zoom-in"
                      onClick={() => setLightboxImage((selectedProject.images && selectedProject.images[activeImageIndex]) || selectedProject.image)}
                    />
                    
                    {/* Left/Right Navigation Arrows if there are multiple images */}
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={() => {
                            const startIdx = (isMobile && selectedProject.id === 'enamel') ? 1 : 0;
                            setActiveImageIndex((prev) => (prev <= startIdx ? selectedProject.images.length - 1 : prev - 1));
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark/80 backdrop-blur-sm text-light/80 hover:text-light flex items-center justify-center hover:bg-primary transition-all border border-light/10 cursor-pointer"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={() => {
                            const startIdx = (isMobile && selectedProject.id === 'enamel') ? 1 : 0;
                            setActiveImageIndex((prev) => (prev === selectedProject.images.length - 1 ? startIdx : prev + 1));
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark/80 backdrop-blur-sm text-light/80 hover:text-light flex items-center justify-center hover:bg-primary transition-all border border-light/10 cursor-pointer"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2 w-full max-w-full">
                      {selectedProject.images.map((img, idx) => {
                        if (isMobile && selectedProject.id === 'enamel' && idx === 0) return null;
                        return (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`w-14 md:w-20 ${selectedProject.id === 'enamel' ? 'aspect-[9/16]' : 'aspect-[16/10]'} rounded-lg overflow-hidden border-2 transition-all relative shrink-0 cursor-pointer ${
                              activeImageIndex === idx ? 'border-primary' : 'border-light/10 hover:border-light/30'
                            }`}
                          >
                            <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Right Side - Long Description & Features */}
                <div className="space-y-5 md:space-y-6 order-2 lg:order-2 w-full min-w-0">
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-light/50">Overview</h4>
                    <p className="text-light/70 text-sm md:text-base font-light leading-relaxed">
                      {selectedProject.longDesc || selectedProject.desc}
                    </p>
                  </div>

                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="space-y-2 md:space-y-3">
                      <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-light/50">Key Features</h4>
                      <ul className="grid md:grid-cols-2 lg:grid-cols-1 gap-3">
                        {selectedProject.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-3 text-sm text-light/80 font-light">
                            <span className="text-primary mt-0.5 shrink-0">
                              <Check size={16} strokeWidth={2.5} />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Links in Modal */}
                  <div className="hidden md:flex flex-wrap gap-4 pt-4 border-t border-light/5">
                    {selectedProject.github && selectedProject.github !== "#" && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-light/5 border border-light/10 text-light text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-light/10 hover:border-primary transition-all duration-300"
                      >
                        <Github size={14} />
                        GitHub Code
                      </a>
                    )}
                    {selectedProject.link && selectedProject.link !== "#" && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-[0_4px_15px_rgba(99,102,241,0.2)]"
                      >
                        <Globe size={14} />
                        Live Website
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Lightbox Modal */}
      {lightboxImage && createPortal(
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          style={{ zIndex: 10000 }}
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/10 cursor-pointer"
            style={{ zIndex: 10001 }}
          >
            <X size={20} />
          </button>
          <img
            src={lightboxImage}
            alt="Full size preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>,
        document.body
      )}
    </section>
  )
}

export default Projects
