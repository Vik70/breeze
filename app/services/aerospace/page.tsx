import { Plane, Shield, Clock, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AerospacePage() {
  const features = [
    {
      icon: Shield,
      title: "Security Compliance",
      description: "Full compliance with aviation security regulations and handling protocols",
    },
    {
      icon: Clock,
      title: "AOG Support",
      description: "Aircraft on Ground emergency support with 24/7 expedited services",
    },
    {
      icon: Award,
      title: "Certified Handling",
      description: "Specialized team certified in aerospace component handling and transport",
    },
  ]

  const services = [
    "Aircraft Components",
    "Avionics Equipment",
    "Engine Parts",
    "Ground Support Equipment",
    "AOG Emergency Services",
    "Temperature-Sensitive Items",
    "Hazardous Materials (DG)",
    "White Glove Handling",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-slate-700 rounded-lg flex items-center justify-center">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">Aerospace Logistics</h1>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed">
                Critical aerospace components and equipment transported with the highest levels of precision, security,
                and compliance. Supporting the aviation industry with reliable logistics solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
                >
                  <Link href="/quote">Get Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Aerospace Logistics"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Aerospace Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meeting the stringent requirements of the aerospace industry with specialized handling and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-slate-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Specialized Aerospace Services</h2>
              <p className="text-xl text-slate-600 mb-8">
                From routine components to emergency AOG situations, we handle all aerospace logistics needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Aerospace Services"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Aerospace Logistics Support?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Trust our certified aerospace logistics team to handle your critical components with precision and care.
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
              <Link href="/contact">24/7 AOG Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
