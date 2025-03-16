"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a Software Engineer with expertise in full-stack development and a background in machine learning.
              Currently working at Havells India Limited, I specialize in building robust and scalable applications
              using modern technologies.
            </p>
            <p className="text-lg text-muted-foreground">
              With a B.Tech in Software Engineering and a minor in Data Analytics from Delhi Technological University, I
              combine strong technical skills with analytical thinking to deliver innovative solutions. I'm passionate
              about creating efficient, user-friendly applications and exploring new technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse blur-xl opacity-70"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-background">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Deepanshu Singhaniya"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

