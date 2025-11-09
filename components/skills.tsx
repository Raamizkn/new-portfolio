"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Palette, Code2, Sparkles } from "lucide-react"

interface Skill {
  name: string
  category: string
  description: string
}

const productSkills: Skill[] = [
  { name: "Figma", category: "Design", description: "UI/UX Design" },
  { name: "Framer", category: "Prototyping", description: "Interactive Prototypes" },
  { name: "Miro", category: "Collaboration", description: "Ideation & Planning" },
  { name: "Adobe XD", category: "Design", description: "Experience Design" },
  { name: "Sketch", category: "Design", description: "Interface Design" },
  { name: "Notion", category: "Documentation", description: "Product Specs" },
  { name: "Jira", category: "Management", description: "Agile Workflows" },
  { name: "Confluence", category: "Documentation", description: "Team Wiki" },
  { name: "Mixpanel", category: "Analytics", description: "Product Analytics" },
  { name: "Hotjar", category: "Analytics", description: "User Behavior" },
  { name: "UserTesting", category: "Research", description: "User Research" },
  { name: "Maze", category: "Research", description: "Usability Testing" },
]

const developmentSkills: Skill[] = [
  { name: "Claude", category: "AI", description: "AI Assistant" },
  { name: "Cursor", category: "IDE", description: "AI Code Editor" },
  { name: "GitHub Copilot", category: "AI", description: "Code Completion" },
  { name: "VS Code", category: "IDE", description: "Code Editor" },
  { name: "Git", category: "Version Control", description: "Source Control" },
  { name: "Docker", category: "DevOps", description: "Containerization" },
  { name: "Postman", category: "API", description: "API Testing" },
  { name: "Terminal", category: "CLI", description: "Command Line" },
  { name: "npm/yarn", category: "Package Manager", description: "Dependencies" },
  { name: "Vercel", category: "Deployment", description: "Hosting Platform" },
  { name: "AWS", category: "Cloud", description: "Cloud Services" },
  { name: "Python", category: "Language", description: "Backend & AI" },
]

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative p-6 bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-2xl transition-all duration-300 overflow-hidden"
        style={{
          borderColor: isHovered ? '#8668ED' : '',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
        }}
      >
        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(134, 104, 237, 0.1) 0%, transparent 70%)',
            opacity: isHovered ? 1 : 0
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-normal text-gray-900 dark:text-white">
              {skill.name}
            </h3>
            <motion.div
              animate={{ rotate: isHovered ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles 
                className="w-4 h-4 transition-colors duration-300" 
                style={{ color: isHovered ? '#8668ED' : '#9CA3AF' }}
              />
            </motion.div>
          </div>
          
          <div className="space-y-2">
            <span 
              className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400"
            >
              {skill.category}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeTab, setActiveTab] = useState<'product' | 'development'>('product')

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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Tools & </span>
            <span style={{ color: '#8668ED' }}>Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            The technologies I use <span className="text-gray-500 dark:text-gray-600">to design and build products</span>
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-full p-1.5">
            <button
              onClick={() => setActiveTab('product')}
              className="relative px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              {activeTab === 'product' && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: '#8668ED' }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Palette className={`w-4 h-4 relative z-10 transition-colors duration-300 ${
                activeTab === 'product' ? 'text-white' : 'text-gray-600 dark:text-gray-400'
              }`} />
              <span className={`relative z-10 font-light transition-colors duration-300 ${
                activeTab === 'product' 
                  ? 'text-white' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                Product Design
              </span>
            </button>
            
            <button
              onClick={() => setActiveTab('development')}
              className="relative px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              {activeTab === 'development' && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: '#8668ED' }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Code2 className={`w-4 h-4 relative z-10 transition-colors duration-300 ${
                activeTab === 'development' ? 'text-white' : 'text-gray-600 dark:text-gray-400'
              }`} />
              <span className={`relative z-10 font-light transition-colors duration-300 ${
                activeTab === 'development' 
                  ? 'text-white' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                Development
              </span>
            </button>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {(activeTab === 'product' ? productSkills : developmentSkills).map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-2">
                {productSkills.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Design Tools
              </div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-2">
                {developmentSkills.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Dev Tools
              </div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-2">
                3+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-2">
                20+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Delivered
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
