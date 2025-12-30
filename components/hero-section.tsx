'use client';

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-32 md:py-40 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-stone-800 mb-6 tracking-tight">
            Dr Xanthe Wolter-Ferguson
          </h1>

          <p className="text-lg md:text-xl text-stone-600 mb-16 font-light leading-relaxed">
            HCPC-registered Counselling Psychologist | Witney & Oxford | In-person and online
          </p>

          <div className="max-w-2xl mx-auto space-y-6 mb-12 text-left">
            <p className="text-base md:text-lg text-stone-700 leading-relaxed">
              I offer a warm, non-judgemental space to explore whatever brings you to therapy. Whether you're struggling with anxiety, low mood, relationship difficulties, or simply feeling stuck, I work collaboratively with you to better understand your experiences and find meaningful ways forward.
            </p>
            <p className="text-base md:text-lg text-stone-700 leading-relaxed">
              My approach is integrative, drawing on cognitive-behavioural, psychodynamic, and humanistic traditions. I believe in tailoring therapy to fit you, not the other way around. Sessions are confidential, compassionate, and grounded in evidence-based practice.
            </p>
          </div>

          <Button 
            asChild 
            size="lg"
            className="bg-emerald-700 text-white hover:bg-emerald-800 font-normal px-10 py-6 text-base rounded-md shadow-sm transition-colors"
          >
            <a href="#booking" onClick={scrollToBooking}>Book an introductory session</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
