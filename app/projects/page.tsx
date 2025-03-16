import ProjectsGrid from "@/components/ProjectsGrid"
import ProjectsHero from "@/components/ProjectsHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Deepanshu Singhaniya",
  description:
    "Discover the innovative projects developed by Deepanshu Singhaniya, showcasing expertise in web development and machine learning.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  )
}

