import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, ArrowRight, User, FileText, MessageSquare } from 'lucide-react'

const WhatsappIcon = ({ size = 24, strokeWidth = 1.5, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.5c0 5.25-4.25 9.5-9.5 9.5a9.4 9.4 0 0 1-4.8-1.3L3 21l1.3-4.7A9.4 9.4 0 0 1 3 11.5C3 6.25 7.25 2 12.5 2c5.25 0 9.5 4.25 9.5 9.5z" />
    <path d="M9 9c.5 1.5 1.5 2.5 3 3" />
    <path d="M8.5 7.5c.3 0 .6.2.7.5.1.3 0 .6-.2.8l-.5.5c.6 1.2 1.3 1.9 2.5 2.5l.5-.5c.2-.2.5-.3.8-.2.3.1.5.4.5.7v.8c0 .5-.4.9-.9.9-3.3 0-6-2.7-6-6 0-.5.4-.9.9-.9h.7z" />
  </svg>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const phoneNumber = "917823862225"
    const textMessage = `*New Portfolio Message*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`
    
    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`
    
    // Open immediately in a new tab synchronously to bypass browser popup blockers
    window.open(whatsappUrl, '_blank')
    
    // Transition UI state
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-32 relative bg-transparent border-t border-light/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Details */}
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-normal text-light mb-6"
            >
              Let's create something <br className="hidden md:block" /> extraordinary.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-light/70 text-base md:text-lg font-light leading-relaxed mb-12"
            >
              Have a project in mind, or just want to say hi? I'm currently open to new opportunities and collaborations.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'mandalepooja669@gmail.com', href: 'mailto:mandalepooja669@gmail.com', desc: 'Send an email for official inquiries' },
                { icon: WhatsappIcon, label: 'WhatsApp', value: '+91 7823862225', href: 'https://wa.me/917823862225', desc: 'Chat directly for quick responses' },
                { icon: MapPin, label: 'Location', value: 'Chhatrapati Sambhajinagar, India', href: '#', desc: 'Available for remote & hybrid roles' }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href !== '#' ? '_blank' : undefined}
                  rel={item.href !== '#' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex items-center gap-6 p-5 rounded-2xl glass-card border border-light/5 hover:border-primary/30 transition-all duration-300 group block cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-light/5 text-light/40 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 shrink-0">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-light/40 group-hover:text-primary/70 transition-colors">{item.label}</p>
                      {item.href !== '#' && (
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                      )}
                    </div>
                    <p className="text-base font-semibold text-light mb-0.5 truncate">{item.value}</p>
                    <p className="text-xs text-light/50 font-light truncate">{item.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full glass-card p-8 md:p-10 rounded-3xl shadow-lg border border-light/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-light/60 group-focus-within:text-primary transition-colors duration-300 ml-1">Name</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-light/40 group-focus-within:text-primary group-focus-within:scale-110 transition-all duration-300 pointer-events-none">
                      <User size={18} strokeWidth={1.5} />
                    </span>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-light/5 border border-light/10 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:bg-light/10 hover:border-light/20 transition-all text-base text-light placeholder-light/35 font-light"
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-light/60 group-focus-within:text-primary transition-colors duration-300 ml-1">Email</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-light/40 group-focus-within:text-primary group-focus-within:scale-110 transition-all duration-300 pointer-events-none">
                      <Mail size={18} strokeWidth={1.5} />
                    </span>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-light/5 border border-light/10 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:bg-light/10 hover:border-light/20 transition-all text-base text-light placeholder-light/35 font-light"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-light/60 group-focus-within:text-primary transition-colors duration-300 ml-1">Subject</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-light/40 group-focus-within:text-primary group-focus-within:scale-110 transition-all duration-300 pointer-events-none">
                    <FileText size={18} strokeWidth={1.5} />
                  </span>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-light/5 border border-light/10 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:bg-light/10 hover:border-light/20 transition-all text-base text-light placeholder-light/35 font-light"
                  />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-light/60 group-focus-within:text-primary transition-colors duration-300 ml-1">Message</label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-light/40 group-focus-within:text-primary group-focus-within:scale-110 transition-all duration-300 pointer-events-none">
                    <MessageSquare size={18} strokeWidth={1.5} />
                  </span>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full bg-light/5 border border-light/10 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:bg-light/10 hover:border-light/20 transition-all resize-none text-base text-light placeholder-light/35 font-light"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="mt-6 bg-gradient-to-r from-primary via-secondary to-accent text-white text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-95 transition-all duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_25px_rgba(168,85,247,0.4)] flex items-center gap-3 w-fit cursor-pointer hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Opening WhatsApp...
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : isSuccess ? (
                  <>
                    Redirected!
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2" />
    </section>
  )
}

export default Contact

