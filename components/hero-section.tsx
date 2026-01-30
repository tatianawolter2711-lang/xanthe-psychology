'use client';

import Image from "next/image"
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8">
            <div className="relative w-44 h-44 md:w-52 md:h-52 flex-shrink-0">
              <div className="absolute inset-0 rounded-full ring-4 ring-stone-200/60 ring-offset-4 ring-offset-stone-50"></div>
              <Image
                src="/IMG_3072.jpg"
                alt="Dr Xanthe Wolter-Ferguson"
                fill
                className="rounded-full object-cover shadow-xl"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-stone-800 tracking-tight leading-tight">
              Dr Xanthe Wolter-Ferguson
            </h1>
          </div>

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
            <a href="#booking" onClick={scrollToBooking}>Make an Enquiry</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
