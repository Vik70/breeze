"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    origin: "",
    destination: "",
    weight: "",
    dimensions: "",
    value: "",
    timeline: "",
    description: "",
    urgentDelivery: false,
    insurance: false,
    tracking: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Quote request submitted:", formData)
    alert("Thank you for your quote request! We'll get back to you within 24 hours.")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Get Your Quote</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tell us about your shipping needs and we'll provide you with a competitive quote within 24 hours.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Quote Request Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <Label htmlFor="service">Service Type *</Label>
                <Select onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="aerospace">Aerospace</SelectItem>
                    <SelectItem value="perishables">Perishables</SelectItem>
                    <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                    <SelectItem value="dangerous-goods">Dangerous Goods</SelectItem>
                    <SelectItem value="ship-spares">Ship Spares</SelectItem>
                    <SelectItem value="white-glove">White Glove Services</SelectItem>
                    <SelectItem value="artwork">Artwork</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Shipping Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="origin">Origin Location *</Label>
                  <Input
                    id="origin"
                    required
                    placeholder="City, Country"
                    value={formData.origin}
                    onChange={(e) => handleInputChange("origin", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="destination">Destination *</Label>
                  <Input
                    id="destination"
                    required
                    placeholder="City, Country"
                    value={formData.destination}
                    onChange={(e) => handleInputChange("destination", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="0"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="dimensions">Dimensions (L x W x H cm)</Label>
                  <Input
                    id="dimensions"
                    placeholder="100 x 50 x 30"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange("dimensions", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="value">Cargo Value (USD)</Label>
                  <Input
                    id="value"
                    type="number"
                    placeholder="0"
                    value={formData.value}
                    onChange={(e) => handleInputChange("value", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="timeline">Required Timeline</Label>
                  <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (1-2 days)</SelectItem>
                      <SelectItem value="standard">Standard (3-7 days)</SelectItem>
                      <SelectItem value="economy">Economy (7-14 days)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Services */}
              <div>
                <Label className="text-base font-semibold">Additional Services</Label>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="urgent"
                      checked={formData.urgentDelivery}
                      onCheckedChange={(checked) => handleInputChange("urgentDelivery", checked as boolean)}
                    />
                    <Label htmlFor="urgent">Urgent Delivery</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="insurance"
                      checked={formData.insurance}
                      onCheckedChange={(checked) => handleInputChange("insurance", checked as boolean)}
                    />
                    <Label htmlFor="insurance">Cargo Insurance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="tracking"
                      checked={formData.tracking}
                      onCheckedChange={(checked) => handleInputChange("tracking", checked as boolean)}
                    />
                    <Label htmlFor="tracking">Real-time Tracking</Label>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Additional Details</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide any additional information about your shipment..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
              >
                Request Quote
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
