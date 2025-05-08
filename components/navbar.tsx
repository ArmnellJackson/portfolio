"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-white dark:bg-black border-b border-[#E0E0E0] dark:border-[#424242] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={theme === "dark" ? "/images/logo-claro.png" : "/images/logo-oscuro.png"}
              alt="Logo Armnell Gómez"
              width={180}
              height={50}
              className="h-10 w-auto rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link
                href="/proyectos"
                className={`transition-colors ${
                  isActive("/proyectos")
                    ? "text-black dark:text-white"
                    : "text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
                }`}
              >
                Proyectos
              </Link>
              <Link
                href="/contacto"
                className={`transition-colors ${
                  isActive("/contacto")
                    ? "text-black dark:text-white"
                    : "text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
                }`}
              >
                Contáctame
              </Link>
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-b border-[#E0E0E0] dark:border-[#424242]">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/proyectos"
              className={`py-2 transition-colors ${
                isActive("/proyectos")
                  ? "text-black dark:text-white"
                  : "text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="/contacto"
              className={`py-2 transition-colors ${
                isActive("/contacto")
                  ? "text-black dark:text-white"
                  : "text-[#424242] hover:text-black dark:text-[#E0E0E0] dark:hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctame
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
