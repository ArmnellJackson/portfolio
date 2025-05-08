import Link from "next/link"
import { Github, Mail, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-[#E0E0E0] dark:border-[#424242] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-black dark:text-white">ARMNELL GÓMEZ.</h3>
            <p className="text-sm text-[#424242] dark:text-[#E0E0E0]">
              Desarrollador Full Stack especializado en crear experiencias digitales visualmente impactantes y fáciles
              de usar.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-black dark:text-white">Enlaces</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
              >
                Inicio
              </Link>
              <Link
                href="/proyectos"
                className="text-sm text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
              >
                Proyectos
              </Link>
              <Link
                href="/contacto"
                className="text-sm text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
              >
                Contáctame
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-black dark:text-white">Conectar</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/ArmnellJackson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/armnell-jackson-gomez-garcia-b01619152/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-xs text-[#424242] dark:text-[#E0E0E0] pt-4">
              © {new Date().getFullYear()} Armnell Jackson Gómez Garcia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
