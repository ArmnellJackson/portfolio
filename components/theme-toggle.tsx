"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-[#E0E0E0] dark:bg-[#424242] text-black dark:text-white hover:bg-[#424242] hover:text-white dark:hover:bg-[#E0E0E0] dark:hover:text-black transition-colors"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
