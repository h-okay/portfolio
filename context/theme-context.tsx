"use client"

import { createContext, useContext, useEffect, useState } from "react"

import { Theme } from "@/lib/types"

const ThemeContext = createContext<ThemeContextType | null>(null)

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null
    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark")
        document.body.classList.add("grainyDark")
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
      document.body.classList.add("grainyDark")
    }
  }, [])

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark")
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
      document.body.classList.add("grainyDark")
      document.body.classList.remove("grainy")
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
      document.body.classList.add("grainy")
      document.body.classList.remove("grainyDark")
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }

  return context
}
