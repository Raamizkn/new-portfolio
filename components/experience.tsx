"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react"

interface Experience {
  id: number
  period: string
  title: string
  company: string
  location?: string
  description: string
  achievements: string[]
  technologies: string[]
  type: "full-time" | "internship" | "program" | "freelance"
}

const experiences: Experience[] = [
  {
    id: 1,
    period: "2024 — Present",
    title: "Solutions Architecture Program Participant",
    company: "AWS APAC (The Forage)",
    location: "Remote",
    type: "program",
    description:
      "Participated in an intensive solutions architecture program focusing on cloud infrastructure design and scalable system architecture.",
    achievements: [
      "Designed scalable hosting architecture using AWS Elastic Beanstalk for high-growth client scenarios",
      "Created comprehensive architecture documentation with cost analysis and technical specifications",
      "Presented solutions in client-friendly language, bridging technical and business requirements",
      "Achieved program completion with distinction in cloud architecture fundamentals"
    ],
    technologies: ["AWS", "Elastic Beanstalk", "Cloud Architecture", "Solution Design", "Cost Optimization"],
  },
  {
    id: 2,
    period: "2023 — Present",
    title: "Project Member & Workshop Facilitator",
    company: "Kai Sabanci",
    location: "Remote",
    type: "full-time",
    description:
      "Leading technical education initiatives and coordinating advanced programming workshops across multiple remote facilities.",
    achievements: [
      "Successfully coordinated NLP workshop sessions for 50+ participants across remote facilities",
      "Organized and delivered GPU programming workshops using CUDA C/C++ for performance computing",
      "Structured comprehensive deep learning curriculum using TensorFlow for 60+ participants",
      "Maintained 95% participant satisfaction rate across all workshop sessions",
      "Developed standardized training materials and assessment frameworks"
    ],
    technologies: ["NLP", "CUDA C/C++", "TensorFlow", "Deep Learning", "Workshop Facilitation", "Remote Coordination"],
  },
  {
    id: 3,
    period: "2023",
    title: "Information Technology Intern",
    company: "Transworld Associates",
    location: "On-site",
    type: "internship",
    description:
      "Contributed to nationwide service optimization initiatives and network infrastructure improvements across enterprise-scale deployments.",
    achievements: [
      "Improved service delivery efficiency across 464 sites nationwide through geolocation API deployment",
      "Developed Python-based automation tools that reduced manual processing time by 40%",
      "Identified and resolved 30+ critical discrepancies in GPON network report parameters",
      "Ensured data integrity through comprehensive analysis of large-scale telecommunications datasets",
      "Created automated reporting systems that improved accuracy and reduced processing time"
    ],
    technologies: ["Python", "Geolocation APIs", "Data Analysis", "GPON Networks", "Report Automation", "Network Infrastructure"],
  },
]

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div 
        className="p-8 bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-2xl transition-all duration-300"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#8668ED'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = ''
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2">
                {experience.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-normal">
                {experience.company}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            {experience.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Achievements Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-normal transition-colors"
          style={{ color: '#8668ED' }}
        >
          <span>{isExpanded ? 'Hide' : 'Show'} Key Achievements</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Achievements */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#8668ED' }} />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="experience" className="py-20 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-transparent" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/10 dark:from-purple-900/5 via-transparent to-transparent"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#8668ED' }}>
            Professional Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My experience building products and leading technical initiatives
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
