import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowIWorkSection } from "@/components/how-i-work-section"
import { PracticalInfoSection } from "@/components/practical-info-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowIWorkSection />
      <PracticalInfoSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
