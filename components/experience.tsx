"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, MapPin, Users, Award, ChevronDown, ChevronUp } from "lucide-react"

interface Experience {
  id: number
  period: string
  title: string
  company: string
  location?: string
  companyUrl?: string
  description: string
  achievements: string[]
  technologies: string[]
  teamSize?: string
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
    teamSize: "Individual Project"
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
    teamSize: "5-8 Team Members"
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
    teamSize: "12+ Team Members"
  },
]

const typeColors = {
  "full-time": "from-blue-500 to-cyan-500",
  "internship": "from-blue-600 to-indigo-600",
  "program": "from-purple-500 to-violet-500",
  "freelance": "from-purple-600 to-indigo-600"
}

const typeLabels = {
  "full-time": "Full-time",
  "internship": "Internship",
  "program": "Program",
  "freelance": "Freelance"
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="experience" className="py-20 px-4 md:px-8 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Professional Journey
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Building expertise through diverse experiences in cloud architecture, AI/ML, and enterprise solutions
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem 
                key={experience.id} 
                experience={experience} 
                index={index} 
                isInView={isInView}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ExperienceItem({
  experience,
  index,
  isInView,
  isLeft
}: {
  experience: Experience
  index: number
  isInView: boolean
  isLeft: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className={`absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r ${typeColors[experience.type]} rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
      </motion.div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl hover:border-purple-500/30 transition-all duration-300 group"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge 
                  className={`bg-gradient-to-r ${typeColors[experience.type]} text-white border-0 text-xs font-medium`}
                >
                  {typeLabels[experience.type]}
                </Badge>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-3 h-3 mr-1" />
                  {experience.period}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {experience.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <span className="text-purple-400 font-medium">{experience.company}</span>
                {experience.location && (
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {experience.location}
                  </div>
                )}
                {experience.teamSize && (
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {experience.teamSize}
                  </div>
                )}
              </div>
            </div>

            {experience.companyUrl && (
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-purple-400 p-2"
                onClick={() => window.open(experience.companyUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-400 hover:text-purple-300 p-0 h-auto font-medium mb-2"
            >
              <Award className="w-4 h-4 mr-2" />
              Key Achievements
              {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </Button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 text-sm text-gray-300">
                    {experience.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-gray-800/80 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-200 text-xs border border-gray-700/50"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

