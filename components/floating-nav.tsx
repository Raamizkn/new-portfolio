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
  name: string
  icon: typeof Home
  section: string
}

const navItems: NavItem[] = [
  { id: "home", name: "Home", icon: Home, section: "hero" },
  { id: "projects", name: "Projects", icon: FolderOpen, section: "projects" },
  { id: "skills", name: "Skills", icon: Code, section: "skills" },
  { id: "experience", name: "Experience", icon: Briefcase, section: "experience" },
  { id: "certifications", name: "Certifications", icon: Award, section: "certifications" },
  { id: "contact", name: "Contact", icon: Mail, section: "contact" },
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
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-100/90 dark:hover:bg-gray-800/90 transition-colors duration-200"
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
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
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
            className="absolute right-16 top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden min-w-[200px]"
            style={{ border: '1px solid rgba(134, 104, 237, 0.2)' }}
          >
            <div className="p-3 space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.section
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.section)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-left text-gray-700 dark:text-gray-300 relative overflow-hidden group"
                    style={isActive ? { 
                      backgroundColor: '#8668ED',
                      color: 'white'
                    } : undefined}
                  >
                    {!isActive && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ transform: 'translateX(-100%)', animation: 'shimmer 2s infinite' }}
                      />
                    )}
                    <item.icon className="w-4 h-4 relative z-10" />
                    <span className="font-light text-sm relative z-10">{item.name}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
