"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("https://formspree.io/f/xyzewwvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white dark:bg-transparent" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/10 dark:from-purple-900/5 via-transparent to-transparent"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-12 text-center leading-tight">
          <span className="text-gray-900 dark:text-white">Let's </span>
          <span style={{ color: '#8668ED' }}>Connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 h-full rounded-2xl">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white font-light text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#8668ED20' }}>
                    <Mail className="h-6 w-6" style={{ color: '#8668ED' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-normal text-gray-700 dark:text-gray-300">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">raamiz.niazi@sabanciuniv.edu</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#8668ED20' }}>
                    <MessageSquare className="h-6 w-6" style={{ color: '#8668ED' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-normal text-gray-700 dark:text-gray-300">Social Media</h3>
                    <div className="flex gap-2 mt-1">
                      <a
                        href="https://github.com/Raamizkn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                      <span className="text-gray-400 dark:text-gray-600">•</span>
                      <a
                        href="https://www.linkedin.com/in/raamiz-khan-niazi-b77a43233/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-gray-600 dark:text-gray-300">
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
            <Card className="bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white font-light text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-normal text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-normal text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-normal text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-normal text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 min-h-[120px]"
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800 text-green-700 dark:text-green-400 flex items-center p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 flex items-center p-3 rounded-md">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      There was an error sending your message. Please try again.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    className="relative overflow-hidden w-full font-light py-3 rounded-full border-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                    style={{ 
                      backgroundColor: '#8668ED',
                      borderColor: '#8668ED'
                    }}
                    whileTap={!submitting ? { scale: 0.99 } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="relative z-10 flex items-center justify-center text-white group-hover:text-purple-600 transition-colors duration-200">
                      {submitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </span>
                    {!submitting && (
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </motion.button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

