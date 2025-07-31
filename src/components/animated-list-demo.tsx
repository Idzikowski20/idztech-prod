"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/animated-list"

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: "Projekt rozpoczęty",
    description: "Twój projekt został przyjęty do realizacji",
    time: "Dzisiaj",
    icon: "🚀",
    color: "#00C9A7",
  },
  {
    name: "Mockupy gotowe",
    description: "Projekty graficzne wysłane do akceptacji",
    time: "2 dni temu",
    icon: "🎨",
    color: "#FFB800",
  },
  {
    name: "Kodowanie w toku",
    description: "Rozpoczęliśmy implementację strony",
    time: "3 dni temu",
    icon: "💻",
    color: "#FF3D71",
  },
  {
    name: "Testy funkcjonalności",
    description: "Sprawdzamy działanie wszystkich elementów",
    time: "5 dni temu",
    icon: "🔧",
    color: "#1E86FF",
  },
  {
    name: "Optymalizacja SEO",
    description: "Konfigurujemy meta tagi i strukturę URL",
    time: "6 dni temu",
    icon: "📈",
    color: "#9C40FF",
  },
  {
    name: "Wersja testowa online",
    description: "Link do podglądu wysłany na email",
    time: "1 tydzień temu",
    icon: "🌐",
    color: "#FF6B35",
  },
  {
    name: "Poprawki wprowadzone",
    description: "Uwagi z Twojej strony zostały uwzględnione",
    time: "1 tydzień temu",
    icon: "✅",
    color: "#4ECDC4",
  },
  {
    name: "Strona opublikowana",
    description: "Projekt zakończony i przekazany klientowi",
    time: "2 tygodnie temu",
    icon: "🎉",
    color: "#00C9A7",
  },
]

notifications = Array.from({ length: 6 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles with better visibility
        "bg-[#121315e0]-800/50 backdrop-blur-sm border border-gray-600/40",
        "[box-shadow:0_0_0_1px_rgba(255,255,255,.1),0_2px_4px_rgba(0,0,0,.4),0_12px_24px_rgba(0,0,0,.2)]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl shadow-lg"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white drop-shadow-md">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-300">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-200 drop-shadow-sm">{description}</p>
        </div>
      </div>
    </figure>
  )
}

export default function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn("relative flex h-[500px] w-full flex-col overflow-hidden p-2", className)}>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-[#121315e0]"></div>
    </div>
  )
}
