"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const isDark = theme === "dark"

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative h-10 w-20 rounded-full bg-gray-200 dark:bg-gray-800" />
    )
  }

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={cn(
        "relative h-10 w-20 rounded-full transition-all duration-500 ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "shadow-lg shadow-black/10 dark:shadow-black/30",
        "overflow-hidden",
        isDark
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"
          : "bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200"
      )}
    >
      {/* Glow effects */}
      <div
        className={cn(
          "absolute inset-0 rounded-full opacity-0 transition-opacity duration-500",
          "overflow-hidden",
          isDark
            ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-100 blur-xl"
            : "bg-gradient-to-r from-amber-400/30 via-orange-400/30 to-amber-400/30 opacity-100 blur-xl"
        )}
      />

      {/* Sliding pill background */}
      <motion.div
        className={cn(
          "absolute inset-0.5 rounded-full",
          isDark ? "bg-gray-900" : "bg-amber-100"
        )}
        initial={false}
        animate={{
          x: isDark ? 40 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      {/* Icons container */}
      <div className="relative z-10 flex h-full w-full items-center justify-between px-2">
        {/* Sun Icon */}
        <motion.div
          className="flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 0.8 : 1,
            opacity: isDark ? 0.3 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          <Sun
            className={cn(
              "h-5 w-5 transition-colors duration-300",
              isDark ? "text-gray-500" : "text-amber-600"
            )}
            fill={isDark ? "none" : "currentColor"}
          />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          className="flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 1 : 0.8,
            opacity: isDark ? 1 : 0.3,
            rotate: isDark ? 0 : -90,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          <Moon
            className={cn(
              "h-5 w-5 transition-colors duration-300",
              isDark ? "text-blue-300" : "text-gray-500"
            )}
            fill={isDark ? "currentColor" : "none"}
          />
        </motion.div>
      </div>

      {/* Sliding knob */}
      <motion.div
        className={cn(
          "absolute top-1 h-8 w-8 rounded-full shadow-lg",
          "ring-2",
          isDark
            ? "bg-gray-700 ring-gray-600"
            : "bg-white ring-amber-200"
        )}
        initial={false}
        animate={{
          x: isDark ? 44 : 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Inner glow on knob */}
        <div
          className={cn(
            "absolute inset-0 rounded-full opacity-50 blur-sm transition-opacity duration-300",
            isDark
              ? "bg-gradient-to-br from-blue-400/50 to-purple-400/50"
              : "bg-gradient-to-br from-amber-300/50 to-orange-300/50"
          )}
        />
      </motion.div>

      {/* Stars in dark mode */}
      <AnimatePresence>
        {isDark && (
          <>
            {[
              { left: '20%', top: '30%', x: 2, y: -2 },
              { left: '45%', top: '50%', x: -2, y: 2 },
              { left: '70%', top: '30%', x: 1, y: 1 },
            ].map((star, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-blue-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0.8, 1],
                  scale: [0, 1, 0.9, 1],
                  x: [0, star.x],
                  y: [0, star.y],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                style={{
                  left: star.left,
                  top: star.top,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </button>
  )
}

