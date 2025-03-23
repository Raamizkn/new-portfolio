import { default as Hero } from "../components/hero"
import { default as Projects } from "../components/projects"
import { default as Skills } from "../components/skills"
import { default as Experience } from "../components/experience"
import { default as Certifications } from "../components/certifications"
import { default as Contact } from "../components/contact"
import { default as Footer } from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}

