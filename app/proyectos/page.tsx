import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import { projects } from "@/data/projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos | Armnell Jackson Gómez Garcia",
  description:
    "Explora los proyectos de desarrollo web de Armnell Jackson Gómez Garcia, desarrollador full stack.",
  keywords: "proyectos, desarrollo web, portfolio, armnell jackson gómez garcia",
}

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#424242] dark:text-[#E0E0E0] hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Mis Proyectos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
