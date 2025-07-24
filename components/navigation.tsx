"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: "Automotive", href: "/services/automotive" },
    { name: "Aerospace", href: "/services/aerospace" },
    { name: "Perishables", href: "/services/perishables" },
    { name: "Pharmaceuticals", href: "/services/pharmaceuticals" },
    { name: "Dangerous Goods", href: "/services/dangerous-goods" },
    { name: "Ship Spares", href: "/services/ship-spares" },
    { name: "White Glove", href: "/services/white-glove" },
    { name: "Artwork", href: "/services/artwork" },
    { name: "Events", href: "/services/events" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">SOLUTIONS</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
              ABOUT US
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
              CONTACT
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
            >
              <Link href="/quote">GET QUOTE</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-cyan-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <div className="space-y-1">
                <div className="text-slate-700 font-medium px-3 py-2">SERVICES</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-6 py-2 text-sm text-slate-600 hover:text-cyan-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/about"
                className="block px-3 py-2 text-slate-700 hover:text-cyan-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-slate-700 hover:text-cyan-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
                >
                  <Link href="/quote" onClick={() => setIsOpen(false)}>
                    GET QUOTE
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
