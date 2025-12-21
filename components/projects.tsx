"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GitlabIcon as GitHub, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  category: string
  image?: string
  client?: string
  industry?: string
  slug?: string
  accentColor?: string
}

// Product Management Projects
const productProjects: Project[] = [
  {
    id: 1,
    title: "Uber Commuter - Concept Study",
    description: "Redefining Urban Mobility for Daily Riders through a strategic subscription model.",
    tags: ["Product Strategy", "Subscription", "MaaS"],
    category: "Product Management",
    image: "/products/uber/uber.png",
    client: "Uber (I wish)",
    industry: "Transportation",
    slug: "uber-commuter",
    accentColor: "#06c167"
  },
  {
    id: 2,
    title: "Airbnb CoSpace - Strategic Pivot",
    description: "Unlocking the potential of residential real estate for hybrid workers.",
    tags: ["Market Expansion", "B2B", "Hybrid Work"],
    category: "Product Management",
    image: "/products/airbnb/airbnb.png",
    client: "Airbnb (I wish)",
    industry: "Real Estate / Tech",
    slug: "airbnb-cospace",
    accentColor: "#ff5b61"
  },
  {
    id: 3,
    title: "Talkform AI - Product Strategy",
    description: "Leveraging LLMs to revolutionize qualitative user research at scale.",
    tags: ["AI/ML", "B2B SaaS", "User Research"],
    category: "Product Management",
    image: "/products/Talkform/Talkform.png",
    client: "Talkform AI",
    industry: "Market Research",
    slug: "talkform-ai",
    accentColor: "#8668ED" // Placeholder for Talkform
  },
]

// Software Development Projects
const softwareProjects: Project[] = [
  {
    id: 5,
    title: "Resume Ranking System",
    description: "Automated resume ranking with BERT embeddings and OpenAI API",
    tags: ["FastAPI", "BERT", "Docker", "Kubernetes"],
    github: "https://github.com/Raamizkn/Resume-Ranker",
    category: "Software"
  },
  {
    id: 6,
    title: "AWS Cloud Simulator",
    description: "LocalStack-based AWS environment with serverless Lambda functions",
    tags: ["Python", "AWS", "Lambda", "Docker"],
    github: "https://github.com/Raamizkn/AWS-Sim",
    category: "Software"
  },
  {
    id: 7,
    title: "Network Compliance Auditor",
    description: "Tool for auditing network configurations against compliance policies",
    tags: ["Python", "SSH", "Security", "Automation"],
    github: "https://github.com/Raamizkn/network",
    category: "Software"
  },
  {
    id: 8,
    title: "Page Master Extension",
    description: "AI-powered Chrome extension for page analysis and summarization",
    tags: ["JavaScript", "Chrome", "Gemini API"],
    github: "https://github.com/Raamizkn/page-master",
    category: "Software"
  },
  {
    id: 9,
    title: "Chat Application",
    description: "RESTful chat system with group messaging and user management",
    tags: ["PHP", "Slim", "SQLite", "REST"],
    github: "https://github.com/Raamizkn/chat-app",
    category: "Software"
  },
  {
    id: 10,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce with order tracking and wishlist",
    tags: ["PHP", "MySQL", "E-Commerce"],
    github: "https://github.com/Raamizkn/ecommerce-platform",
    category: "Software"
  },
]

// Project Card Component
const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  
  if (project.category === "Product Management") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden rounded-3xl mb-4 bg-gray-100 dark:bg-gray-800">
          {project.image && (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          
          {/* Arrow Button inside image */}
          <div className="absolute bottom-6 left-6">
            <motion.div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5 text-black" />
            </motion.div>
          </div>
        </div>
        
        <div className="space-y-1 px-2">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-light">
            {project.client}
          </p>
          <h3 className="text-xl md:text-2xl font-normal text-gray-900 dark:text-white leading-tight">
            {project.title}
          </h3>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        backgroundColor: '#8668ED',
        aspectRatio: '16/10',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%)',
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        {/* Title */}
        <div>
          <h3 className="text-2xl md:text-3xl font-light text-white leading-tight mb-2">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm font-light line-clamp-2">
            {project.description}
          </p>
        </div>
        
        {/* Bottom Info */}
        <div className="flex items-center justify-between">
          <span className="text-white/70 text-sm font-light">
            {project.tags[0]}
          </span>
          {project.github && (
            <motion.button
              className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.github, '_blank')
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHub className="w-4 h-4 text-white" />
            </motion.button>
          )}
        </div>
      </div>
      
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative bg-white dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
                {project.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <Button
                className="w-full text-white font-normal transition-all duration-300 shadow-lg hover:opacity-90"
                style={{ backgroundColor: '#8668ED' }}
                onClick={() => window.open(project.github, '_blank')}
              >
                <GitHub className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'product' | 'software'>('product')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tabs = [
    { id: 'product' as const, label: 'Product Management', count: productProjects.length },
    { id: 'software' as const, label: 'Software Development', count: softwareProjects.length }
  ]

  const handleProjectClick = (project: Project) => {
    if (project.category === "Product Management" && project.slug) {
      window.location.href = `/case-studies/${project.slug}`
      return
    }
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="py-12 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/20 dark:from-purple-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">My </span>
            <span style={{ color: '#8668ED' }}>Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of my recent work, <span className="text-gray-500 dark:text-gray-600">showcasing my relevant skills and experience.</span>
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-full p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-8 py-3 rounded-full transition-all duration-300"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: '#8668ED' }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 font-light transition-colors duration-300 ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(activeTab === 'product' ? productProjects : softwareProjects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard 
                  project={project} 
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}
