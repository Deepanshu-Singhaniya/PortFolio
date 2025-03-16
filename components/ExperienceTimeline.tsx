"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    company: "Havells India Limited",
    location: "Noida, Uttar Pradesh, India",
    period: "07/2023 - Present",
    role: "Software Engineer",
    responsibilities: [
      "Developed call masking system to anonymize phone numbers, safeguarding privacy and automating call logging/recording for better data accuracy",
      "Reduced manual call logging and improved data accuracy by more than 95%",
      "Developed a grievance handling system to capture grievances with auto-escalation",
      "Worked with technologies including JavaScript, C#, React, PCF, Azure DevOps, and Git",
    ],
  },
  {
    company: "Havells India Limited",
    location: "Noida, Uttar Pradesh, India",
    period: "01/2023 - 07/2023",
    role: "Intern",
    responsibilities: [
      "Designed and developed bot using Microsoft Bot Framework SDK",
      "Integrated bots through teams channel",
      "Implemented NLP and CLU for natural language understanding using Azure Cognitive Services",
      "Consolidated more than 50 APIs using .Net 7 based on restful architecture",
    ],
  },
  {
    company: "Full Stack Web Developer",
    location: "Delhi, India",
    period: "06/2022 - 08/2022",
    role: "Intern",
    responsibilities: [
      "Designed, developed and deployed full-stack web application which processed, analyzed, and rendered data visually using ReactJS and JavaScript",
      "Wrote structured, tested, readable and maintainable code for fully functional dashboards for chat and blog sections",
      "Ensured the performance, quality and responsiveness of 6+ components",
    ],
  },
]

export default function ExperienceTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-border bg-accent/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold flex items-center">
                          <Briefcase className="w-5 h-5 mr-2 text-primary" />
                          {exp.role}
                        </h3>
                        <p className="text-xl mt-1">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-medium mb-4">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

