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
    client: "Uber ",
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
    client: "Airbnb ",
    industry: "Real Estate / Tech",
    slug: "airbnb-cospace",
    accentColor: "#ff5b61"
  },
  {
    id: 3,
    title: "TalkForm - Conversational Form filling",
    description: "Transforming mobile data entry through strategic LLM-powered interfaces.",
    tags: ["Voice AI", "HCI", "Product Strategy"],
    category: "Product Management",
    image: "/products/Talkform/Talkform.png",
    client: "TalkForm ",
    industry: "AI / Productivity",
    slug: "talkform",
    accentColor: "#1e8a51"
  },
  {
    id: 4,
    title: "Zoom Hybrid Event Marketplace",
    description: "Strategic expansion from a communication utility to a two-sided network marketplace.",
    tags: ["Marketplace", "SaaS Strategy", "GMV"],
    category: "Product Management",
    image: "/products/zoom/zoom.png",
    client: "Zoom ",
    industry: "Enterprise SaaS",
    slug: "zoom-marketplace",
    accentColor: "#2D8CFF"
  },
  {
    id: 5,
    title: "AltVoice.ai - Mock Interviews",
    description: "High-fidelity AI role simulation for specialized technical and GTM positions.",
    tags: ["GenAI", "Sales Enablement", "EdTech"],
    category: "Product Management",
    image: "/products/altvoice/altvoice.png",
    client: "AltVoice.ai",
    industry: "AI / HR Tech",
    slug: "altvoice",
    accentColor: "#0b4031"
  }
]

// Software Development Projects
const softwareProjects: Project[] = [
  {
    id: 11,
    title: "WitchCraft",
    description: "ATS-friendly resume management tool with drag-and-drop builder and template library.",
    tags: ["React", "Node.js", "MongoDB", "ATS"],
    github: "https://github.com/Raamizkn/witchcraft",
    category: "Software"
  },
  {
    id: 12,
    title: "Creative Spark Agent",
    description: "AI-powered idea generation tool leveraging IBM watsonx.ai and Granite models.",
    tags: ["Python", "IBM watsonx", "LLM", "GenAI"],
    github: "https://github.com/Raamizkn/IBM",
    category: "Software"
  },
  {
    id: 13,
    title: "Weather ETL Pipeline",
    description: "Automated weather data pipeline with Airflow DAGs, data quality checks, and SQL analysis.",
    tags: ["Python", "Airflow", "ETL", "SQLite"],
    github: "https://github.com/Raamizkn/Weather-DAG-Pipeline",
    category: "Software"
  },
  {
    id: 14,
    title: "RAG PDF Assistant",
    description: "Advanced PDF research assistant using RAG for multi-document knowledge retrieval.",
    tags: ["Python", "FastAPI", "LangChain", "ChromaDB"],
    github: "https://github.com/Raamizkn/RAGpdf",
    category: "Software"
  },
  {
    id: 15,
    title: "Referral App",
    description: "Scalable referral management system for tracking and rewarding user acquisitions.",
    tags: ["Next.js", "PostgreSQL", "Referral API"],
    github: "https://github.com/Raamizkn/referralapp",
    category: "Software"
  },
  {
    id: 16,
    title: "XLM Model",
    description: "Implementation and fine-tuning of Cross-lingual Language Models for multilingual tasks.",
    tags: ["PyTorch", "NLP", "Transformers", "XLM"],
    github: "https://github.com/Raamizkn/xlm",
    category: "Software"
  },
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
  }
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
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-6 bg-white/5 border border-white/10">
          {project.image && (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          
          {/* Arrow Button inside image */}
          <div className="absolute bottom-8 left-8">
            <motion.div
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-6 h-6 text-black" />
            </motion.div>
          </div>
        </div>
        
        <div className="space-y-2 px-2">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            {project.client}
          </p>
          <h3 className="text-2xl font-light text-white leading-tight tracking-tight group-hover:text-[#059669] transition-colors">
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
      className="relative w-full rounded-[32px] overflow-hidden cursor-pointer group border border-white/5"
      style={{
        backgroundColor: '#111111',
        aspectRatio: '4/5',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
        {/* Title */}
        <div>
          <h3 className="text-3xl md:text-4xl font-light text-white leading-tight mb-4 tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-400 text-base font-light line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {/* Bottom Info */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                {tag}
              </span>
            ))}
          </div>
          {project.github && (
            <motion.button
              className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.github, '_blank')
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHub className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </div>
      
      {/* Hover gradient light */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(circle at center, rgba(5, 150, 105, 0.15) 0%, transparent 70%)`
        }}
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
                style={{ backgroundColor: '#059669' }}
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
    <section id="projects" className="py-24 px-4 md:px-8 relative overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight">
            Selected <span style={{ color: '#059669' }}>Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            A curated collection of product strategies and software engineering projects.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-8 py-3 rounded-full transition-all duration-300"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab.id 
                    ? 'text-black' 
                    : 'text-gray-400 hover:text-white'
                }`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid / Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={activeTab === 'software' 
              ? "flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory no-scrollbar -mx-4 md:-mx-8 px-4 md:px-8 cursor-grab active:cursor-grabbing" 
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}
          >
            {(activeTab === 'product' ? productProjects : softwareProjects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={activeTab === 'software' ? "min-w-[300px] md:min-w-[400px] snap-start" : ""}
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
