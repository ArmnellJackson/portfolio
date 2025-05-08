import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Armnell Jackson Gómez Garcia | Desarrollador Full Stack",
  description:
    "Portfolio personal de Armnell Jackson Gómez Garcia, desarrollador full stack especializado en crear experiencias digitales impactantes y funcionales.",
  keywords:
    "desarrollador full stack, desarrollo web, react, next.js, typescript, javascript, aws, portfolio, armnell jackson gómez garcia",
  authors: [{ name: "Armnell Jackson Gómez Garcia" }],
  creator: "Armnell Jackson Gómez Garcia",
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://armnell-jackson.github.io",
    title: "Armnell Jackson Gómez Garcia | Desarrollador Full Stack",
    description:
      "Portfolio personal de Armnell Jackson Gómez Garcia, desarrollador full stack especializado en crear experiencias digitales impactantes y funcionales.",
    siteName: "Portfolio de Armnell Jackson Gómez Garcia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armnell Jackson Gómez Garcia | Desarrollador Full Stack",
    description:
      "Portfolio personal de Armnell Jackson Gómez Garcia, desarrollador full stack especializado en crear experiencias digitales impactantes y funcionales.",
    creator: "@armnelljackson",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
