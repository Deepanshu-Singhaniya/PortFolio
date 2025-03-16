"use client"

import { motion } from "framer-motion"
import { Award, BadgeIcon as Certificate, Trophy, Star } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    icon: <Trophy className="w-10 h-10 text-yellow-500" />,
    title: "Employee of the February Month 2024",
    organization: "Havells India Limited",
    description: "Recognized for outstanding performance and contributions to the company.",
  },
  {
    icon: <Certificate className="w-10 h-10 text-blue-500" />,
    title: "Amazon Machine Learning Summer School 2022",
    organization: "Amazon",
    description: "Selected participant for the exclusive ML training program.",
  },
  {
    icon: <Award className="w-10 h-10 text-green-500" />,
    title: "Microsoft AI Classroom Series",
    organization: "Microsoft",
    description:
      "Trained on AI, Machine learning, and Data Science topics with lab exercises using Microsoft Azure services.",
  },
  {
    icon: <Star className="w-10 h-10 text-purple-500" />,
    title: "Delegate at 2nd National Conference",
    organization: "Cyber Crime Investigation and Digital Forensics",
    description: "Participated in discussions and workshops on digital forensics and cybersecurity.",
  },
  {
    icon: <Certificate className="w-10 h-10 text-indigo-500" />,
    title: "Internshala Student Partner",
    organization: "ISP30",
    description: "Selected as campus ambassador for Internshala platform.",
  },
]

export default function AchievementsGrid() {
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
          Awards & Recognition
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent">{achievement.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-primary text-sm mb-2">{achievement.organization}</p>
                      <p className="text-muted-foreground">{achievement.description}</p>
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

