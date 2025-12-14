"use client"

import * as React from "react"
import { BadgeCheck, ArrowRight } from "lucide-react"
import NumberFlow from "@number-flow/react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useTheme } from "@/components/theme-provider"

export interface PricingTier {
  name: string
  price: Record<string, number | string>
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  popular?: boolean
}

interface PricingCardProps {
  tier: PricingTier
  paymentFrequency: string
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
  const price = tier.price[paymentFrequency]
  const isHighlighted = tier.highlighted
  const isPopular = tier.popular
  const isEnterprise = tier.name.toLowerCase() === "enterprise"
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-transparent p-2 md:rounded-[1.5rem] md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
<Card
  className={cn(
    "relative flex flex-col gap-6 overflow-hidden p-6 rounded-xl transition-colors",
    // Base: white background & black text for ALL cards, except Enterprise in light mode
    isEnterprise && !isDark
      ? "border border-gray-800 bg-black text-white"
      : "border border-gray-200 bg-white text-black",
    isEnterprise && "shadow-[0_0_0_2px_rgba(0,0,0,0.06)]", // Enterprise highlight border
    isPopular && "ring-2 ring-primary"
  )}
>

  {/* GRID ONLY ON ENTERPRISE */}
  {isEnterprise && <EnterpriseGridBackground isDark={isDark} />}

  {/* Title */}
  <h2 className={cn(
    "flex items-center gap-3 text-xl font-semibold",
    isEnterprise && !isDark ? "text-white" : "text-black"
  )}>
    {tier.name}
  </h2>

  {/* Price Section */}
  <div className="relative h-12">
    {typeof price === "number" ? (
      <>
        <NumberFlow
          format={{
            style: "currency",
            currency: "USD",
            trailingZeroDisplay: "stripIfInteger",
          }}
          value={price}
          className={cn(
            "text-4xl font-semibold",
            isEnterprise && !isDark ? "text-white" : "text-black"
          )}
        />
        <p className={cn(
          "text-xs -mt-1",
          isEnterprise && !isDark ? "text-gray-300" : "text-gray-700"
        )}>Per month/user</p>
      </>
    ) : (
      <h1 className={cn(
        "text-4xl font-semibold",
        isEnterprise && !isDark ? "text-white" : "text-black"
      )}>
        {price}
      </h1>
    )}
  </div>

  {/* Description */}
  <h3 className={cn(
    "text-sm font-medium",
    isEnterprise && !isDark ? "text-white" : "text-black"
  )}>
    {tier.description}
  </h3>

  {/* Features */}
  <ul className="space-y-2 flex-1">
    {tier.features.map((feature, index) => (
      <li
        key={index}
        className={cn(
          "flex items-center gap-2 text-sm font-medium",
          isEnterprise && !isDark ? "text-white" : "text-black"
        )}
      >
        <BadgeCheck className={cn(
          "h-4 w-4",
          isEnterprise && !isDark ? "text-white" : "text-black"
        )} />
        {feature}
      </li>
    ))}
  </ul>

  {/* CTA Button */}
  <Button className={cn(
    "w-full",
    isEnterprise && !isDark
      ? "bg-black text-white hover:bg-gray-900 border border-gray-800"
      : "bg-black text-white hover:bg-gray-800"
  )}>
    {tier.cta}
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>

</Card>

    </div>
  )
}

const HighlightedBackground = ({ isEnterprise = false }: { isEnterprise?: boolean }) => (
  <div className={cn(
    "absolute inset-0 bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]",
    isEnterprise
      ? "bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"
      : "bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"
  )} />
)

const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
)

const EnterpriseGridBackground = ({ isDark }: { isDark: boolean }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        "bg-[size:45px_45px]",
        isDark
          ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"
      )}
    />
  )
};
