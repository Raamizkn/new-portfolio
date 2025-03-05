"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface Experience {
  id: number
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    period: "2024 — Present",
    title: "Solutions Architecture Program Participant",
    company: "AWS APAC (The Forage)",
    description:
      "Simulated designing scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth. Described proposed architecture in plain language ensuring client understanding along with financials.",
    technologies: ["AWS", "Elastic Beanstalk", "Cloud Architecture", "Solution Design"],
  },
  {
    id: 2,
    period: "2023 — Present",
    title: "Project Member",
    company: "Kai Sabanci",
    description:
      "Coordinated and facilitated NLP workshop sessions across remote facilities for 50+ participants. Organized GPU programming workshops with CUDA C/C++. Structured and delivered deep learning content using TensorFlow for 60+ participants.",
    technologies: ["NLP", "CUDA C/C++", "TensorFlow", "Deep Learning", "Workshop Facilitation"],
  },
  {
    id: 3,
    period: "2023",
    title: "Information Technology Intern",
    company: "Transworld Associates",
    description:
      "Improved service delivery efficiency nationwide across 464 sites by deploying geolocation APIs using Python. Identified and resolved 30+ critical discrepancies in report parameters for GPON networks, ensuring data integrity through analysis of large datasets.",
    technologies: ["Python", "Geolocation APIs", "Data Analysis", "GPON Networks", "Report Automation"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="experience" className="py-20 px-4 md:px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Work Experience
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          My professional journey in the tech industry
        </p>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.id} experience={experience} index={index} isInView={isInView} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function ExperienceItem({
  experience,
  index,
  isInView,
}: {
  experience: Experience
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8"
    >
      <div className="text-gray-500 text-sm md:text-base">{experience.period}</div>

      <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              {experience.title}
              {experience.company && (
                <>
                  <span className="text-gray-400 font-normal">•</span>
                  <span className="text-purple-400">{experience.company}</span>
                </>
              )}
            </h3>
          </div>

          {experience.companyUrl && (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors mt-1 md:mt-0"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="text-gray-300 mb-6">{experience.description}</p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-gray-300">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

