"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GitlabIcon as GitHub, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
}

// AI & Machine Learning Projects
const aiProjects: Project[] = [
  {
    id: 1,
    title: "Customer Churn Prediction System",
    description: "Built a full-stack system that predicts customer churn using ML algorithms (Logistic Regression, Random Forest, XGBoost) and suggests retention strategies. Served via a Flask API with a React (TypeScript) frontend and integrated data pipeline for real-time predictions.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Flask", "React", "TypeScript", "Machine Learning", "XGBoost"],
    github: "https://github.com/Raamizkn/churn-prediction",
  },
  {
    id: 2,
    title: "AI-Driven IoT Management System",
    description: "An IoT management system using machine learning for predictive maintenance and anomaly detection. Features real-time monitoring with Streamlit dashboard and automated alerting for proactive issue resolution.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Machine Learning", "IoT", "Streamlit", "Random Forest"],
    github: "https://github.com/Raamizkn/AI-Iot-Management",
  },
  {
    id: 3,
    title: "PDF Research Assistant (RAG-Powered)",
    description: "An AI-powered research assistant that analyzes multiple PDFs, extracts information, and answers queries using Retrieval-Augmented Generation (RAG). Supports multi-document knowledge retrieval and context-aware responses.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "LLM", "RAG", "NLP", "Streamlit", "Docker"],
    github: "https://github.com/Raamizkn/RAGpdf",
  },
  {
    id: 4,
    title: "Automotive Concept Styler",
    description: "A generative AI system using Stable Diffusion and Python to produce rapid automotive concept images. Built with Streamlit dashboard for live design iteration and user interaction, accelerating concept validation and feedback loops.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Stable Diffusion", "Streamlit", "Machine Learning", "Generative AI"],
    github: "https://github.com/Raamizkn/AI-Automation-Concept-Styler",
  },
  {
    id: 5,
    title: "5G Deployment Analyzer",
    description: "AI-powered system to analyze geographic and demographic data for optimal 5G tower placement, considering factors such as population density and proximity to existing towers.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "AI", "Data Analysis", "Geographic Data", "Demographics"],
    github: "https://github.com/Raamizkn/5GDeployment",
  },
  {
    id: 6,
    title: "Retail Sales & Inventory Forecasting Tool",
    description: "An AI-powered retail demand forecasting system developed in R using ARIMA, Prophet, and LSTM. Automated ETL pipeline, deployed via R Shiny dashboard with actionable inventory planning.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["R", "ARIMA", "Prophet", "LSTM", "Shiny", "ETL"],
    github: "https://github.com/Raamizkn/InventorySales",
  },
  {
    id: 7,
    title: "Creative Spark Agent",
    description: "PoC command-line tool leveraging IBM Granite LLM for creative brainstorming. Delivered quick, AI-generated content ideas tailored to developer, marketer, and writer use-cases using watsonx.ai.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "IBM watsonx.ai", "LLM", "CLI", "Hackathon"],
    github: "https://github.com/Raamizkn/creative-spark",
  },
  {
    id: 8,
    title: "Containerized Threat Detection App",
    description: "A containerized threat detection application deployed using Infrastructure-as-Code (IaC) principles. Built with Python Flask, this web service analyzes text for potential security threats using machine learning.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Flask", "Docker", "Terraform", "IaC", "Security"],
    github: "https://github.com/Raamizkn/ThreatAppIaC",
  }
]

// Software Development Projects
const softwareProjects: Project[] = [
  {
    id: 9,
    title: "Resume Ranking System",
    description: "An automated resume-ranking system using FastAPI, integrating BERT embeddings and OpenAI API. Features keyword-based relevance scoring and containerized deployment with Docker and Kubernetes.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["FastAPI", "BERT", "Docker", "Kubernetes", "OpenAI"],
    github: "https://github.com/Raamizkn/Resume-Ranker",
  },
  {
    id: 10,
    title: "AWS Cloud Simulator with LocalStack",
    description: "A simulated AWS cloud environment using LocalStack to emulate AWS services locally. Includes an S3 bucket that triggers Python Lambda functions for serverless email processing pipelines.",
    image: "/placeholder.svg?height=600&width=800", 
    tags: ["Python", "AWS", "Lambda", "LocalStack", "Serverless", "Docker"],
    github: "https://github.com/Raamizkn/AWS-Sim",
  },
  {
    id: 11,
    title: "SUSurvey",
    description: "A robust web scraping solution using Puppeteer to extract detailed course information from Sabanci University's dynamic catalog, automating the collection of university, required, and elective courses.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Node.js", "Puppeteer", "Web Scraping", "Automation", "Data Collection"],
    github: "https://github.com/Raamizkn/Sabanci-Course-Selection-Site",
  },
  {
    id: 12,
    title: "Network Configuration Compliance Auditor",
    description: "A comprehensive tool for auditing network device configurations against compliance policies. Features secure SSH connections, configuration parsing, and compliance enforcement with detailed reports.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "SSH", "Network Security", "Compliance", "Automation"],
    github: "https://github.com/Raamizkn/network",
  },
  {
    id: 13,
    title: "Parking Status LoRaWAN Sensor",
    description: "A responsive front-end interface for parking status monitoring using HTML, CSS, and JavaScript, featuring live status updates and interactive elements. Achieved 93% user satisfaction among the student-faculty population.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["HTML", "CSS", "JavaScript", "LoRaWAN", "IoT"],
    github: "https://github.com/Raamizkn/ParkingStatus",
  },
  {
    id: 14,
    title: "Chat Application",
    description: "Built a RESTful PHP chat system using the Slim framework and SQLite. Supports user management, group chat, messaging, and group membership with a clean web interface.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["PHP", "Slim", "SQLite", "REST", "Web Development"],
    github: "https://github.com/Raamizkn/chat-app",
  },
  {
    id: 15,
    title: "CS306 E-Commerce Platform",
    description: "Developed a database-backed e-commerce platform using MySQL and PHP. Features included order tracking, wishlist management, product reviews, and dynamic stored procedures/triggers.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["PHP", "MySQL", "E-Commerce", "Database", "Web Development"],
    github: "https://github.com/Raamizkn/ecommerce-platform",
  },
  {
    id: 16,
    title: "Page Master (Chrome Extension)",
    description: "An AI-powered Chrome extension using Gemini API to capture, summarize, and analyze full-page content via screenshots. Features a chatbot interface for Q&A, copy-to-clipboard, and web UI.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "Chrome Extension", "Gemini API", "AI", "Web Development"],
    github: "https://github.com/Raamizkn/page-master",
  },
  {
    id: 17,
    title: "Weather Data ETL Pipeline",
    description: "Engineered an end-to-end ETL pipeline to collect, clean, transform, and analyze Canadian weather data. Used SQLite for storage and SQL queries for insights; final output visualized as reports.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "ETL", "SQLite", "Data Engineering", "Visualization"],
    github: "https://github.com/Raamizkn/weather-etl",
  },
  {
    id: 18,
    title: "VideoDownloader",
    description: "Developed an automated YouTube video downloader in Python, forming the foundation for a future advanced media toolkit.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "YouTube API", "Automation", "Media Processing"],
    github: "https://github.com/Raamizkn/video-downloader",
  },
  {
    id: 19,
    title: "Welcome to Your XLM Project",
    description: "Built a prototype LLM chat interface with model selection capabilities. Enabled seamless switching between LLMs via a customizable chat UI.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "LLM", "Chat Interface", "UI/UX"],
    github: "https://github.com/Raamizkn/xlm-chat",
  }
]

const ProjectModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>

            {/* Image */}
            <div className="aspect-video bg-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
              <div className="flex items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 pr-8">
                {project.title}
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                {project.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <GitHub className="w-5 h-5 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-video bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <ExternalLink className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
    
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 min-h-[3.5rem] line-clamp-2">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-gray-800 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-200 text-xs"
          >
            {tag}
          </Badge>
        ))}
        {project.tags.length > 4 && (
          <Badge
            variant="secondary"
            className="bg-gray-700 text-gray-400 text-xs"
          >
            +{project.tags.length - 4}
          </Badge>
        )}
      </div>
      
      <div className="mt-auto pt-2 space-y-3">
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-transparent border-gray-700 text-gray-300 hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation()
            window.open(project.github, '_blank')
          }}
        >
          <GitHub className="w-4 h-4 mr-2" />
          View on GitHub
        </Button>
        <div className="text-xs text-gray-500 text-center">
          Click card for details
        </div>
      </div>
    </div>
  </motion.div>
)

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'ai' | 'software'>('ai')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tabs = [
    { id: 'ai' as const, label: 'AI & Machine Learning', count: aiProjects.length },
    { id: 'software' as const, label: 'Software Development', count: softwareProjects.length }
  ]

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work, showcasing my relevant skills and experience.
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
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}>
                  {tab.label}
                  <span className="ml-2 text-xs bg-gray-800 px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === 'ai' ? aiProjects : softwareProjects).map((project, index) => (
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

