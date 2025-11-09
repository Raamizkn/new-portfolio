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
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 relative overflow-hidden pt-20">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      
      {/* Minimal floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-8"
        >

          {/* Main Heading */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight"
            >
              <span className="text-gray-900 dark:text-white">Hello, I'm </span>
              <span style={{ color: '#8668ED' }}>Raamiz Khan</span>
              <br />
              <span className="text-gray-500 dark:text-gray-600">Product & AI</span>
              <br />
              <span className="text-gray-500 dark:text-gray-600">Consultant</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Specializing in AI-driven product development and automation. I design intelligent solutions 
            that streamline workflows, enhance user experiences, and drive measurable business outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="text-white font-normal px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: '#8668ED' }}
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-normal px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent hover:bg-opacity-5"
              style={{ borderColor: '#8668ED' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8668ED10'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-4 pt-8"
          >
            <motion.a
              href="https://github.com/Raamizkn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800/80 transition-all duration-300"
              style={{ '--hover-border-color': '#8668ED80' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8668ED80'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <GitHub className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <span className="sr-only">GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/raamiz-khan-niazi-b77a43233/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800/80 transition-all duration-300"
              style={{ '--hover-border-color': '#8668ED80' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8668ED80'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800/80 transition-all duration-300"
              style={{ '--hover-border-color': '#8668ED80' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8668ED80'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <FileText className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <span className="sr-only">Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
