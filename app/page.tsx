import {
  ArrowDown,
  Car,
  Plane,
  Snowflake,
  Pill,
  AlertTriangle,
  Anchor,
  Star,
  Palette,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: Car,
      title: "Automotive",
      description: "Specialized handling of vehicles, parts, and automotive equipment with secure transport solutions.",
      href: "/services/automotive",
    },
    {
      icon: Plane,
      title: "Aerospace",
      description: "Critical aerospace components and equipment transported with precision and compliance.",
      href: "/services/aerospace",
    },
    {
      icon: Snowflake,
      title: "Perishables",
      description: "Temperature-controlled logistics for fresh produce, food, and time-sensitive goods.",
      href: "/services/perishables",
    },
    {
      icon: Pill,
      title: "Pharmaceuticals",
      description: "Compliant cold chain and secure transport for medical and pharmaceutical products.",
      href: "/services/pharmaceuticals",
    },
    {
      icon: AlertTriangle,
      title: "Dangerous Goods",
      description: "Expert handling of hazardous materials with full regulatory compliance and safety protocols.",
      href: "/services/dangerous-goods",
    },
    {
      icon: Anchor,
      title: "Ship Spares",
      description: "Urgent delivery of marine parts and equipment to ports worldwide with 24/7 support.",
      href: "/services/ship-spares",
    },
    {
      icon: Star,
      title: "White Glove Services",
      description: "Premium handling for high-value, fragile, or specialized cargo requiring extra care.",
      href: "/services/white-glove",
    },
    {
      icon: Palette,
      title: "Artwork",
      description: "Museum-quality transport for fine art, antiques, and cultural artifacts with custom crating.",
      href: "/services/artwork",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Time-critical logistics for exhibitions, trade shows, and special events worldwide.",
      href: "/services/events",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-cyan-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight">
                FREIGHT
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-slate-700">
                  FORWARD
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                Revolutionizing global logistics with specialized freight solutions that move at the speed of business
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
                >
                  <Link href="/quote">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-cyan-100 to-slate-100 flex items-center justify-center">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-cyan-200 to-slate-200 flex items-center justify-center">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-cyan-500 to-slate-700 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center py-8 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center cursor-pointer hover:bg-cyan-600 transition-colors">
          <ArrowDown className="w-6 h-6 text-white animate-bounce" />
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Specialized Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From automotive to aerospace, we deliver tailored freight solutions for every industry with unmatched
              expertise and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-slate-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-slate-700 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Ship?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get your freight moving with our expert logistics team. Contact us today for a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
            >
              <Link href="/quote">Request Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
