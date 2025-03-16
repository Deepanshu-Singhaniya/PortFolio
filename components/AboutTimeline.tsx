"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const timelineItems = [
  {
    year: "2019",
    title: "Started University",
    description:
      "Began B.Tech in Software Engineering at Delhi Technological University with a minor in Data Analytics.",
  },
  {
    year: "2021",
    title: "First Technical Projects",
    description:
      "Developed Extended Hamming Code simulation and Restaurant Recommendation System, gaining practical experience in web development and machine learning.",
  },
  {
    year: "2022",
    title: "Research Work",
    description:
      "Conducted research on Deep Learning Methods for Classifying Bugs, exploring the application of AI in software testing.",
  },
  {
    year: "2023",
    title: "Graduated & Started Career",
    description:
      "Graduated with a CGPA of 8.79 and joined Havells India Limited as a Software Engineer after completing an internship.",
  },
  {
    year: "2024",
    title: "Professional Growth",
    description:
      "Recognized as Employee of the Month (February) at Havells India Limited for outstanding contributions to key projects.",
  },
]

export default function AboutTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My Journey
        </motion.h2>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8 md:text-right"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-primary ${
                  index % 2 === 0
                    ? "left-0 md:left-0 md:-translate-x-1/2"
                    : "left-0 md:left-auto md:right-0 md:translate-x-1/2"
                } transform -translate-y-1/2`}
              ></div>

              {/* Content */}
              <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-2">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

