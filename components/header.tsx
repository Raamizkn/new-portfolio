"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/#hero" },
  { name: "Projects", href: "/#projects", isDropdown: true },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
]

const productProjects = [
  { name: "Uber Commuter", slug: "uber-commuter", client: "Uber" },
  { name: "Airbnb CoSpace", slug: "airbnb-cospace", client: "Airbnb" },
  { name: "TalkForm", slug: "talkform", client: "AI / Productivity" },
  { name: "Zoom Marketplace", slug: "zoom-marketplace", client: "Zoom" },
  { name: "AltVoice.ai", slug: "altvoice", client: "AI / HR Tech" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/", "")
      const element = document.querySelector(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        window.location.href = href
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-gray-200 dark:border-gray-800/50"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 sm:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white"
          >
            RKN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 items-center font-normal">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.isDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.isDropdown && setIsDropdownOpen(false)}
              >
                {item.isDropdown ? (
                  <button
                    className="flex items-center gap-1 text-[15px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("/#")) {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }
                    }}
                    className="text-[15px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </a>
                )}

                {item.isDropdown && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50"
                      >
                        <div className="bg-white dark:bg-gray-900 rounded-[24px] shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden backdrop-blur-xl p-2">
                          {productProjects.map((project) => (
                            <Link
                              key={project.slug}
                              href={`/case-studies/${project.slug}`}
                              className="flex flex-col gap-0.5 px-4 py-3 rounded-[16px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                            >
                              <span className="text-[14px] font-medium text-gray-900 dark:text-white group-hover:text-[#059669] transition-colors">
                                {project.name}
                              </span>
                              <span className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
                                {project.client}
                              </span>
                            </Link>
                          ))}
                          <div className="border-t border-gray-50 dark:border-white/5 mt-2 pt-2">
                            <button
                              onClick={() => scrollToSection("/#projects")}
                              className="w-full text-left px-4 py-3 rounded-[16px] text-[13px] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                            >
                              View all projects
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-gray-800">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}

              <button
                onClick={() => scrollToSection("/#contact")}
                className="px-7 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-[15px] font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-700 dark:text-gray-300"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[88px] left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/50 max-h-[calc(100vh-88px)] overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  {item.isDropdown ? (
                    <>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-xl font-normal py-2"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 flex flex-col gap-4 pb-2"
                          >
                            {productProjects.map((project) => (
                              <Link
                                key={project.slug}
                                href={`/case-studies/${project.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex flex-col gap-0.5 group"
                              >
                                <span className="text-lg font-medium text-gray-900 dark:text-white">
                                  {project.name}
                                </span>
                                <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
                                  {project.client}
                                </span>
                              </Link>
                            ))}
                            <button
                              onClick={() => {
                                scrollToSection("/#projects")
                                setIsMobileMenuOpen(false)
                              }}
                              className="text-left text-sm text-gray-500 dark:text-gray-400 font-medium pt-2"
                            >
                              View all projects →
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("/#")) {
                          e.preventDefault()
                          scrollToSection(item.href)
                        }
                      }}
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-xl font-normal py-2 block"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection("/#contact")}
                  className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-medium"
                >
                  Get in touch
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
