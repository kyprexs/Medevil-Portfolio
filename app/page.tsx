import type { Metadata } from "next"
import Link from "next/link"
import { Github, Linkedin, Mail, Scroll } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { MedievalCursor } from "@/components/medieval-cursor"
import { TorchEffect } from "@/components/torch-effect"

export const metadata: Metadata = {
  title: "Medieval Coder | Portfolio",
  description: "A programmer portfolio with a medieval theme",
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-stone-950 to-stone-900 text-stone-200">
      <MedievalCursor />
      <TorchEffect />

      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Scroll className="h-8 w-8 text-amber-500" />
            <span className="font-medievalSharp text-xl font-bold text-amber-500">Medieval Coder</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#about" className="font-medievalSharp hover:text-amber-500 transition-colors">
              About
            </Link>
            <Link href="#skills" className="font-medievalSharp hover:text-amber-500 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="font-medievalSharp hover:text-amber-500 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="font-medievalSharp hover:text-amber-500 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-amber-500 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-amber-500 transition-colors" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 pb-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-stone-800 py-8 text-center text-sm text-stone-400">
        <div className="container mx-auto px-4">
          <p className="font-medievalSharp">© {new Date().getFullYear()} Medieval Coder. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-amber-500 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-amber-500 transition-colors" />
            </Link>
            <Link href="mailto:hello@medievalcoder.com" aria-label="Email">
              <Mail className="h-5 w-5 hover:text-amber-500 transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
