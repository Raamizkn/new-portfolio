"use client"

import { useState, useEffect } from "react"
import { GitlabIcon as GitHub, Linkedin, FileText, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Raamiz Khan Niazi
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">AI and DevOps Engineer</h2>

        <div className="space-y-4 mb-8">
          <p className="text-gray-400 leading-relaxed">
            I'm a versatile computer science student. Passionate about AI, machine learning, cloud computing, and
            software development, I thrive on solving real-world challenges and building innovative, tech-driven
            solutions across diverse domains.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <motion.a
            href="https://github.com/Raamizkn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <GitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/raamiz-khan-niazi-b77a43233/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FileText className="h-5 w-5" />
            <span className="sr-only">Resume</span>
          </motion.a>
        </div>

        <Button
          className="bg-purple-600 text-white hover:bg-white hover:text-purple-600 transition-colors"
          onClick={() => {
            const projectsSection = document.getElementById("projects")
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }}
        >
          View My Work
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="h-6 w-6 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  )
}

