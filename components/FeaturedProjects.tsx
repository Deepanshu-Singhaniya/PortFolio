"use client"

import { motion } from "framer-motion"
import { ArrowRight, Brain, FileCode, Database } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    icon: <Brain className="w-10 h-10 text-purple-500" />,
    title: "Deep Learning for Bug Classification",
    description: "Automated bug triaging system using Deep Bidirectional RNN with Attention mechanism and LSTM units.",
    tech: ["Python", "NLTK", "Keras", "Word2Vec"],
    link: "/projects",
  },
  {
    icon: <FileCode className="w-10 h-10 text-blue-500" />,
    title: "Extended Hamming Code",
    description: "Simulation of data encryption, transmission, error detection, and correction using hamming codes.",
    tech: ["React", "JavaScript", "Material-UI", "Node.js"],
    link: "/projects",
  },
  {
    icon: <Database className="w-10 h-10 text-green-500" />,
    title: "Restaurant Recommendation System",
    description: "ML model using content-based filtering to recommend restaurants based on TF-IDF scores.",
    tech: ["Python", "NumPy", "pandas", "TF-IDF"],
    link: "/projects",
  },
]

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A selection of my recent work and research projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border border-border">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">{project.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-accent text-accent-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/projects" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

