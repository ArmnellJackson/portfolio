export interface Project {
  title: string
  description: string
  image: string
  link?: string
  repoLink?: string // Added repoLink
}

export const projects: Project[] = [
  {
    title: "Eros Store",
    description: "E-commerce de artículos para adultos. Sin DB ni registro de usuarios. Con la posibilidad de consumir la PA-API de Amazon Associates.",
    image: "/portfolio/images/eros-store-logo.png", // Corrected path
    link: "https://erosstore.github.io/e-commerce/",
    repoLink: "https://github.com/ErosStore/e-commerce" // Example repoLink
  },
  {
    title: "Dashboard",
    description: "Panel de control para análisis de datos",
    image: "/portfolio/images/logo-oscuro.png", // Corrected path
    repoLink: "https://github.com/armnelljackson/dashboard" // Example repoLink
  },
  {
    title: "Red Social",
    description: "Plataforma para conectar profesionales",
    image: "/portfolio/images/logo-claro.png", // Corrected path
    repoLink: "https://github.com/armnelljackson/social-network" // Example repoLink
  },
  {
    title: "Portfolio Fotográfico",
    description: "Galería para fotógrafos profesionales",
    image: "/portfolio/images/logo-oscuro.png", // Corrected path
    repoLink: "https://github.com/armnelljackson/photo-portfolio" // Example repoLink
  },
  {
    title: "Aplicación de Recetas",
    description: "Colección de recetas con planificador de comidas",
    image: "/portfolio/images/logo-claro.png", // Corrected path
    repoLink: "https://github.com/armnelljackson/recipe-app" // Example repoLink
  },
  {
    title: "Plataforma Educativa",
    description: "Sistema de gestión de cursos online",
    image: "/portfolio/images/logo-oscuro.png", // Corrected path
    repoLink: "https://github.com/armnelljackson/education-platform" // Example repoLink
  },
  {
    title: "Gestor de Tareas",
    description: "Aplicación para organizar proyectos y tareas",
    image: "/portfolio/images/logo-claro.png", // Corrected path
    repoLink: "https://github.com/armnelljackson/task-manager" // Example repoLink
  }
] 