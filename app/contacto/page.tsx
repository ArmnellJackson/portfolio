"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })

      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

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

        <h1 className="text-3xl font-bold mb-8">Contáctame</h1>

        <div className="grid grid-cols-1 max-w-2xl mx-auto w-full">
          <div className="bg-[#424242] dark:bg-[#424242] rounded-lg p-6">
            <h2 className="text-xl font-medium mb-6 text-black dark:text-white">Envíame un mensaje</h2>

            {submitSuccess ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                <p className="text-white dark:text-white">
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-1 text-white dark:text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-black dark:bg-black border border-[#E0E0E0]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E0E0E0]/50 text-white dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black dark:bg-black border border-[#E0E0E0]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E0E0E0]/50 text-white dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium mb-1 text-white dark:text-white">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full bg-black dark:bg-black border border-[#E0E0E0]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E0E0E0]/50 text-white dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-1 text-white dark:text-white">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black dark:bg-black border border-[#E0E0E0]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E0E0E0]/50 text-white dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full bg-[#E0E0E0] dark:bg-[#E0E0E0] text-black dark:text-black py-2 px-4 rounded-md hover:bg-white dark:hover:bg-white transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/*<div className="bg-[#424242] dark:bg-[#424242] rounded-lg p-6">
            <h2 className="text-xl font-medium mb-6 text-black dark:text-white">Información de contacto</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#E0E0E0] dark:text-[#E0E0E0] mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-white dark:text-white">Email</p>
                  <a
                    href="mailto:contacto@armnelljackson.com"
                    className="text-[#E0E0E0] dark:text-[#E0E0E0] hover:text-white dark:hover:text-white transition-colors"
                  >
                    contacto@armnelljackson.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#E0E0E0] dark:text-[#E0E0E0] mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-white dark:text-white">Teléfono</p>
                  <a
                    href="tel:+123456789"
                    className="text-[#E0E0E0] dark:text-[#E0E0E0] hover:text-white dark:hover:text-white transition-colors"
                  >
                    +12 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#E0E0E0] dark:text-[#E0E0E0] mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-white dark:text-white">Ubicación</p>
                  <p className="text-[#E0E0E0] dark:text-[#E0E0E0]">Ciudad de México, México</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4 text-white dark:text-white">Horario de trabajo</h3>
              <p className="text-[#E0E0E0] dark:text-[#E0E0E0]">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
              <p className="text-[#E0E0E0] dark:text-[#E0E0E0]">Fines de semana: Con cita previa</p>
            </div>
          </div>*/}
        </div>
      </main>

      <Footer />
    </div>
  )
}
