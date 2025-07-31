"use client"

import type React from "react"
import { forwardRef, useRef, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/animated-beam"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-[#121315e0]-800 border-gray-600 p-3",
          "[box-shadow:0_0_20px_-12px_rgba(255,255,255,0.3)]",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Wait for all refs to be available
    const checkRefs = () => {
      if (
        containerRef.current &&
        div1Ref.current &&
        div2Ref.current &&
        div3Ref.current &&
        div4Ref.current &&
        div5Ref.current &&
        div6Ref.current &&
        div7Ref.current
      ) {
        setIsReady(true)
      }
    }

    checkRefs()

    // If not ready, try again after a short delay
    if (!isReady) {
      const timer = setTimeout(checkRefs, 100)
      return () => clearTimeout(timer)
    }
  }, [isReady])

  return (
    <div
      className={cn("relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10", className)}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.client />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Icons.agency />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.typescript />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.lovable />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.cursor />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams - only render when refs are ready */}
      {isReady && (
        <>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div6Ref}
            duration={3}
            pathColor="rgba(255,255,255,0.1)"
            gradientStartColor="#60A5FA"
            gradientStopColor="#A78BFA"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div6Ref}
            duration={3}
            pathColor="rgba(255,255,255,0.1)"
            gradientStartColor="#60A5FA"
            gradientStopColor="#A78BFA"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div6Ref}
            duration={3}
            pathColor="rgba(255,255,255,0.1)"
            gradientStartColor="#60A5FA"
            gradientStopColor="#A78BFA"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div4Ref}
            toRef={div6Ref}
            duration={3}
            pathColor="rgba(255,255,255,0.1)"
            gradientStartColor="#60A5FA"
            gradientStopColor="#A78BFA"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div6Ref}
            duration={3}
            pathColor="rgba(255,255,255,0.1)"
            gradientStartColor="#60A5FA"
            gradientStopColor="#A78BFA"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div7Ref}
            duration={3}
            pathColor="rgba(255,255,255,0.1)"
            gradientStartColor="#60A5FA"
            gradientStopColor="#A78BFA"
          />
        </>
      )}
    </div>
  )
}

const Icons = {
  react: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse rx="10" ry="4.5" cx="12" cy="12" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse rx="10" ry="4.5" cx="12" cy="12" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
      <ellipse rx="10" ry="4.5" cx="12" cy="12" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  nextjs: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <path d="M7 12.5L12 7.5L17 12.5" stroke="#000" strokeWidth="1.5" />
      <path d="M12 7.5V17" stroke="#000" strokeWidth="1.5" />
    </svg>
  ),
  typescript: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <text x="4" y="18" fontSize="12" fill="#fff" fontFamily="Arial">TS</text>
    </svg>
  ),
  lovable: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s-6-4.35-6-8.5A4.5 4.5 0 0112 8a4.5 4.5 0 016 4.5C18 16.65 12 21 12 21z" fill="#FF6B81" />
    </svg>
  ),
  cursor: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L20 12L13 13L12 20L4 4Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
    </svg>
  ),
  agency: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01" />
      <path d="M9 12v.01" />
      <path d="M9 15v.01" />
      <path d="M9 18v.01" />
    </svg>
  ),
  client: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
}
