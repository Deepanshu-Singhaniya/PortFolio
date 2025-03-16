"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award, School } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    degree: "B.Tech in Software Engineering",
    minor: "Minor in Data Analytics",
    institution: "Delhi Technological University",
    period: "2019 – 2023",
    achievements: [
      "CGPA: 8.79",
      "Scored O grade in Computer Networks, Software Testing, Artificial Intelligence, Digital Electronic, Modelling and Simulation, and Logical Reasoning",
    ],
  },
  {
    degree: "Class XII (CBSE-AISSCE)",
    institution: "White Leaf Public School, Delhi",
    period: "2019",
    achievements: ["Aggregate: 92.4%"],
  },
  {
    degree: "Class X (CBSE-AISSE)",
    institution: "White Leaf Public School, Delhi",
    period: "2017",
    achievements: ["Aggregate: 95%"],
  },
]

export default function EducationTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-3xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent">
                      {index === 0 ? (
                        <GraduationCap className="w-8 h-8 text-primary" />
                      ) : (
                        <School className="w-8 h-8 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      {edu.minor && <p className="text-primary text-sm mb-1">{edu.minor}</p>}
                      <p className="text-lg mb-2">{edu.institution}</p>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      {edu.achievements.length > 0 && (
                        <div>
                          <h4 className="text-md font-medium mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-primary" />
                            Achievements
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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

