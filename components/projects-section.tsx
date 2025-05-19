"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, BookOpen, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <BookOpen className="h-10 w-10 text-amber-500 mb-4" />
          <h2 className="font-medievalSharp text-4xl font-bold text-amber-500">Legendary Works</h2>
          <div className="h-1 w-20 bg-amber-600 mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
              className="group"
            >
              <Card className="overflow-hidden bg-stone-900 border-stone-800 hover:border-amber-600 transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent opacity-60"></div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={activeProject === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  >
                    <div className="flex gap-4">
                      <Button asChild size="sm" variant="secondary" className="bg-stone-800/80 hover:bg-stone-700/80">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button asChild size="sm" className="bg-amber-600/80 hover:bg-amber-500/80 text-stone-950">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medievalSharp text-xl font-bold text-amber-500">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-stone-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-stone-800 text-amber-400 border border-stone-700"
                      >
                        {tag}
                      </span>
                    ))}
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
