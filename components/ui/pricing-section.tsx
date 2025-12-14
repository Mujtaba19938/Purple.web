"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"
import { useTheme } from "@/components/theme-provider"
import ClientOnly from "@/components/client-only"

interface PricingSectionProps {
  title: string
  subtitle: string
  tiers: PricingTier[]
  frequencies: string[]
}

export function PricingSection({
  title,
  subtitle,
  tiers,
  frequencies,
}: PricingSectionProps) {
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0])
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-medium md:text-5xl text-gray-900 dark:text-white transition-colors">{title}</h1>
          <p className="text-gray-600 dark:text-white/70 transition-colors">{subtitle}</p>
        </div>
        <ClientOnly>
          <div 
            className="mx-auto flex w-fit rounded-full backdrop-blur-sm p-1 transition-colors" 
            style={{ 
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #e5e7eb',
            }}
          >
            {frequencies.map((freq) => (
              <Tab
                key={freq}
                text={freq}
                selected={selectedFrequency === freq}
                setSelected={setSelectedFrequency}
                discount={freq === "yearly"}
              />
            ))}
          </div>
        </ClientOnly>
      </div>
      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            paymentFrequency={selectedFrequency}
          />
        ))}
      </div>
    </section>
  )
}

