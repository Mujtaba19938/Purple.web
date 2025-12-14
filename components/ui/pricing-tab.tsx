"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/components/theme-provider"

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  discount?: boolean
}

export function Tab({
  text,
  selected,
  setSelected,
  discount = false,
}: TabProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const safeSelected = mounted ? selected : false
  
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative w-fit px-4 py-2 text-sm font-semibold capitalize transition-colors",
        discount && "flex items-center justify-center gap-2.5"
      )}
      style={{
        color: isDark ? '#ffffff' : (selected ? '#000000' : '#6b7280')
      }}
    >
      <span className="relative z-10">{text}</span>
      {safeSelected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full shadow-lg"
          style={{ 
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#f3f4f6',
          }}
        />
      )}
      {discount && (
        <Badge
          variant="secondary"
          className="relative z-10 whitespace-nowrap shadow-none"
          style={selected ? {
            backgroundColor: isDark ? 'hsl(var(--muted))' : '#e5e7eb',
            color: isDark ? '#ffffff' : '#000000'
          } : {}}
        >
          Save 35%
        </Badge>
      )}
    </button>
  )
}

