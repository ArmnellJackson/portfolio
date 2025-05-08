"use client"

import type React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactoPage() {
  const [state, handleSubmit] = useForm("xpwdrazz")
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset()
    }
  }, [state.succeeded])

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

            {state.succeeded ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                <p className="text-white dark:text-white">
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </p>
              </div>
            ) : null}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-1 text-white dark:text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full bg-black dark:bg-black border border-[#E0E0E0]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E0E0E0]/50 text-white dark:text-white"
                />
                <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black dark:bg-black border border-[#E0E0E0]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E0E0E0]/50 text-white dark:text-white"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium mb-1 text-white dark:text-white">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  required
                  className="w-full bg-black dark:bg-black border border-[#E0E0E0]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E0E0E0]/50 text-white dark:text-white"
                />
                <ValidationError prefix="Asunto" field="asunto" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-1 text-white dark:text-white">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  className="w-full bg-black dark:bg-black border border-[#E0E0E0]/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E0E0E0]/50 text-white dark:text-white"
                />
                <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center justify-center w-full bg-[#E0E0E0] dark:bg-[#E0E0E0] text-black dark:text-black py-2 px-4 rounded-md hover:bg-white dark:hover:bg-white transition-colors disabled:opacity-70"
              >
                {state.submitting ? (
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
