import { default as Header } from "../components/header"
import { default as Hero } from "../components/hero"
import { default as About } from "../components/about"
import { default as Projects } from "../components/projects"
import { default as Skills } from "../components/skills"
import { default as Experience } from "../components/experience"
import { default as Certifications } from "../components/certifications"
import { default as Contact } from "../components/contact"
import { default as Footer } from "../components/footer"
import { default as FloatingNav } from "../components/floating-nav"
import { default as CursorEffect } from "../components/cursor-effect"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <CursorEffect />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  )
}

