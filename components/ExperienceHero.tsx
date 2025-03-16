"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export default function ExperienceHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Professional Experience
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            My professional journey as a Software Engineer, showcasing my work experience, responsibilities, and
            achievements in the tech industry.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 opacity-10">
        <Briefcase className="w-32 h-32 text-primary" />
      </div>
    </section>
  )
}

