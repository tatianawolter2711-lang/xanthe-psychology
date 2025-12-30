import { Cloud, Heart, Compass, Shield, Users, Briefcase } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Anxiety & Stress",
    description: "Support for worry, panic, social anxiety, and managing overwhelming stress"
  },
  {
    icon: Heart,
    title: "Low Mood & Depression",
    description: "Working through periods of sadness, loss of motivation, and emotional exhaustion"
  },
  {
    icon: Compass,
    title: "Identity & Change",
    description: "Exploring who you are during life transitions, career shifts, or personal growth"
  },
  {
    icon: Shield,
    title: "Trauma",
    description: "Processing difficult experiences with evidence-based, trauma-informed approaches"
  },
  {
    icon: Users,
    title: "Relationships",
    description: "Understanding patterns, improving communication, and navigating interpersonal challenges"
  },
  {
    icon: Briefcase,
    title: "Work & Life Balance",
    description: "Addressing burnout, perfectionism, and finding sustainable ways of living"
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 md:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-stone-800 mb-6">
              Areas of Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div 
                  key={index} 
                  className="bg-stone-50 border border-stone-200 rounded-lg p-8 hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-emerald-700 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-normal text-stone-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
