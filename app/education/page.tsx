import EducationHero from "@/components/EducationHero"
import EducationTimeline from "@/components/EducationTimeline"
import AchievementsGrid from "@/components/AchievementsGrid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education & Achievements | Deepanshu Singhaniya",
  description: "Learn about Deepanshu Singhaniya's educational background and professional achievements.",
}

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <EducationHero />
      <EducationTimeline />
      <AchievementsGrid />
    </div>
  )
}

