"use client"

import { motion } from "framer-motion"
import { Code, GitBranch } from "lucide-react"

export default function ProjectsHero() {
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
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A showcase of my technical projects, research work, and software development experience. Each project
            represents a unique challenge and solution.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Code className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <GitBranch className="w-24 h-24 text-primary" />
      </div>
    </section>
  )
}

