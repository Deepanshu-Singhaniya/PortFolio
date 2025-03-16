"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cpu, GitBranch, Terminal, Layout, Globe } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

const skills = [
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    name: "Frontend",
    tech: "React, JavaScript",
  },
  {
    icon: <Server className="w-6 h-6 text-green-500" />,
    name: "Backend",
    tech: "C#, Node.js, .NET",
  },
  {
    icon: <Database className="w-6 h-6 text-purple-500" />,
    name: "Database",
    tech: "MongoDB",
  },
  {
    icon: <Cpu className="w-6 h-6 text-red-500" />,
    name: "ML & AI",
    tech: "Python, NLP",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-orange-500" />,
    name: "Version Control",
    tech: "Git, GitHub",
  },
  {
    icon: <Terminal className="w-6 h-6 text-yellow-500" />,
    name: "Languages",
    tech: "C++, C#, JavaScript",
  },
  {
    icon: <Layout className="w-6 h-6 text-pink-500" />,
    name: "UI",
    tech: "Material-UI",
  },
  {
    icon: <Globe className="w-6 h-6 text-teal-500" />,
    name: "Web Dev",
    tech: "Full-Stack",
  },
]

export default function SkillsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-accent mb-3">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

