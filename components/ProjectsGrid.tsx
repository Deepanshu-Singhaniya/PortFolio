"use client"

import { motion } from "framer-motion"
import { Brain, FileCode, Database, Code, Server, Globe } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    icon: <Brain className="w-12 h-12 text-purple-500" />,
    title: "Evaluating Deep Learning Methods for Classifying Bugs",
    category: "Machine Learning and Software Testing",
    description:
      "Automated bug triaging system that takes the bug title and description as input and assigns it to one of the available developers.",
    details: [
      "Developed a machine learning model using Deep Bidirectional Recurrent Neural Network with Attention mechanism and with Long Short-Term Memory units (LSTM) to triage bugs",
      "Technologies: Python, NumPy, NLTK, Keras, Word2Vec",
    ],
    links: [
      { label: "Paper", url: "#" },
      { label: "Certificate", url: "#" },
      { label: "Link", url: "#" },
    ],
    period: "JAN 2022 – MAY 2022",
  },
  {
    icon: <FileCode className="w-12 h-12 text-blue-500" />,
    title: "Extended Hamming Code",
    category: "Web Development and Digital Electronics",
    description:
      "Simulated the process of data introduction, encryption, transmission, error introduction, detection, correction, and decryption using hamming codes principles.",
    details: [
      "Included the hamming codes circuit simulation for a better understanding of the concept",
      "Technologies: ReactJS, JavaScript, Material-UI, NodeJS, hamming codes",
    ],
    links: [{ label: "GitHub", url: "#" }],
    period: "APR 2021 – MAY 2021",
  },
  {
    icon: <Database className="w-12 h-12 text-green-500" />,
    title: "Restaurant Recommendation System",
    category: "Machine Learning",
    description:
      "Developed a machine learning model based on content based filtering to recommend restaurants according to TF-IDF scores.",
    details: [
      "Used Zomato dataset for developing model which takes place as an input",
      "Technologies: Python, Machine Learning, NumPy, pandas, TF-IDF",
    ],
    links: [{ label: "GitHub", url: "#" }],
    period: "JUL 2021 – NOV 2021",
  },
  {
    icon: <Code className="w-12 h-12 text-red-500" />,
    title: "Personal Portfolio Website",
    category: "Web Development",
    description: "Designed and developed a responsive personal portfolio website to showcase projects and skills.",
    details: [
      "Implemented with modern web technologies for optimal performance and user experience",
      "Technologies: Next.js, React, Tailwind CSS, Framer Motion",
    ],
    links: [{ label: "Live Site", url: "#" }],
    period: "JUN 2022 – JUL 2022",
  },
  {
    icon: <Server className="w-12 h-12 text-indigo-500" />,
    title: "Call Masking System",
    category: "Software Engineering",
    description:
      "Developed a system to anonymize phone numbers, safeguarding privacy and automating call logging/recording for better data accuracy.",
    details: [
      "Reduced manual call logging and improved data accuracy by more than 95%",
      "Technologies: JavaScript, C#, React, PCF, Azure DevOps",
    ],
    links: [{ label: "Case Study", url: "#" }],
    period: "AUG 2023 – OCT 2023",
  },
  {
    icon: <Globe className="w-12 h-12 text-teal-500" />,
    title: "Grievance Handling System",
    category: "Web Application",
    description:
      "Built a comprehensive system to capture grievances with auto-escalation features for timely resolution.",
    details: [
      "Implemented workflow automation to ensure proper handling and tracking of grievances",
      "Technologies: C#, .NET, React, Azure Services",
    ],
    links: [{ label: "Overview", url: "#" }],
    period: "NOV 2023 – JAN 2024",
  },
]

export default function ProjectsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-accent rounded-lg">{project.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <div className="flex justify-between items-center mt-1">
                          <span className="inline-block px-2 py-1 text-xs rounded-full bg-accent text-accent-foreground">
                            {project.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{project.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-foreground/80">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-6 py-4 bg-accent/20 flex flex-wrap gap-2">
                    {project.links.map((link, idx) => (
                      <Button key={idx} variant="outline" size="sm" asChild>
                        <Link href={link.url}>{link.label}</Link>
                      </Button>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

