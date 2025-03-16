import ExperienceTimeline from "@/components/ExperienceTimeline"
import ExperienceHero from "@/components/ExperienceHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience | Deepanshu Singhaniya",
  description: "Explore Deepanshu Singhaniya's professional experience and career journey in software engineering.",
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <ExperienceHero />
      <ExperienceTimeline />
    </div>
  )
}

