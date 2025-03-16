"use client"

import { motion } from "framer-motion"
import { ArrowRight, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const words = [
    { text: "Hello," },
    { text: "I'm" },
    { text: "Deepanshu" },
    { text: "Singhaniya" },
    { text: "—" },
    { text: "Software", className: "text-primary dark:text-primary" },
    { text: "Engineer", className: "text-primary dark:text-primary" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse blur-xl opacity-70"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-background">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="Deepanshu Singhaniya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="mb-6">
            <TypewriterEffect words={words} className="text-3xl md:text-5xl lg:text-6xl font-bold" />
          </div>

          <motion.p variants={item} className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
            Building innovative solutions with modern technologies. Specialized in full-stack development, machine
            learning, and software engineering with expertise in JavaScript, React, C#, and more.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex space-x-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:example@email.com"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center items-start p-1"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </motion.div>
      </div>
    </section>
  )
}

