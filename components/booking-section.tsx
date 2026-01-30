'use client';

import { BookingWidget } from './BookingWidget';

export function BookingSection() {
  return (
    <section id="booking" className="py-32 md:py-40 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-stone-800 mb-6">
              Make an Enquiry
            </h2>
            <p className="text-base md:text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
              Complete the form below to get in touch
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200 bg-white">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

