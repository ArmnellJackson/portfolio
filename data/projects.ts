export interface Project {
  title: string
  description: string
  image: string
  link?: string
}

export const projects: Project[] = [
  {
    title: "Eros Store",
    description: "E-commerce de artículos para adultos. Sin DB ni registro de usuarios. Con la posibilidad de consumir la PA-API de Amazon Associates.",
    image: "/portfolio/images/eros-store-logo.png",
    link: "https://erosstore.github.io/e-commerce/"
  },
  {
    title: "Dashboard",
    description: "Panel de control para análisis de datos",
    image: "/portfolio/images/logo-oscuro.png"
  },
  {
    title: "Red Social",
    description: "Plataforma para conectar profesionales",
    image: "/portfolio/images/logo-claro.png"
  },
  {
    title: "Portfolio Fotográfico",
    description: "Galería para fotógrafos profesionales",
    image: "/portfolio/images/logo-oscuro.png"
  },
  {
    title: "Aplicación de Recetas",
    description: "Colección de recetas con planificador de comidas",
    image: "/portfolio/images/logo-claro.png"
  },
  {
    title: "Plataforma Educativa",
    description: "Sistema de gestión de cursos online",
    image: "/portfolio/images/logo-oscuro.png"
  },
  {
    title: "Gestor de Tareas",
    description: "Aplicación para organizar proyectos y tareas",
    image: "/portfolio/images/logo-claro.png"
  }
] 