import Hero from "@/components/Hero"
import FeaturedProjects from "@/components/FeaturedProjects"
import SkillsShowcase from "@/components/SkillsShowcase"
import CallToAction from "@/components/CallToAction"
import ParticleBackground from "@/components/ParticleBackground"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <ParticleBackground />
      <Hero />
      <SkillsShowcase />
      <FeaturedProjects />
      <CallToAction />
    </div>
  )
}

