import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Deepanshu Singhaniya",
  description: "Get in touch with Deepanshu Singhaniya for collaboration, opportunities, or inquiries.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Get in Touch
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

