"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: Target,
    value: "3+",
    label: "Years of Experience",
    description: "Building AI-powered products"
  },
  {
    icon: Lightbulb,
    value: "15+",
    label: "Projects Delivered",
    description: "From concept to production"
  },
  {
    icon: Users,
    value: "10+",
    label: "Cross-functional Teams",
    description: "Collaborated with globally"
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Client Satisfaction",
    description: "Delivering measurable results"
  }
]

const expertise = [
  {
    title: "Product Strategy",
    description: "Defining product vision, roadmaps, and go-to-market strategies that align with business objectives and user needs."
  },
  {
    title: "AI Integration",
    description: "Implementing machine learning solutions and automation workflows that enhance product capabilities and user experience."
  },
  {
    title: "Data-Driven Design",
    description: "Leveraging analytics and user research to make informed decisions and continuously improve product performance."
  },
  {
    title: "Agile Development",
    description: "Leading cross-functional teams through iterative development cycles, ensuring timely delivery and quality outcomes."
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-gray-950" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/20 dark:from-blue-900/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            <span style={{ color: '#8668ED' }}>
              About Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm a computer science student specializing in AI and product management. My approach combines 
            technical expertise with strategic thinking to build products that solve real problems and create 
            lasting impact.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-2xl transition-all duration-300 shadow-sm"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8668ED50'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl border" style={{ backgroundColor: '#8668ED10', borderColor: '#8668ED30' }}>
                <item.icon className="w-6 h-6" style={{ color: '#8668ED' }} />
              </div>
              <div className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-2">{item.value}</div>
              <div className="text-sm font-normal text-gray-700 dark:text-gray-300 mb-1">{item.label}</div>
              <div className="text-xs text-gray-600 dark:text-gray-500">{item.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white text-center mb-12">
            Core Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-2xl transition-all duration-300 group shadow-sm"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8668ED50'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
              >
                <h4 className="text-xl font-normal text-gray-900 dark:text-white mb-3 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8668ED'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 border rounded-3xl" style={{ backgroundColor: '#8668ED10', borderColor: '#8668ED30' }}>
            <blockquote className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-200 leading-relaxed">
              "I believe the best products are born from a deep understanding of user needs, 
              powered by cutting-edge technology, and refined through continuous iteration and feedback."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

