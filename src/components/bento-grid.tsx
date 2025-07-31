"use client"

import type React from "react"
import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useState, useRef } from "react"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full max-w-[1088px] auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  )
}

const BentoCard = ({ name, className, background, Icon, description, href, cta, ...props }: BentoCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePosition({ x, y })
  }

  return (
    <div
      ref={cardRef}
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        // dark styles with more visible texture
        "bg-[#1213159e] backdrop-blur-sm",
        "[box-shadow:0_0_0_1px_rgba(255,255,255,.1),0_2px_4px_rgba(0,0,0,.4),0_12px_24px_rgba(0,0,0,.2)]",
        className,
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div
        className="pointer-events-none absolute -top-1/2 left-0 w-full h-[200%] bg-center bg-no-repeat opacity-100 mix-blend-color-lighten"
        style={{
          backgroundImage: "url('/images/bg-shine.png')",
          backgroundSize: "cover",
        }}
      />
      {/* Base texture with higher opacity - always visible */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Enhanced texture on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `url('/images/texture.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(1.3) contrast(1.2)",
          maskImage: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, black 0%, black 40%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, black 0%, black 40%, transparent 80%)`,
        }}
      />

      {/* Subtle overlay to maintain readability */}
      <div className="absolute inset-0 bg-[#121315e0]" />

      <div className="relative z-10">{background}</div>
      <div className="relative z-10 p-4">
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300">
          <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out drop-shadow-lg" />
          <h3 className="text-xl font-semibold text-white drop-shadow-lg">{name}</h3>
          <p className="max-w-lg text-gray-300 drop-shadow-md">{description}</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[.03] z-20" />
    </div>
  )
}

export { BentoCard, BentoGrid }
