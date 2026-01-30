import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center gap-2">
            <a href="#about" className="text-xl md:text-2xl font-serif font-normal text-stone-800 hover:text-stone-600 transition-colors">
              Dr Xanthe Wolter-Ferguson
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#about"
              className="text-sm text-stone-600 hover:text-stone-800 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm text-stone-600 hover:text-stone-800 transition-colors"
            >
              Areas of Support
            </a>
            <a
              href="#approach"
              className="text-sm text-stone-600 hover:text-stone-800 transition-colors"
            >
              How I Work
            </a>
            <a
              href="#practical"
              className="text-sm text-stone-600 hover:text-stone-800 transition-colors"
            >
              Practical Info
            </a>
          </nav>

          <Button asChild size="sm" className="bg-emerald-700 text-white hover:bg-emerald-800 font-normal rounded-md hidden md:inline-flex">
            <a href="#booking">Make an Enquiry</a>
          </Button>

          {/* Mobile CTA */}
          <Button asChild size="sm" className="bg-emerald-700 text-white hover:bg-emerald-800 font-normal rounded-md md:hidden">
            <a href="#booking">Enquire</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
