"use client"

import { motion } from "framer-motion"
import { Database, Brain, FileCode } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Projects() {
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
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Projects" />
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/6 flex justify-center md:justify-start">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">{project.icon}</div>
                </div>
                <div className="md:w-5/6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold dark:text-white">{project.title}</h3>
                    {project.period && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{project.period}</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

