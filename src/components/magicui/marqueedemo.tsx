import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/Marquee";

const reviews = [
  {
    content: "Dzięki IDZTECH nasza strona jest widoczna w Google!",
    author: "Katarzyna Mazur",
    position: "CEO, Innowacje24",
    img: "https://avatar.vercel.sh/katarzyna",
  },
  {
    content: "Nowa strona wygląda świetnie i działa szybko.",
    author: "Joanna Wójcik",
    position: "Właścicielka, Stomatologia Nova",
    img: "https://avatar.vercel.sh/joanna",
  },
  {
    content: "Profesjonalne podejście i szybka realizacja.",
    author: "Michał Zieliński",
    position: "Marketing Manager, ModaPro",
    img: "https://avatar.vercel.sh/michal",
  },
  {
    content: "Sklep online działa bez zarzutu, polecam!",
    author: "Anna Nowak",
    position: "E-commerce Manager, TrendyShop",
    img: "https://avatar.vercel.sh/anna",
  },
  {
    content: "Świetna obsługa i wsparcie techniczne.",
    author: "Tomasz Lewandowski",
    position: "CTO, TechSolutions",
    img: "https://avatar.vercel.sh/tomasz",
  },
  {
    content: "Zwiększyliśmy sprzedaż dzięki nowemu sklepowi.",
    author: "Paulina Krawczyk",
    position: "Właścicielka, ModaDlaCiebie",
    img: "https://avatar.vercel.sh/paulina",
  },
  {
    content: "Polecam za kreatywność i terminowość!",
    author: "Grzegorz Pawlak",
    position: "Manager, BiznesPlus",
    img: "https://avatar.vercel.sh/grzegorz",
  },
  {
    content: "Super kontakt i szybka pomoc przy wdrożeniu.",
    author: "Ewa Szymańska",
    position: "Project Manager, WebStart",
    img: "https://avatar.vercel.sh/ewa",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  author,
  position,
  content,
}: {
  img: string;
  author: string;
  position: string;
  content: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {author}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{position}</p>
        </div>
      </div>
      <span className="mt-2 text-sm">{content}</span>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center mb-12">
          <div className="text-center mb-12">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <h2>Co mówią o nas </h2>
          <div className="flex justify-center items-center w-full">
            <h2 className="relative z-10 p-1 text-main">nasi</h2>
            <h2 className="p-1">klienci 🤝</h2>
          </div>
        </div>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-premium-light/70 dark:text-premium-light/70 light:text-premium-dark">
          Zaufało nam już ponad 10 firm z różnych branż. Poznaj opinie naszych klientów i przekonaj się, że jesteśmy właściwym wyborem dla Twojego biznesu.
          </p>
        </div>
        </div>
        <div className="relative flex w-[70%] max-w-3xl flex-col items-center justify-center overflow-hidden mx-auto">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.author} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.author} {...review} />
            ))}
          </Marquee>
          <style>{`
            .dark .marquee-gradient {
              --tw-gradient-from: #0e0e11 !important;
              --tw-gradient-stops: #0e0e11, var(--tw-gradient-to) !important;
            }
          `}</style>
          <div
            className="marquee-gradient pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-neutral-900 dark:to-transparent z-10"
            style={{
              '--tw-gradient-from': '#ffffff',
              '--tw-gradient-stops': '#ffffff, var(--tw-gradient-to)',
              '--tw-gradient-to': 'transparent',
            } as React.CSSProperties}
          />
          <div
            className="marquee-gradient pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-neutral-900 dark:to-transparent z-10"
            style={{
              '--tw-gradient-from': '#ffffff',
              '--tw-gradient-stops': '#ffffff, var(--tw-gradient-to)',
              '--tw-gradient-to': 'transparent',
            } as React.CSSProperties}
          />
        </div>
      </div>
    </section>
  );
}
