"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, Shield, Wand2 } from "lucide-react"
import { skills } from "@/data/skills"

const iconMap = {
  layout: Layout,
  database: Database,
  wand2: Wand2,
  code: Code,
  shield: Shield,
}

type IconKey = keyof typeof iconMap;

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-stone-950 scroll-mt-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <Wand2 className="h-10 w-10 text-amber-500 mb-4" />
          <h2 className="font-medievalSharp text-4xl font-bold text-amber-500">Mystical Powers</h2>
          <div className="h-1 w-20 bg-amber-600 mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, idx) => {
            const Icon = iconMap[skill.icon as IconKey] || Wand2
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className="bg-stone-900 border border-stone-800 rounded-lg p-6 hover:border-amber-600 transition-colors group"
              >
                <div className="flex items-center mb-4">
                  <Icon className="h-8 w-8 text-amber-500 mr-3 group-hover:text-amber-400 transition-colors" />
                  <h3 className="font-medievalSharp text-xl font-bold text-amber-500 group-hover:text-amber-400 transition-colors">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center text-stone-300">
                      <span className="h-1.5 w-1.5 bg-amber-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
