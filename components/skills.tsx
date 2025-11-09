"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Brain, Settings, Cloud } from "lucide-react"

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
    fallbackIcon: <Brain className="w-6 h-6 text-blue-700" />
  },
]

const toolsSkills: Skill[] = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    color: "#F05032",
    fallbackIcon: <Settings className="w-6 h-6 text-red-500" />
  },
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
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    color: "#7B42BC",
    fallbackIcon: <Settings className="w-6 h-6 text-purple-600" />
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    color: "#FF6C37",
    fallbackIcon: <Settings className="w-6 h-6 text-orange-500" />
  },
]

const cloudSkills: Skill[] = [
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#FF9900",
    fallbackIcon: <Cloud className="w-6 h-6 text-orange-500" />
  },
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    color: "#0078D4",
    fallbackIcon: <Cloud className="w-6 h-6 text-blue-500" />
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    color: "#4285F4",
    fallbackIcon: <Cloud className="w-6 h-6 text-blue-600" />
  },
]

const skillCategories = [
  { name: "Frontend Development", skills: frontendSkills },
  { name: "Backend Development", skills: backendSkills },
  { name: "Machine Learning & AI", skills: mlSkills },
  { name: "DevOps & Tools", skills: toolsSkills },
  { name: "Cloud Platforms", skills: cloudSkills },
]

const SkillBadge = ({ skill }: { skill: Skill }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative px-4 py-3 bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-xl transition-all duration-300 flex items-center gap-3"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#8668ED'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = ''
      }}
    >
      <div className="w-6 h-6 flex-shrink-0">
        {!imageError ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          skill.fallbackIcon
        )}
      </div>
      <span className="text-sm font-normal text-gray-700 dark:text-gray-300">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-transparent" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/10 dark:from-purple-900/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#8668ED' }}>
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life and solve complex problems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-light text-gray-900 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: 0.4 + categoryIndex * 0.1 + index * 0.05 }}
                  >
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
