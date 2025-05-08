import Image from "next/image"
import Link from "next/link"
import { Globe, Smartphone, Palette, ShoppingCart, Building2, Code2 } from "lucide-react"
import ProjectCard from "@/components/project-card"
import TechStack from "@/components/tech-stack"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import { projects } from "@/data/projects"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Layout Grid - Reorganizado según el boceto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Perfil - Ahora fuera de las columnas para que aparezca primero en móvil */}
          <div className="md:hidden order-1">
            <div className="rounded-lg p-4">
              <div className="flex flex-col items-start mb-4">
                <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">ARMNELL GÓMEZ</h1>
                <p className="text-sm text-[#424242] dark:text-[#E0E0E0] uppercase">Desarrollador Full Stack</p>
              </div>

              <p className="text-sm leading-relaxed mb-4 text-black dark:text-white">
                Me especializo en crear experiencias digitales visualmente impactantes y fáciles de usar. Con pasión por
                combinar estética y funcionalidad, doy vida a ideas, creando soluciones innovadoras en el dinámico mundo
                del desarrollo web.
              </p>

              <Link
                href="/contacto"
                className="inline-block px-6 py-2 bg-black dark:bg-black border border-[#E0E0E0] dark:border-[#E0E0E0] rounded-full text-sm text-white dark:text-white hover:bg-[#E0E0E0] hover:text-black dark:hover:bg-[#E0E0E0] dark:hover:text-black transition-colors"
              >
                Contáctame
              </Link>
            </div>
          </div>

          {/* Columna izquierda en desktop */}
          <div className="md:col-span-1 flex flex-col space-y-8 order-4 md:order-1">
            {/* Cart 1: Perfil - Solo visible en desktop */}
            <div className="hidden md:block rounded-lg p-4">
              <div className="flex flex-col items-start mb-4">
                {/* <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/images/........"
                    alt="Perfil de Armnell Jackson Gómez Garcia"
                    width={64}
                    height={64}
                    className="rounded-full bg-[#E0E0E0] dark:bg-[#E0E0E0] h-16 w-auto"
                  />
                </div> */}
                <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">ARMNELL GÓMEZ.</h1>
                <p className="text-sm text-[#424242] dark:text-[#E0E0E0] uppercase">Desarrollador Full Stack</p>
              </div>

              <p className="text-sm leading-relaxed mb-4 text-black dark:text-white">
                Me especializo en crear experiencias digitales visualmente impactantes y fáciles de usar. Con pasión por
                combinar estética y funcionalidad, doy vida a ideas, creando soluciones innovadoras en el dinámico mundo
                del desarrollo web.
              </p>

              <Link
                href="/contacto"
                className="inline-block px-6 py-2 bg-black dark:bg-black border border-[#E0E0E0] dark:border-[#E0E0E0] rounded-full text-sm text-white dark:text-white hover:bg-[#E0E0E0] hover:text-black dark:hover:bg-[#E0E0E0] dark:hover:text-black transition-colors"
              >
                Contáctame
              </Link>
            </div>

            {/* Cart 4: Certificaciones */}
            <div className="bg-[#424242] dark:bg-[#424242] rounded-lg p-4 flex flex-col">
              <h3 className="text-lg font-medium mb-4 text-black dark:text-white">Certificaciones</h3>
              <div
                className="overflow-y-auto pr-2 flex-grow"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#E0E0E0 #424242",
                  height: "216px",
                }}
              >
                <ul className="space-y-3">
                  <li className="border-b border-[#E0E0E0]/20 pb-2">
                    <p className="font-medium text-white dark:text-white">AWS Cloud Practitioner</p>
                    <p className="text-xs text-[#E0E0E0] dark:text-[#E0E0E0]">Platzi • 2023</p>
                  </li>
                  <li className="border-b border-[#E0E0E0]/20 pb-2">
                    <p className="font-medium text-white dark:text-white">Fundamentos de Data</p>
                    <p className="text-xs text-[#E0E0E0] dark:text-[#E0E0E0]">Platzi • 2023</p>
                  </li>
                  <li className="border-b border-[#E0E0E0]/20 pb-2">
                    <p className="font-medium text-white dark:text-white">Pensamiento Logico</p>
                    <p className="text-xs text-[#E0E0E0] dark:text-[#E0E0E0]">Platzi • 2023</p>
                  </li>
                  <li className="border-b border-[#E0E0E0]/20 pb-2">
                    <p className="font-medium text-white dark:text-white">Git y GitHub</p>
                    <p className="text-xs text-[#E0E0E0] dark:text-[#E0E0E0]">Platzi • 2023</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cart 5: Mi Stack */}
            <div className="bg-[#424242] dark:bg-[#424242] rounded-lg p-4 flex flex-col">
              <h3 className="text-lg font-medium mb-4 text-black dark:text-white">Stack</h3>
              <div
                className="overflow-y-auto pr-2 flex-grow"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#E0E0E0 #424242",
                  height: "216px",
                }}
              >
                <TechStack showLabels={true} />
              </div>
            </div>
          </div>

          {/* Columna derecha en desktop */}
          <div className="md:col-span-2 flex flex-col space-y-8 order-2 md:order-2">
            {/* Cart 2: Servicios */}
            <section className="bg-[#424242] dark:bg-[#424242] text-white dark:text-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium text-black dark:text-white">Servicios</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ServiceCard
                  title="Páginas Web"
                  description="Desarrollo de páginas web estáticas y dinámicas, perfectas para blogs personales o profesionales. Incluye diseño responsivo, optimización SEO y gestión de contenido intuitiva."
                  icon={Globe}
                />
                <ServiceCard
                  title="Sitios Web Corporativos"
                  description="Sitios web completos para empresas, con secciones de servicios, portafolio, equipo y contacto. Diseñados para mostrar la identidad de tu marca y conectar con tus clientes."
                  icon={Building2}
                />
                <ServiceCard
                  title="Aplicaciones Web E-commerce"
                  description="Plataformas de comercio electrónico con pasarelas de pago seguras, gestión de inventario, carrito de compras y panel de administración completo."
                  icon={ShoppingCart}
                />
                <ServiceCard
                  title="Aplicaciones Web Especializadas"
                  description="Soluciones SaaS personalizadas para consultorios médicos y veterinarios (citas online, historias clínicas), gestión de restaurantes (pedidos, reservas, inventario) y sistemas de recursos humanos (gestión de empleados, nómina, vacaciones)."
                  icon={Code2}
                />
              </div>
            </section>

            {/* Cart 3: Proyectos */}
            <section className="bg-[#424242] dark:bg-[#424242] rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium text-black dark:text-white">Proyectos</h2>
                <Link
                  href="/proyectos"
                  className="text-black dark:text-white hover:text-[#424242] dark:hover:text-[#E0E0E0] transition-colors"
                >
                  Ver todos
                </Link>
              </div>

              <div className="relative">
                <div
                  className="flex overflow-x-auto pb-4 space-x-4"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#E0E0E0 #424242",
                  }}
                >
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
                <div className="absolute left-0 bottom-0 w-full h-1 bg-[#000000]/10 dark:bg-[#000000]/10 rounded-full">
                  <div className="w-1/3 h-full bg-[#E0E0E0]/30 dark:bg-[#E0E0E0]/30 rounded-full"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
