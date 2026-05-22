import React from 'react'
import { motion } from 'framer-motion'
import { X, Printer, Phone, Briefcase, GraduationCap, Code, Heart, Award } from 'lucide-react'
import { Github, Linkedin, Mail } from './SocialIcons'

const ResumeModal = ({ isOpen, onClose }) => {
  console.log('ResumeModal rendering, isOpen:', isOpen);
  if (!isOpen) return null

  const handlePrint = () => {
    console.log('Printing resume...');
    window.print()
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="relative w-full max-w-4xl bg-dark/40 border border-light/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
    >
      {/* Sticky Control Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-light/10 bg-dark/70 backdrop-blur-md z-20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <h2 className="text-light text-sm font-semibold tracking-wider font-outfit uppercase">Interactive Resume</h2>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] cursor-pointer"
          >
            <Printer size={15} />
            <span>Print / Save PDF</span>
          </button>
          <button 
            onClick={onClose}
            className="p-2 text-light/50 hover:text-light hover:bg-light/10 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Resume Content */}
      <div className="overflow-y-auto p-6 md:p-12 flex-1 scrollbar-thin scrollbar-thumb-light/10">
        
        {/* Printable Resume Sheet */}
        <div 
          id="resume-print-area" 
          className="w-full bg-dark/30 border border-light/5 p-8 md:p-12 rounded-2xl text-light/90 print:bg-white print:text-slate-800 print:p-0 print:border-none print:shadow-none"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 border-b border-light/10 pb-8 mb-8 print:border-slate-300 print:pb-4 print:mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-light mb-2 print:text-slate-900 print:text-2xl print:mb-1">
                POOJA MANDALE
              </h1>
              <p className="text-primary font-outfit text-sm md:text-base font-semibold tracking-widest uppercase print:text-indigo-600 print:text-xs">
                Full Stack MERN & React Native Developer
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 text-xs md:text-sm font-light text-light/70 print:text-slate-600 print:grid-cols-2 print:gap-1">
              <a href="tel:+917823862225" className="flex items-center gap-2 hover:text-primary transition-colors print:hover:text-slate-600">
                <Phone size={14} className="text-primary/70 print:text-indigo-600" />
                <span>+91 7823862225</span>
              </a>
              <a href="mailto:mandalepooja669@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors print:hover:text-slate-600">
                <Mail size={14} className="text-primary/70 print:text-indigo-600" />
                <span>mandalepooja669@gmail.com</span>
              </a>
              <a href="https://github.com/pooja-mandale" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors print:hover:text-slate-600">
                <Github size={14} className="text-primary/70 print:text-indigo-600" />
                <span>github.com/pooja-mandale</span>
              </a>
              <a href="https://linkedin.com/in/pooja-mandale-abb484399/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors print:hover:text-slate-600">
                <Linkedin size={14} className="text-primary/70 print:text-indigo-600" />
                <span>linkedin.com/in/pooja-mandale-abb484399/</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8 print:mb-4">
            <h3 className="text-lg font-outfit font-semibold tracking-wider text-light mb-3 flex items-center gap-2 print:text-slate-900 print:text-sm print:mb-1.5">
              <Heart size={16} className="text-primary/70 print:text-indigo-600" />
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-light/80 text-sm leading-relaxed font-light print:text-slate-700 print:text-xs">
              Dedicated Full Stack Developer specializing in the MERN stack and React Native with hands-on experience in scalable web and mobile application development. Skilled in designing intuitive UI, secure backend systems, RESTful APIs, and cross-platform mobile solutions. Passionate about delivering clean architecture, high-performance applications, and seamless user experiences.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-8 print:mb-4">
            <h3 className="text-lg font-outfit font-semibold tracking-wider text-light mb-3 flex items-center gap-2 print:text-slate-900 print:text-sm print:mb-2">
              <Code size={16} className="text-primary/70 print:text-indigo-600" />
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
              {[
                { category: "Frontend", skills: "React.js, React Native, TypeScript, JavaScript (ES6+), Tailwind CSS" },
                { category: "Backend", skills: "Node.js, Express.js, MongoDB, Mongoose, REST APIs" },
                { category: "State Management", skills: "Redux Toolkit, RTK Query, Context API" },
                { category: "Mobile & Cloud", skills: "Expo, Firebase Cloud Messaging, Native Modules" },
                { category: "Tools & DevOps", skills: "Git, GitHub, Postman, VS Code, Hostinger VPS, Vercel" }
              ].map((item, idx) => (
                <div key={idx} className="bg-light/5 p-3.5 rounded-xl border border-light/5 print:bg-slate-50 print:border-slate-100 print:p-2.5 print:rounded-lg">
                  <h4 className="text-primary font-medium text-xs tracking-wider uppercase mb-1.5 print:text-indigo-600">
                    {item.category}
                  </h4>
                  <p className="text-light/70 text-xs font-light leading-relaxed print:text-slate-700">
                    {item.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-8 print:mb-4 print-avoid-break">
            <h3 className="text-lg font-outfit font-semibold tracking-wider text-light mb-4 flex items-center gap-2 print:text-slate-900 print:text-sm print:mb-2">
              <Briefcase size={16} className="text-primary/70 print:text-indigo-600" />
              PROFESSIONAL EXPERIENCE
            </h3>
            <div className="space-y-6 print:space-y-3">
              {/* Job 1 */}
              <div className="relative pl-6 border-l border-primary/20 print:border-indigo-200">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-primary -left-[6px] top-1.5 print:bg-indigo-600" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2 print:mb-1">
                  <h4 className="text-light font-medium text-sm md:text-base print:text-slate-800 print:text-xs">
                    Full Stack Developer <span className="text-primary font-light print:text-indigo-600">| Arkraz Technology</span>
                  </h4>
                  <span className="text-xs text-light/40 uppercase tracking-wider print:text-slate-500 font-mono">
                    Present • Last 6 Months
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-light/70 font-light print:text-slate-600 print:space-y-0.5">
                  <li>Developing scalable MERN stack and React Native applications with modern UI/UX principles.</li>
                  <li>Building reusable APIs, optimizing backend performance, and integrating secure authentication systems.</li>
                  <li>Collaborating with teams to deliver responsive web and mobile applications with clean architecture.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="relative pl-6 border-l border-primary/20 print:border-indigo-200">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-primary -left-[6px] top-1.5 print:bg-indigo-600" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2 print:mb-1">
                  <h4 className="text-light font-medium text-sm md:text-base print:text-slate-800 print:text-xs">
                    Full Stack Developer <span className="text-primary font-light print:text-indigo-600">| Indux Solar</span>
                  </h4>
                  <span className="text-xs text-light/40 uppercase tracking-wider print:text-slate-500 font-mono">
                    3 Months
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-light/70 font-light print:text-slate-600 print:space-y-0.5">
                  <li>Developed and maintained Clinic Management and Visitor Management systems using MERN stack technologies.</li>
                  <li>Designed reusable UI components and optimized REST APIs for better performance and scalability.</li>
                  <li>Participated in debugging, testing, and feature enhancement in agile development environments.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-8 print:mb-4 print-avoid-break">
            <h3 className="text-lg font-outfit font-semibold tracking-wider text-light mb-4 flex items-center gap-2 print:text-slate-900 print:text-sm print:mb-2">
              <Award size={16} className="text-primary/70 print:text-indigo-600" />
              KEY PROJECTS
            </h3>
            <div className="space-y-5 print:space-y-2.5">
              {/* Project 1 */}
              <div className="p-4 rounded-xl bg-light/5 border border-light/5 print:bg-transparent print:p-0 print:border-none">
                <div className="flex justify-between items-center mb-1.5">
                  <h4 className="text-light font-semibold text-xs md:text-sm print:text-slate-800">
                    Enamel – Education Management Platform
                  </h4>
                  <span className="text-[10px] bg-primary/20 text-primary px-2.5 py-0.5 rounded-full font-mono print:bg-indigo-50 print:text-indigo-600">
                    React Native, MongoDB, Node.js, JS
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-light/70 font-light print:text-slate-600 print:space-y-0.5">
                  <li>Developed a NEET preparation mobile application with secure content delivery and screen-recording protection.</li>
                  <li>Implemented Marathi localization support, subscription management, authentication, and automated notifications.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-xl bg-light/5 border border-light/5 print:bg-transparent print:p-0 print:border-none">
                <div className="flex justify-between items-center mb-1.5">
                  <h4 className="text-light font-semibold text-xs md:text-sm print:text-slate-800">
                    ODSP – On-Demand Service Platform
                  </h4>
                  <span className="text-[10px] bg-primary/20 text-primary px-2.5 py-0.5 rounded-full font-mono print:bg-indigo-50 print:text-indigo-600">
                    MERN Stack
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-light/70 font-light print:text-slate-600 print:space-y-0.5">
                  <li>Built a service marketplace connecting customers, professionals, and agencies with role-based management systems.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="p-4 rounded-xl bg-light/5 border border-light/5 print:bg-transparent print:p-0 print:border-none">
                <div className="flex justify-between items-center mb-1.5">
                  <h4 className="text-light font-semibold text-xs md:text-sm print:text-slate-800">
                    Job Portal Platform
                  </h4>
                  <span className="text-[10px] bg-primary/20 text-primary px-2.5 py-0.5 rounded-full font-mono print:bg-indigo-50 print:text-indigo-600">
                    MERN Stack
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-light/70 font-light print:text-slate-600 print:space-y-0.5">
                  <li>Developed a full-featured recruitment platform with smart job filtering, employer dashboards, and employee application tracking.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="print-avoid-break">
            <h3 className="text-lg font-outfit font-semibold tracking-wider text-light mb-3 flex items-center gap-2 print:text-slate-900 print:text-sm print:mb-1.5">
              <GraduationCap size={18} className="text-primary/70 print:text-indigo-600" />
              EDUCATION
            </h3>
            <div className="relative pl-6 border-l border-primary/20 print:border-indigo-200">
              <div className="absolute w-2.5 h-2.5 rounded-full bg-primary -left-[6px] top-1.5 print:bg-indigo-600" />
              <div className="flex justify-between items-center mb-1.5">
                <h4 className="text-light font-medium text-xs md:text-sm print:text-slate-800">
                  Bachelor of Commerce (B.Com)
                </h4>
                <span className="text-xs text-light/40 uppercase tracking-wider print:text-slate-500 font-mono">
                  2022 – 2026
                </span>
              </div>
              <p className="text-light/70 text-xs font-light leading-relaxed print:text-slate-600">
                Focused on software development, modern web technologies, and practical MERN & React Native application development.
              </p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default ResumeModal


