"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Palette, Code2, Sparkles } from "lucide-react"

interface Skill {
  name: string
  category: string
  description: string
  icon?: string
}

const productSkills: Skill[] = [
  { name: "Figma", category: "Design", description: "UI/UX Design", icon: "figma" },
  { name: "Framer", category: "Prototyping", description: "Interactive Prototypes", icon: "framer" },
  { name: "Miro", category: "Collaboration", description: "Ideation & Planning", icon: "miro" },
  { name: "Adobe XD", category: "Design", description: "Experience Design", icon: "adobexd" },
  { name: "Sketch", category: "Design", description: "Interface Design", icon: "sketch" },
  { name: "Notion", category: "Documentation", description: "Product Specs", icon: "notion" },
  { name: "Jira", category: "Management", description: "Agile Workflows", icon: "jira" },
  { name: "Confluence", category: "Documentation", description: "Team Wiki", icon: "confluence" },
  { name: "Mixpanel", category: "Analytics", description: "Product Analytics", icon: "mixpanel" },
  { name: "Hotjar", category: "Analytics", description: "User Behavior", icon: "hotjar" },
  { name: "UserTesting", category: "Research", description: "User Research", icon: "usertesting" },
  { name: "Maze", category: "Research", description: "Usability Testing", icon: "maze" },
]

const developmentSkills: Skill[] = [
  { name: "Claude", category: "AI", description: "AI Assistant", icon: "anthropic" },
  { name: "Cursor", category: "IDE", description: "AI Code Editor", icon: "vscodium" },
  { name: "GitHub Copilot", category: "AI", description: "Code Completion", icon: "githubcopilot" },
  { name: "VS Code", category: "IDE", description: "Code Editor", icon: "visualstudiocode" },
  { name: "Git", category: "Version Control", description: "Source Control", icon: "git" },
  { name: "Docker", category: "DevOps", description: "Containerization", icon: "docker" },
  { name: "Postman", category: "API", description: "API Testing", icon: "postman" },
  { name: "Terminal", category: "CLI", description: "Command Line", icon: "gnubash" },
  { name: "npm", category: "Package Manager", description: "Dependencies", icon: "npm" },
  { name: "Vercel", category: "Deployment", description: "Hosting Platform", icon: "vercel" },
  { name: "AWS", category: "Cloud", description: "Cloud Services", icon: "amazonaws" },
  { name: "Python", category: "Language", description: "Backend & AI", icon: "python" },
]

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  
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
        className="relative p-6 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl transition-all duration-300 overflow-hidden h-full"
        style={{
          borderColor: isHovered ? '#059669' : '',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
        }}
      >
        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(5, 150, 105, 0.1) 0%, transparent 70%)',
            opacity: isHovered ? 1 : 0
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-300 relative">
              {skill.icon && !imageError ? (
                <>
                  {!isLoaded && (
                    <Sparkles 
                      className="w-5 h-5 absolute text-gray-300 animate-pulse" 
                    />
                  )}
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.icon}/${isHovered ? '059669' : '6B7280'}`}
                    alt={skill.name}
                    className={`w-6 h-6 object-contain transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                </>
              ) : (
                <Sparkles 
                  className="w-5 h-5 transition-colors duration-300" 
                  style={{ color: isHovered ? '#059669' : '#9CA3AF' }}
                />
              )}
            </div>
            <motion.div
              animate={{ rotate: isHovered ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles 
                className="w-3 h-3 transition-colors duration-300" 
                style={{ color: isHovered ? '#059669' : '#E5E7EB' }}
              />
            </motion.div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-[#059669] transition-colors">
              {skill.name}
            </h3>
            <div className="flex flex-col gap-1">
              <span 
                className="inline-block text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500"
              >
                {skill.category}
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                {skill.description}
              </p>
            </div>
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
    <section id="skills" className="py-24 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-[#050505]" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 dark:from-emerald-900/5 via-transparent to-transparent"></div>
      
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
            <span style={{ color: '#059669' }}>Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light">
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
          <div className="inline-flex bg-gray-100 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full p-1.5">
            <button
              onClick={() => setActiveTab('product')}
              className="relative px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              {activeTab === 'product' && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: '#059669' }}
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
                  style={{ backgroundColor: '#059669' }}
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
          className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10"
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
