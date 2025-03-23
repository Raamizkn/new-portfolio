"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Skill {
  name: string
  icon: string
  color: string
}

const frontendSkills: Skill[] = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
]

const backendSkills: Skill[] = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    color: "#009688",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    color: "#000000",
  },
  {
    name: "CUDA C/C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cuda/cuda-original.svg",
    color: "#76B900",
  },
  {
    name: "R",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    color: "#276DC3",
  },
]

const mlSkills: Skill[] = [
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    color: "#FF6F00",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    color: "#EE4C2C",
  },
  {
    name: "Scikit-learn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sklearn/sklearn-original.svg",
    color: "#F7931E",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    color: "#150458",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "#013243",
  },
  {
    name: "RAG",
    icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png",
    color: "#0078D7",
  },
]

const devopsSkills: Skill[] = [
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    color: "#326CE5",
  },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    color: "#232F3E",
  },
  {
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    color: "#7B42BC",
  },
]

const cloudSkills: Skill[] = [
  {
    name: "AWS Lambda",
    icon: "https://img.icons8.com/color/48/000000/lambda.png",
    color: "#FF9900",
  },
  {
    name: "LocalStack",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-localstack-a-fully-functional-local-aws-cloud-stack-logo-shadow-tal-revivo.png",
    color: "#1A73E8",
  },
  {
    name: "IaC",
    icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-infrastructure-web-hosting-flaticons-flat-flat-icons.png",
    color: "#009688",
  },
  {
    name: "SSH",
    icon: "https://img.icons8.com/color/48/ssh.png",
    color: "#000000",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gray-950" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Skills & Technologies
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          The tools and technologies I use to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} delay={0} isInView={isInView} />
          <SkillCategory title="Backend Development" skills={backendSkills} delay={0.2} isInView={isInView} />
          <SkillCategory title="Machine Learning & AI" skills={mlSkills} delay={0.3} isInView={isInView} />
          <SkillCategory title="DevOps & Tools" skills={devopsSkills} delay={0.4} isInView={isInView} />
          <SkillCategory title="Cloud & Infrastructure" skills={cloudSkills} delay={0.5} isInView={isInView} />
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
    >
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillBadge key={skill.name} skill={skill} index={index} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

function SkillBadge({ skill, index, isInView }: { skill: Skill; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center justify-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <div className="w-10 h-10 mb-2 flex items-center justify-center">
        <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-8 h-8" />
      </div>
      <span className="text-sm text-gray-300">{skill.name}</span>
    </motion.div>
  )
}

