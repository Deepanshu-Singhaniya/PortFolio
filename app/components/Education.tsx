"use client"

import { GraduationCap, Calendar, Award, School } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
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

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {index === 0 ? <GraduationCap className="w-6 h-6 mr-2" /> : <School className="w-6 h-6 mr-2" />}
                  {edu.degree}
                </h3>
                {edu.minor && <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{edu.minor}</p>}
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                {edu.achievements.length > 0 && (
                  <>
                    <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
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

