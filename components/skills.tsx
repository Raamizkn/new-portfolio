"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Brain, Settings, Cloud, Sparkles } from "lucide-react"

interface Skill {
  name: string
  icon: string
  color: string
  fallbackIcon?: React.ReactNode
}

const frontendSkills: Skill[] = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    color: "#E34F26",
    fallbackIcon: <Code className="w-6 h-6 text-orange-500" />
  },
  { 
    name: "CSS3", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", 
    color: "#1572B6",
    fallbackIcon: <Code className="w-6 h-6 text-blue-500" />
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
    fallbackIcon: <Code className="w-6 h-6 text-yellow-500" />
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "#61DAFB",
    fallbackIcon: <Code className="w-6 h-6 text-cyan-500" />
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    color: "#339933",
    fallbackIcon: <Code className="w-6 h-6 text-green-500" />
  },
]

const backendSkills: Skill[] = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    color: "#3776AB",
    fallbackIcon: <Database className="w-6 h-6 text-blue-500" />
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    color: "#009688",
    fallbackIcon: <Database className="w-6 h-6 text-teal-500" />
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    color: "#000000",
    fallbackIcon: <Database className="w-6 h-6 text-gray-500" />
  },
  {
    name: "CUDA C/C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    color: "#76B900",
    fallbackIcon: <Database className="w-6 h-6 text-green-500" />
  },
  {
    name: "R",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
    color: "#276DC3",
    fallbackIcon: <Database className="w-6 h-6 text-blue-600" />
  },
]

const mlSkills: Skill[] = [
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    color: "#FF6F00",
    fallbackIcon: <Brain className="w-6 h-6 text-orange-500" />
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    color: "#EE4C2C",
    fallbackIcon: <Brain className="w-6 h-6 text-red-500" />
  },
  {
    name: "Scikit-learn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    color: "#F7931E",
    fallbackIcon: <Brain className="w-6 h-6 text-orange-400" />
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    color: "#150458",
    fallbackIcon: <Brain className="w-6 h-6 text-purple-600" />
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    color: "#013243",
    fallbackIcon: <Brain className="w-6 h-6 text-blue-800" />
  },
  {
    name: "RAG",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    color: "#0078D7",
    fallbackIcon: <Brain className="w-6 h-6 text-blue-500" />
  },
]

const devopsSkills: Skill[] = [
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    color: "#2496ED",
    fallbackIcon: <Settings className="w-6 h-6 text-blue-500" />
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    color: "#326CE5",
    fallbackIcon: <Settings className="w-6 h-6 text-blue-600" />
  },
  { 
    name: "Git", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", 
    color: "#F05032",
    fallbackIcon: <Settings className="w-6 h-6 text-red-500" />
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#232F3E",
    fallbackIcon: <Cloud className="w-6 h-6 text-orange-500" />
  },
  {
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    color: "#7B42BC",
    fallbackIcon: <Settings className="w-6 h-6 text-purple-500" />
  },
]

const cloudSkills: Skill[] = [
  {
    name: "AWS Lambda",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#FF9900",
    fallbackIcon: <Cloud className="w-6 h-6 text-orange-500" />
  },
  {
    name: "LocalStack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    color: "#1A73E8",
    fallbackIcon: <Cloud className="w-6 h-6 text-blue-500" />
  },
  {
    name: "IaC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    color: "#009688",
    fallbackIcon: <Cloud className="w-6 h-6 text-teal-500" />
  },
  {
    name: "SSH",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original.svg",
    color: "#000000",
    fallbackIcon: <Settings className="w-6 h-6 text-gray-500" />
  },
]

const categoryIcons = {
  "Frontend Development": <Code className="w-5 h-5" />,
  "Backend Development": <Database className="w-5 h-5" />,
  "Machine Learning & AI": <Brain className="w-5 h-5" />,
  "DevOps & Tools": <Settings className="w-5 h-5" />,
  "Cloud & Infrastructure": <Cloud className="w-5 h-5" />
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gray-950 relative overflow-hidden" ref={ref}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Skills & Technologies
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            The tools and technologies I use to bring ideas to life and solve complex problems
          </motion.p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} delay={0} isInView={isInView} />
          <SkillCategory title="Backend Development" skills={backendSkills} delay={0.1} isInView={isInView} />
          <SkillCategory title="Machine Learning & AI" skills={mlSkills} delay={0.2} isInView={isInView} />
          <SkillCategory title="DevOps & Tools" skills={devopsSkills} delay={0.3} isInView={isInView} />
          <SkillCategory title="Cloud & Infrastructure" skills={cloudSkills} delay={0.4} isInView={isInView} />
        </div>
      </motion.div>
    </section>
  )
}

function SkillCategory({
  title,
  skills,
  delay,
  isInView,
}: { title: string; skills: Skill[]; delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 h-full">
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
            <span className="text-purple-400">
              {categoryIcons[title as keyof typeof categoryIcons]}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-gray-400">{skills.length} technologies</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <SkillBadge key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function SkillBadge({ skill, index, isInView }: { skill: Skill; index: number; isInView: boolean }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
    >
      <div className="relative flex flex-col items-center justify-center p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 group-hover:border-purple-500/30 group-hover:bg-gray-800/90 transition-all duration-300 h-full min-h-[100px]">
        {/* Icon Container */}
        <div className="w-12 h-12 mb-3 flex items-center justify-center relative">
          {imageError || !skill.icon ? (
            <div className="relative z-10">
              {skill.fallbackIcon || <Code className="w-7 h-7 text-purple-400" />}
            </div>
          ) : (
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300"
              onError={() => setImageError(true)}
              onLoad={() => setImageError(false)}
            />
          )}
        </div>
        
        {/* Skill Name */}
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
          {skill.name}
        </span>
      </div>
    </motion.div>
  )
}

