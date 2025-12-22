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
    period: "Aug 2025 — Present",
    title: "AI Consultant",
    company: "Ncrese",
    location: "Remote, United States",
    type: "full-time",
    description:
      "Leading end-to-end AI voice agent development and marketing automation systems for clients, driving significant improvements in conversions and operational efficiency.",
    achievements: [
      "Led development and deployment of AI voice agents using n8n, VAPI, and Retell, driving a 30% increase in lead conversions through automated engagement",
      "Scoped, designed, and productized a marketing automation system for a digital agency, resulting in a 50% workload reduction and 60% growth in content output",
      "Drove prompt and context engineering initiatives on Langfuse, enhancing latency efficiency and contextual accuracy across production-grade AI systems by 40-45%",
      "Partnered with stakeholders to refine agentic logic and reliability in voice AI systems"
    ],
    technologies: ["n8n", "VAPI", "Retell", "Langfuse", "OpenAI API", "Prompt Engineering", "Voice AI", "Marketing Automation"],
  },
  {
    id: 2,
    period: "Aug 2025 — Present",
    title: "Cofounder & AI Product Head",
    company: "Mathison AI",
    location: "Türkiye",
    type: "full-time",
    description:
      "Cofounded and leading product design, overseeing UX, feature rollout, and sprint management from concept to deployment.",
    achievements: [
      "Led product design, overseeing UX, feature rollout, and sprint management from concept to deployment",
      "Developed and tested backend APIs, managing full-stack integration and ensuring stable, scalable releases",
      "Built and integrated AI grading agents using OpenAI APIs and MongoDB on Next.js, automating assessments with 85% accuracy",
      "Managed cross-functional team coordination and agile development cycles"
    ],
    technologies: ["Next.js", "OpenAI API", "MongoDB", "TypeScript", "Product Management", "Sprint Management", "Full-Stack Development"],
  },
  {
    id: 3,
    period: "Mar 2025 — Jun 2025",
    title: "AI Product Intern",
    company: "Alt Ventures",
    location: "Singapore",
    type: "internship",
    description:
      "Engineered AI voice agents and developed scalable frontend/backend services for professional interview platform.",
    achievements: [
      "Engineered and optimized AI agent prompts, improving response relevance by 30% in dynamic customer-facing environments",
      "Developed LLM-driven voice AI agents to conduct mock professional interviews with 95%+ transcription accuracy",
      "Integrated emotional intelligence via Hume API's EVI models for enhanced interview experience",
      "Built scalable frontend (Next.js with Stripe Connect) and backend services (Supabase) to support real-time AI agent operations",
      "Led website frontend design and prototyping in Figma, maintaining UI/UX alignment with product and brand identity"
    ],
    technologies: ["Next.js", "Supabase", "Hume API", "Stripe", "Figma", "Voice AI", "LLM", "Prompt Engineering"],
  },
  {
    id: 4,
    period: "Jun 2025 — Aug 2025",
    title: "AI Intern",
    company: "MedIQ Smart Healthcare",
    location: "Pakistan",
    type: "internship",
    description:
      "Built RAG workflows and telemedicine solutions, improving platform UI/UX and optimizing AI automation.",
    achievements: [
      "Built RAG workflows for lab-pharmacy support using n8n and WhatsApp Cloud API, cutting response time by 40%",
      "Improved platform UI/UX with Vue.js, aligning design to product goals and raising task completion 35%",
      "Developed a secure telemedicine web-app with Zoom SDK and Node.js, enabling 100+ weekly consultations post-launch",
      "Optimized AI automation via context engineering, reducing LLM errors 35% and improving response relevance"
    ],
    technologies: ["n8n", "Vue.js", "Node.js", "Zoom SDK", "WhatsApp API", "RAG", "Context Engineering"],
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
          e.currentTarget.style.borderColor = '#059669'
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
          style={{ color: '#059669' }}
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
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#059669' }} />
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-200/10 dark:from-emerald-900/5 via-transparent to-transparent"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Professional </span>
            <span style={{ color: '#059669' }}>Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            My experience building products <span className="text-gray-500 dark:text-gray-600">and leading technical initiatives</span>
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
