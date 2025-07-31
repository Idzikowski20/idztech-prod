import { CalendarIcon, GaugeIcon } from "lucide-react"
import { BellIcon, Share2Icon } from "lucide-react"
import { cn } from "@/lib/utils"
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-outputs"
import AnimatedListDemo from "@/components/animated-list-demo"
import { BentoCard, BentoGrid } from "@/components/bento-grid"
import { Marquee } from "@/components/marquee"

const files = [
  {
    name: "PageSpeed: 98/100",
    body: "Strona ładuje się w 0.8 sekundy dzięki optymalizacji obrazów, kompresji CSS/JS i wykorzystaniu CDN.",
  },
  {
    name: "Core Web Vitals",
    body: "Wszystkie wskaźniki Google w zieleni: LCP 1.2s, FID 45ms, CLS 0.05 - idealne dla SEO.",
  },
  {
    name: "Mobile Speed: 95/100",
    body: "Responsywny design z szybkim ładowaniem na urządzeniach mobilnych, optymalizowany dla Google Mobile-First.",
  },
  {
    name: "GTMetrix: Grade A",
    body: "Pełna optymalizacja wydajności z kompresją Gzip, cache przeglądarki i zminifikowanymi plikami.",
  },
  {
    name: "Lighthouse: 96/100",
    body: "Wysokie wyniki w audycie Google Lighthouse dla wydajności, dostępności i najlepszych praktyk.",
  },
  {
    name: "Server Response: 180ms",
    body: "Szybki czas odpowiedzi serwera dzięki SSD, HTTP/2 i zaawansowanemu cache'owaniu.",
  },
]

const features = [
  {
    Icon: GaugeIcon,
    name: "Szybkość strony",
    description: "Monitorujemy i optymalizujemy wydajność Twojej witryny.",
    href: "#",
    cta: "Sprawdź wyniki",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-700/50 bg-[#121315e0] hover:bg-[#121315e0]",
              "backdrop-blur-sm",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white">{f.name}</figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-gray-300">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Informacje na bieżąco",
    description: "Regularnie informujemy o postępach w realizacji projektu.",
    href: "#",
    cta: "Zobacz komunikaty",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Narzędzia i integracje",
    description: "Wykorzystujemy najlepsze narzędzia do tworzenia i optymalizacji.",
    href: "#",
    cta: "Zobacz narzędzia",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Szybkie terminy",
    description: "Realizujemy projekty w ekspresowym tempie bez utraty jakości.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Sprawdź terminy",
    background: (
      <div className="w-full h-full relative top-20 inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-white/20">7-14</div>
          <div className="text-sm font-medium text-gray-400">dni roboczych</div>
          <div className="text-xs text-gray-500">standardowa strona WWW</div>
        </div>
      </div>
    ),
  },
]

export default function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
