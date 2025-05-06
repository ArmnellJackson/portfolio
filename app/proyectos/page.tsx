import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos | Armnell Jackson Gómez Garcia",
  description:
    "Explora los proyectos de desarrollo web y móvil de Armnell Jackson Gómez Garcia, desarrollador full stack.",
  keywords: "proyectos, desarrollo web, desarrollo móvil, portfolio, armnell jackson gómez garcia",
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
          <ProjectCard title="Blog de Viajes" description="Plataforma para compartir experiencias de viaje" />
          <ProjectCard title="App de Finanzas" description="Aplicación para gestión de gastos personales" />
          <ProjectCard title="E-commerce" description="Tienda online para productos artesanales" />
          <ProjectCard title="Dashboard" description="Panel de control para análisis de datos" />
          <ProjectCard title="Red Social" description="Plataforma para conectar profesionales" />
          <ProjectCard title="Portfolio Fotográfico" description="Galería para fotógrafos profesionales" />
          <ProjectCard title="Aplicación de Recetas" description="Colección de recetas con planificador de comidas" />
          <ProjectCard title="Plataforma Educativa" description="Sistema de gestión de cursos online" />
          <ProjectCard title="Gestor de Tareas" description="Aplicación para organizar proyectos y tareas" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
