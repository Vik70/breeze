import { Pill, Shield, Thermometer, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PharmaceuticalsPage() {
  const features = [
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Strict adherence to pharmaceutical transport regulations and standards."
    },
    {
      icon: Thermometer,
      title: "Cold Chain Integrity",
      description: "Continuous temperature control for sensitive medicines and vaccines."
    },
    {
      icon: Pill,
      title: "Secure Handling",
      description: "Specialized packaging and handling for high-value pharmaceuticals."
    },
  ]

  const services = [
    "Vaccine Distribution",
    "Clinical Trial Logistics",
    "Temperature-Controlled Transport",
    "Medical Device Shipping",
    "Prescription Drug Delivery",
    "Regulatory Documentation",
    "Chain of Custody",
    "Express Pharma Delivery"
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
                  <Pill className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">Pharmaceutical Logistics</h1>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed">
                Safe, compliant, and reliable logistics for pharmaceuticals, vaccines, and medical devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white">
                  <Link href="/quote">Get Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <img src="/placeholder.svg?height=400&width=600" alt="Pharmaceutical Logistics" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Pharma Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Protecting the integrity of your pharmaceuticals with advanced technology and expertise.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Pharma Services</h2>
              <p className="text-xl text-slate-600 mb-8">
                Comprehensive logistics solutions for the pharmaceutical industry.
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
              <img src="/placeholder.svg?height=500&width=600" alt="Pharma Services" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Pharma Logistics?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Trust our pharma logistics experts to deliver your medicines safely and on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white">
              <Link href="/quote">Request Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 