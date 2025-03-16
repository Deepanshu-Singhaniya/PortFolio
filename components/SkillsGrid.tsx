"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Terminal, Cpu, Globe } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

const skills = [
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    name: "Frontend Development",
    tech: "React.js, JavaScript",
    description: "Building responsive and interactive user interfaces with modern React features.",
  },
  {
    icon: <Server className="w-8 h-8 text-green-500" />,
    name: "Backend Development",
    tech: "C#, Node.js, .NET",
    description: "Creating robust server-side applications with focus on scalability and clean architecture.",
  },
  {
    icon: <Database className="w-8 h-8 text-purple-500" />,
    name: "Database Management",
    tech: "MongoDB",
    description: "Designing and implementing efficient database schemas and queries for optimal data management.",
  },
  {
    icon: <Layout className="w-8 h-8 text-pink-500" />,
    name: "UI Development",
    tech: "Material-UI",
    description: "Crafting beautiful and intuitive user interfaces with modern design principles and frameworks.",
  },
  {
    icon: <GitBranch className="w-8 h-8 text-orange-500" />,
    name: "Version Control",
    tech: "Git, GitHub, Heroku",
    description: "Managing code versions efficiently with Git and collaborating effectively through GitHub.",
  },
  {
    icon: <Terminal className="w-8 h-8 text-yellow-500" />,
    name: "Programming Languages",
    tech: "C++, C#, JavaScript",
    description: "Proficient in multiple programming languages for diverse application development.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-red-500" />,
    name: "AI & Machine Learning",
    tech: "Python, NLP, Deep Learning",
    description: "Implementing machine learning models and AI solutions for complex problems.",
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-500" />,
    name: "Web Development",
    tech: "Full-Stack Development",
    description: "End-to-end web application development from frontend to backend.",
  },
]

export default function SkillsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
                  <p className="text-sm text-primary mb-2">{skill.tech}</p>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

