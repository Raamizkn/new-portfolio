"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Copy, Check } from "lucide-react"

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  credentialUrl: string
  skills: string[]
  credentialId?: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Product Management Job Simulation",
    issuer: "Electronic Arts (The Forage)",
    date: "Aug 2025",
    description:
      "Completed product management simulation covering feature prioritization, roadmap planning, and stakeholder communication.",
    credentialUrl: "#",
    skills: ["Product Management", "Feature Prioritization", "Roadmap Planning", "Stakeholder Management"],
  },
  {
    id: 2,
    title: "Project Manager Job Simulation",
    issuer: "Siemens Mobility (The Forage)",
    date: "Jul 2025",
    description:
      "Completed project management simulation focusing on agile methodologies, resource allocation, and delivery timelines.",
    credentialUrl: "#",
    skills: ["Project Management", "Agile", "Resource Planning", "Delivery Management"],
  },
  {
    id: 3,
    title: "Applications of AI for Predictive Maintenance",
    issuer: "NVIDIA",
    date: "Mar 2025",
    description:
      "Advanced certification in implementing AI-based solutions for predictive maintenance across industrial applications.",
    credentialUrl: "https://learn.nvidia.com/certificates?id=38XtOjStR1qLXwTBdn0PuA",
    credentialId: "38XtOjStR1qLXwTBdn0PuA",
    skills: ["Predictive Maintenance", "AI", "Deep Learning", "Industrial IoT"],
  },
  {
    id: 4,
    title: "APAC Solutions Architecture Program",
    issuer: "AWS (The Forage)",
    date: "Mar 2024",
    description:
      "Completed solutions architecture program focusing on cloud infrastructure design and scalable system architecture.",
    credentialUrl: "#",
    skills: ["AWS", "Cloud Architecture", "Solution Design", "Infrastructure"],
  },
  {
    id: 5,
    title: "Building Transformer-Based NLP Applications",
    issuer: "NVIDIA",
    date: "Mar 2024",
    description:
      "Advanced training in developing NLP applications using transformer architectures and NVIDIA technologies.",
    credentialUrl: "https://learn.nvidia.com/certificates?id=a8d9byLkSiqPissrEKzogQ",
    credentialId: "a8d9byLkSiqPissrEKzogQ",
    skills: ["NLP", "Transformers", "Deep Learning", "NVIDIA"],
  },
  {
    id: 6,
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Dec 2023",
    description: "Comprehensive understanding of deep learning concepts, architectures, and practical applications.",
    credentialUrl: "https://learn.nvidia.com/certificates?id=edbe2f2ec35e4e4a8ccff244aa932402",
    credentialId: "edbe2f2ec35e4e4a8ccff244aa932402",
    skills: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"],
  },
]

const CertificationCard = ({ cert, index }: { cert: Certification; index: number }) => {
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const handleCopyCredential = (id: number, credentialId: string) => {
    navigator.clipboard.writeText(credentialId)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div 
        className="h-full p-8 bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-2xl transition-all duration-300 flex flex-col"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#8668ED'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = ''
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Icon */}
        <div className="mb-6">
          <div 
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl"
            style={{ backgroundColor: '#8668ED20' }}
          >
            <Award className="w-7 h-7" style={{ color: '#8668ED' }} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-light text-gray-900 dark:text-white mb-2">
            {cert.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 font-normal mb-3">
            {cert.issuer}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {cert.date}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
            {cert.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Credential ID */}
          {cert.credentialId && (
            <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Credential ID</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-mono truncate">
                    {cert.credentialId}
                  </p>
                </div>
                <button
                  onClick={() => handleCopyCredential(cert.id, cert.credentialId!)}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Copy credential ID"
                >
                  {copiedId === cert.id ? (
                    <Check className="w-4 h-4" style={{ color: '#8668ED' }} />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Button */}
        <motion.button
          onClick={() => window.open(cert.credentialUrl, '_blank')}
          className="relative overflow-hidden w-full font-light py-3 rounded-full border-2 group"
          style={{ 
            backgroundColor: '#8668ED',
            borderColor: '#8668ED'
          }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="relative z-10 flex items-center justify-center text-white group-hover:text-purple-600 transition-colors duration-200">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Credential
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-transparent" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/10 dark:from-purple-900/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Professional </span>
            <span style={{ color: '#8668ED' }}>Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Continuous learning <span className="text-gray-500 dark:text-gray-600">and professional development</span>
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
