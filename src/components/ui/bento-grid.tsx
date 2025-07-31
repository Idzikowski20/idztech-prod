import type React from "react"
import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  onClick,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group/bento flex h-80 w-full flex-col justify-between space-y-4 rounded-xl border border-gray-600/30 p-6 transition duration-200 hover:shadow-xl hover:border-gray-500/50 relative overflow-hidden",
        className,
      )}
      style={{ backgroundColor: "#151619" }}
    >
      {/* Texture background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url(/images/texture.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Shine mask */}
      <div
        className="pointer-events-none absolute -top-1/2 left-0 w-full h-[200%] bg-center bg-no-repeat opacity-0 transition-all duration-700 group-hover/bento:opacity-30"
        style={{
          backgroundImage: "url(/images/bg-shine.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Animation area - fixed height */}
        <div className="flex-shrink-0 mb-4">{header}</div>

        {/* Text content - fixed positioning */}
        <div className="flex-grow flex flex-col justify-end">
          <div className="mb-2 font-sans text-lg font-bold text-gray-200">{title}</div>
          <div className="font-sans text-sm font-normal text-gray-400">{description}</div>
        </div>
      </div>
    </div>
  )
}
