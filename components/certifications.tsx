"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Award, CheckCircle, Copy, Check } from "lucide-react"

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  credentialUrl: string
  skills: string[]
  logo: string
  credentialId?: string
  status: "active" | "expired" | "pending"
  level: "beginner" | "intermediate" | "advanced" | "expert"
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Applications of AI for Predictive Maintenance",
    issuer: "NVIDIA",
    date: "Feb 2025",
    description:
      "Advanced certification in implementing AI-based solutions for predictive maintenance across industrial applications, covering machine learning algorithms, sensor data analysis, and predictive modeling techniques.",
    credentialUrl: "https://learn.nvidia.com/certificates?id=38XtOjStR1qLXwTBdn0PuA",
    credentialId: "38XtOjStR1qLXwTBdn0PuA",
    skills: ["Predictive Maintenance", "AI", "Deep Learning", "Industrial IoT"],
    logo: "/placeholder.svg?height=80&width=80",
    status: "active",
    level: "advanced"
  },
  {
    id: 2,
    title: "Building Transformer-Based NLP Applications",
    issuer: "NVIDIA",
    date: "March 2024",
    description:
      "Advanced training in developing NLP applications using transformer architectures and NVIDIA technologies, including BERT, GPT models, and fine-tuning techniques for specialized applications.",
    credentialUrl: "https://learn.nvidia.com/certificates?id=a8d9byLkSiqPissrEKzogQ",
    credentialId: "a8d9byLkSiqPissrEKzogQ",
    skills: ["NLP", "Transformers", "Deep Learning", "NVIDIA"],
    logo: "/placeholder.svg?height=80&width=80",
    status: "active",
    level: "advanced"
  },
  {
    id: 3,
    title: "Fundamentals of Accelerated Computing with CUDA C/C++",
    issuer: "NVIDIA",
    date: "March 2024",
    description: "Core concepts of parallel programming and GPU computing using CUDA C/C++, covering memory management, kernel optimization, and performance tuning for high-performance computing applications.",
    credentialUrl: "https://learn.nvidia.com/certificates?id=seajHjSuRi21xSsD5zF5Rw",
    credentialId: "seajHjSuRi21xSsD5zF5Rw",
    skills: ["CUDA", "C++", "GPU Computing", "Parallel Programming"],
    logo: "/placeholder.svg?height=80&width=80",
    status: "active",
    level: "intermediate"
  },
  {
    id: 4,
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "December 2023",
    description: "Comprehensive understanding of deep learning concepts, architectures, and practical applications including neural network design, training optimization, and deployment strategies.",
    credentialUrl: "https://learn.nvidia.com/certificates?id=edbe2f2ec35e4e4a8ccff244aa932402",
    credentialId: "edbe2f2ec35e4e4a8ccff244aa932402",
    skills: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"],
    logo: "/placeholder.svg?height=80&width=80",
    status: "active",
    level: "intermediate"
  },
  {
    id: 5,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Fundamental understanding of AWS Cloud concepts, services, security, architecture, pricing, and support including hands-on experience with core AWS services and best practices.",
    credentialUrl: "#",
    skills: ["AWS", "Cloud Computing", "Security", "Architecture"],
    logo: "/placeholder.svg?height=80&width=80",
    status: "active",
    level: "beginner"
  },
]

const levelColors = {
  beginner: "from-blue-400 to-cyan-400",
  intermediate: "from-blue-500 to-cyan-500",
  advanced: "from-purple-500 to-violet-500",
  expert: "from-purple-600 to-indigo-600"
}

const levelLabels = {
  beginner: "Beginner",
  intermediate: "Intermediate", 
  advanced: "Advanced",
  expert: "Expert"
}

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyCredentialId = async (credentialId: string) => {
    try {
      await navigator.clipboard.writeText(credentialId)
      setCopiedId(credentialId)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy credential ID:', err)
    }
  }

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-gray-950 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

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
              Professional Certifications
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Industry-recognized certifications validating expertise in AI, cloud computing, and advanced technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group flex flex-col shadow-2xl">
                {/* Header with Logo and Title */}
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                        <Award className="w-8 h-8 text-purple-400" />
                      </div>
                      <div className="absolute -top-1 -right-1">
                        <CheckCircle className="w-5 h-5 text-blue-400 bg-gray-900 rounded-full" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          className={`bg-gradient-to-r ${levelColors[certification.level]} text-white border-0 text-xs font-medium`}
                        >
                          {levelLabels[certification.level]}
                        </Badge>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          {certification.date}
                        </div>
                      </div>
                      
                      <CardTitle className="text-white text-lg leading-tight mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                        {certification.title}
                      </CardTitle>
                      
                      <CardDescription className="text-purple-400 font-medium">
                        {certification.issuer}
                      </CardDescription>
                      
                      {certification.credentialId && (
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-gray-500">ID:</span>
                          <code className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300 font-mono">
                            {certification.credentialId.slice(0, 12)}...
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 text-gray-400 hover:text-purple-400"
                            onClick={() => copyCredentialId(certification.credentialId!)}
                          >
                            {copiedId === certification.credentialId ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                    {certification.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {certification.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-gray-800/80 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-200 text-xs border border-gray-700/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="pt-4 mt-auto">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    onClick={() => window.open(certification.credentialUrl, '_blank')}
                    disabled={certification.credentialUrl === "#"}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {certification.credentialUrl === "#" ? "Coming Soon" : "View Credential"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

