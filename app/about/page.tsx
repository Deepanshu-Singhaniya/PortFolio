import AboutHero from "@/components/AboutHero"
import AboutTimeline from "@/components/AboutTimeline"
import SkillsGrid from "@/components/SkillsGrid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Deepanshu Singhaniya",
  description:
    "Learn about Deepanshu Singhaniya's background, skills, and expertise in software engineering and machine learning.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutTimeline />
      <SkillsGrid />
    </div>
  )
}

