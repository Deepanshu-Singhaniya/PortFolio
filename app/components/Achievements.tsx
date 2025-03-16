"use client"

import { motion } from "framer-motion"
import { Award, BadgeIcon as Certificate, Trophy, Star } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Achievements() {
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

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-gray-900 dark:to-amber-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Achievements & Awards" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-full">{achievement.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{achievement.organization}</p>
                  <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

