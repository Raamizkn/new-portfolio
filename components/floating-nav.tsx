"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Home, 
  FolderOpen, 
  Code, 
  Briefcase, 
  Award, 
  Mail, 
  Menu, 
  X 
} from "lucide-react"

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  section: string
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: <Home className="w-4 h-4" />, section: "hero" },
  { id: "projects", label: "Projects", icon: <FolderOpen className="w-4 h-4" />, section: "projects" },
  { id: "skills", label: "Skills", icon: <Code className="w-4 h-4" />, section: "skills" },
  { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" />, section: "experience" },
  { id: "certifications", label: "Certifications", icon: <Award className="w-4 h-4" />, section: "certifications" },
  { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" />, section: "contact" },
]

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.section)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Special handling for hero section (scroll to top)
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    setIsOpen(false)
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-800/90 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-gray-300" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-5 h-5 text-gray-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.2, type: "spring", damping: 20 }}
            className="absolute right-16 top-0 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl overflow-hidden min-w-[200px]"
          >
            <div className="p-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.section)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                    activeSection === item.section
                      ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  <span className={`transition-colors duration-200 ${
                    activeSection === item.section ? "text-purple-400" : "text-gray-400"
                  }`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.section && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 bg-purple-400 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 