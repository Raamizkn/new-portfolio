import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Raamiz Khan Niazi. All rights reserved.</p>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Raamizkn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GitHub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/raamiz-khan-niazi-b77a43233/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:raamiz@example.com"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

