"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="contact" className="py-20 px-4 md:px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Let's Connect
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300">Email</h3>
                    <p className="text-gray-400">raamiz.niazi@sabanciuniv.edu</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300">Social Media</h3>
                    <div className="flex gap-2 mt-1">
                      <a
                        href="https://github.com/Raamizkn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                      <span className="text-gray-600">•</span>
                      <a
                        href="https://www.linkedin.com/in/raamiz-khan-niazi-b77a43233/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-gray-300">
                    I'm currently open to freelance opportunities, full-time positions, and interesting projects. Let's
                    create something amazing together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

