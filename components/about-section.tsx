"use client"

import { motion } from "framer-motion"
import { Scroll } from "lucide-react"
import Image from "next/image"
import { user } from "@/data/user"

export function AboutSection() {
  return (
    <section id="about" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <Scroll className="h-10 w-10 text-amber-500 mb-4" />
          <h2 className="font-medievalSharp text-4xl font-bold text-amber-500">The Chronicles</h2>
          <div className="h-1 w-20 bg-amber-600 mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden border-4 border-stone-800 shadow-xl">
              <Image src="/images/placeholder-user.jpg" alt={user.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-full w-full border-4 border-amber-600 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-medievalSharp text-2xl font-bold mb-4 text-amber-500">{user.title}</h3>
            <div className="space-y-4 text-stone-300">
              {user.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a href={user.social.github} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">GitHub</a>
              <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">LinkedIn</a>
              <a href={`mailto:${user.social.email}`} className="text-amber-500 hover:underline">Email</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
