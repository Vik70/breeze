import { Users, Globe, Award, TrendingUp, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Countries Served" },
    { number: "10K+", label: "Shipments Delivered" },
    { number: "99.8%", label: "On-Time Delivery" },
  ]

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make is centered around delivering exceptional value to our clients.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide network with local expertise to handle shipments across all continents.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of quality, safety, and reliability in every shipment.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to optimize logistics and provide real-time visibility.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-slate-700">Breeze</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing global freight forwarding with specialized solutions that move at the speed of
              business. Your trusted partner for complex logistics challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-slate-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Founded in 2025, Breeze Freight Services emerged from a simple vision: to make global logistics as
                  smooth and effortless as a gentle breeze. What started as a small freight forwarding company has grown
                  into a trusted global partner for businesses across diverse industries.
                </p>
                <p>
                  Our journey began when our founders recognized the need for specialized logistics solutions that could
                  handle the unique requirements of different industries. From automotive to aerospace, pharmaceuticals
                  to fine art, we developed expertise in handling the most challenging shipments.
                </p>
                <p>
                  Today, we're proud to serve clients worldwide with our comprehensive suite of freight forwarding
                  services, backed by cutting-edge technology and a team of logistics experts who are passionate about
                  delivering excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=500&width=600" alt="Our Story" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive us to deliver exceptional logistics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-slate-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Breeze?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine industry expertise with innovative technology to deliver logistics solutions that exceed
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Specialized expertise across 9 key industries",
                "Global network with local knowledge",
                "24/7 customer support and emergency services",
                "Advanced tracking and visibility technology",
                "Comprehensive insurance and risk management",
                "Regulatory compliance and documentation support",
                "Sustainable and environmentally conscious practices",
                "Competitive pricing with transparent costs",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Why Choose Breeze"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Experience the Breeze Difference?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Breeze for their most critical shipments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
            >
              <Link href="/quote">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
