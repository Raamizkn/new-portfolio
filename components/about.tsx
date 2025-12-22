"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="about" className="py-32 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-gray-950" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-200/10 dark:from-emerald-900/5 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Typography Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
            <span className="text-gray-900 dark:text-white">I stay ahead of AI trends,</span>
            <br />
            <span className="text-gray-900 dark:text-white">building intelligent</span>
            <br />
            <span className="text-gray-900 dark:text-white">products and voice agents</span>
            <br />
            <span className="text-gray-500 dark:text-gray-600">that drive conversions,</span>
            <br />
            <span className="text-gray-500 dark:text-gray-600">automate workflows, and</span>
            <br />
            <span className="text-gray-500 dark:text-gray-600">deliver measurable impact.</span>
          </h2>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-b border-gray-200 dark:border-gray-800 py-12"
        >
          <div className="text-left">
            <div className="text-sm font-normal text-gray-600 dark:text-gray-400 mb-2 tracking-wide uppercase">
              Experience
            </div>
            <div className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              3+ <span className="text-2xl text-gray-500 dark:text-gray-600">Years</span>
            </div>
          </div>
          
          <div className="text-left">
            <div className="text-sm font-normal text-gray-600 dark:text-gray-400 mb-2 tracking-wide uppercase">
              Projects
            </div>
            <div className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              20+ <span className="text-2xl text-gray-500 dark:text-gray-600">Completed</span>
            </div>
          </div>
          
          <div className="text-left">
            <div className="text-sm font-normal text-gray-600 dark:text-gray-400 mb-2 tracking-wide uppercase">
              Focus
            </div>
            <div className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              AI <span className="text-2xl text-gray-500 dark:text-gray-600">Products</span>
            </div>
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              title: "AI Product Management",
              description: "Leading end-to-end AI product development from concept to deployment, with focus on voice agents and automation."
            },
            {
              title: "Prompt & Context Engineering",
              description: "Optimizing AI systems through advanced prompt design and context engineering for production-grade applications."
            },
            {
              title: "Full-Stack Development",
              description: "Building scalable applications with Next.js, TypeScript, and modern backend technologies."
            },
            {
              title: "Sprint & Workflow Design",
              description: "Managing agile development cycles and designing automation workflows that drive business outcomes."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="group p-8 bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-2xl transition-all duration-300 hover:border-opacity-100"
              style={{
                borderColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#059669'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = ''
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
