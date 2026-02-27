"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-32 md:py-40 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
              Taking the first step can be difficult. I'm here to make it as comfortable as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <Card className="bg-card border-border shadow-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-serif font-light text-foreground">Send a Message</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed font-light">
                  I'll respond within 24 hours to discuss how I can support you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 (0) 1234 567890"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about what brings you here today..."
                      rows={5}
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90 py-6 font-medium">
                    Send Message
                  </Button>

                  <p className="text-muted-foreground text-sm leading-relaxed text-center mt-4">
                    By submitting this form, you agree that your information will be used to respond to your enquiry in accordance with the{' '}
                    <a href="/privacy" className="underline hover:text-foreground">Privacy Notice</a>.
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-border/50">
                  <Phone className="w-5 h-5 text-foreground/40 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-foreground mb-2 font-light">Phone</h3>
                    <p className="text-foreground/70 mb-1">+44 (0) 1234 567890</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm GMT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-6 border-b border-border/50">
                  <Mail className="w-5 h-5 text-foreground/40 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-foreground mb-2 font-light">Email</h3>
                    <p className="text-foreground/70 mb-1">dr.xanthe@psychology-oxford.co.uk</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-6 border-b border-border/50">
                  <MapPin className="w-5 h-5 text-foreground/40 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-foreground mb-2 font-light">Location</h3>
                    <p className="text-foreground/70">Witney, Oxfordshire</p>
                    <p className="text-foreground/70 mb-1">Oxford, Oxfordshire</p>
                    <p className="text-sm text-muted-foreground">Online sessions available</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 border border-border/30 rounded-lg p-6 mt-8">
                <p className="text-sm text-foreground/70 leading-relaxed font-light">
                  <strong className="font-medium text-foreground">Confidentiality:</strong> All inquiries are handled with
                  strict confidentiality in accordance with professional ethical standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
