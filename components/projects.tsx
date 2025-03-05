"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Automotive Concept Styler",
    description:
      "A generative AI system using Stable Diffusion and Python to produce rapid automotive concept images. Built with Streamlit dashboard for live design iteration and user interaction, accelerating concept validation and feedback loops.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Stable Diffusion", "Streamlit", "Machine Learning", "Generative AI"],
    github: "https://github.com/Raamizkn/automotive-concept-styler",
  },
  {
    id: 2,
    title: "AI-Driven IoT Management System",
    description:
      "An IoT management system using machine learning for predictive maintenance and anomaly detection. Features real-time monitoring with Streamlit dashboard and automated alerting for proactive issue resolution.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Machine Learning", "IoT", "Streamlit", "Random Forest"],
    github: "https://github.com/Raamizkn/iot-management",
  },
  {
    id: 3,
    title: "Resume Ranking System",
    description:
      "An automated resume-ranking system using FastAPI, integrating BERT embeddings and OpenAI API. Features keyword-based relevance scoring and containerized deployment with Docker and Kubernetes.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["FastAPI", "BERT", "Docker", "Kubernetes", "OpenAI"],
    github: "https://github.com/Raamizkn/resume-ranker",
  },
  {
    id: 4,
    title: "5G Deployment Analyzer",
    description:
      "AI-powered system to analyze geographic and demographic data for optimal 5G tower placement, considering factors such as population density and proximity to existing towers.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "AI", "Data Analysis", "Geographic Data", "Demographics"],
    github: "https://github.com/Raamizkn/5g-analyzer",
  },
  {
    id: 5,
    title: "Parking Status LoRaWAN Sensor",
    description:
      "A responsive front-end interface for parking status monitoring using HTML, CSS, and JavaScript, featuring live status updates and interactive elements. Achieved 93% user satisfaction among the student-faculty population.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["HTML", "CSS", "JavaScript", "LoRaWAN", "IoT"],
    github: "https://github.com/Raamizkn/parking-sensor",
  },
  {
    id: 6,
    title: "SUSurvey",
    description:
      "A robust web scraping solution using Puppeteer to extract detailed course information from Sabanci University's dynamic catalog, automating the collection of university, required, and elective courses.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Node.js", "Puppeteer", "Web Scraping", "Automation", "Data Collection"],
    github: "https://github.com/Raamizkn/susurvey",
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            My Projects
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of my recent work showcasing my skills and experience in software development.
        </p>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={projects[activeIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={projects[activeIndex]} />
            </motion.div>

            <div className="flex justify-center mt-6 gap-2">
              <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full">
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>

              <div className="flex items-center gap-1">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index ? "w-4 bg-purple-500" : "w-2 bg-gray-600"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full">
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
        <CardDescription className="text-gray-400">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end mt-auto">
        {project.github && (
          <Button variant="outline" size="icon" asChild className="rounded-full h-9 w-9">
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
              <GitHub className="h-4 w-4" />
            </a>
          </Button>
        )}
        {project.demo && (
          <Button size="icon" asChild className="rounded-full h-9 w-9 bg-purple-600 hover:bg-purple-700 ml-2">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

