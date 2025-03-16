"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "example@email.com",
      link: "mailto:example@email.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91-8810570149",
      link: "tel:+918810570149",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Delhi, India",
      link: null,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-1/3 space-y-8"
    >
      <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
        <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-4">{item.icon}</div>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
        <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
        <p className="text-muted-foreground mb-4">
          Feel free to connect with me on social media or check out my work on GitHub.
        </p>
        <div className="flex flex-col space-y-3">
          <Button variant="outline" asChild className="justify-start">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub <ExternalLink className="ml-auto h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild className="justify-start">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn <ExternalLink className="ml-auto h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

