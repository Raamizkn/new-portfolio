"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="about" className="py-32 px-4 md:px-8 relative overflow-hidden bg-white dark:bg-gray-950" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/10 dark:from-purple-900/5 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Typography Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
            <span className="text-gray-900 dark:text-white">I stay ahead of trends,</span>
            <br />
            <span className="text-gray-900 dark:text-white">integrating the latest</span>
            <br />
            <span className="text-gray-900 dark:text-white">design principles and</span>
            <br />
            <span className="text-gray-900 dark:text-white">technologies </span>
            <span className="text-gray-500 dark:text-gray-600">to help</span>
            <br />
            <span className="text-gray-500 dark:text-gray-600">businesses establish a</span>
            <br />
            <span className="text-gray-500 dark:text-gray-600">strong online presence.</span>
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
              AI <span className="text-2xl text-gray-500 dark:text-gray-600">& Product</span>
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
              title: "Product Strategy",
              description: "Defining product vision, roadmaps, and go-to-market strategies that align with business objectives."
            },
            {
              title: "AI Integration",
              description: "Implementing machine learning solutions that enhance product capabilities and user experience."
            },
            {
              title: "Data-Driven Design",
              description: "Leveraging analytics and research to make informed decisions and improve performance."
            },
            {
              title: "Agile Development",
              description: "Leading cross-functional teams through iterative cycles, ensuring quality outcomes."
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
                e.currentTarget.style.borderColor = '#8668ED'
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
