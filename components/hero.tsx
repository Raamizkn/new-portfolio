"use client"

import { useState, useEffect } from "react"
import { GitlabIcon as GitHub, Linkedin, FileText, ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 md:px-8 relative overflow-hidden pt-20">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl md:text-8xl font-medium tracking-tight leading-tight text-gray-900 dark:text-white"
              >
                Hello, I am <br />
                <span style={{ color: '#059669' }}>Raamiz Khan Niazi</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-0.5 w-full bg-gray-200 dark:bg-white/10"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light leading-relaxed"
              >
                AI Product Manager + <br />
                Consultant
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-[#059669] dark:hover:text-[#059669] transition-colors duration-300 flex items-center gap-2 group"
              >
                View My Portfolio
                <div className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-6 pt-8"
            >
              <a href="https://github.com/Raamizkn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <GitHub className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/raamiz-khan-niazi-b77a43233/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="/resume.pdf" download className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FileText className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] relative rounded-[48px] md:rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl">
              <img 
                src="/headshot.jpeg" 
                alt="Raamiz Khan Niazi" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                rotate: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
