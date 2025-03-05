"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  credentialUrl: string
  skills: string[]
  logo: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Fundamental understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    credentialUrl: "#",
    skills: ["AWS", "Cloud Computing", "Security", "Architecture"],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    title: "Building Transformer-Based NLP Applications",
    issuer: "NVIDIA",
    date: "2024",
    description:
      "Advanced training in developing NLP applications using transformer architectures and NVIDIA technologies.",
    credentialUrl: "#",
    skills: ["NLP", "Transformers", "Deep Learning", "NVIDIA"],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    title: "Fundamentals of Accelerated Computing with CUDA C/C++",
    issuer: "NVIDIA",
    date: "2024",
    description: "Core concepts of parallel programming and GPU computing using CUDA C/C++.",
    credentialUrl: "#",
    skills: ["CUDA", "C++", "GPU Computing", "Parallel Programming"],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "2023",
    description: "Comprehensive understanding of deep learning concepts, architectures, and practical applications.",
    credentialUrl: "#",
    skills: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"],
    logo: "/placeholder.svg?height=80&width=80",
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-gray-950" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Certifications
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Professional certifications that validate my expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <img
                    src={certification.logo || "/placeholder.svg"}
                    alt={`${certification.issuer} logo`}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <CardTitle className="text-white">{certification.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {certification.issuer} • {certification.date}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{certification.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {certification.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Credential
                    </a>
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

