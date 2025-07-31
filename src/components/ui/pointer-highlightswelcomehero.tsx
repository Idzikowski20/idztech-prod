import { PointerHighlight } from "@/components/ui/pointer-highlight";
 
export function PointerHighlightDemo() {
  return (
    <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
      <h2>Zaufaj specjalistom, którzy łączą design z</h2>
      <div className="flex justify-center items-center w-full">
      <PointerHighlight rectangleClassName="bg-premium-purple-500 mt-2 border-neutral-300 dark:border-neutral-600"
        pointerClassName="text-premium-purple-500">
        <h2 className="relative z-10 p-1">realnymi wynikami</h2>
      </PointerHighlight>
      </div>
    </div>
  );
}