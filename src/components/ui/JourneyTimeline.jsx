import React from 'react'
import { motion } from 'framer-motion'

const journey = [
  {
    year: '2023',
    title: 'Started building',
    description:
      'Started learning web development and focused on understanding the fundamentals of HTML, CSS, and JavaScript.',
  },
  {
    year: '2024',
    title: 'Moved into React',
    description:
      'Started building more structured interfaces with React and became more interested in reusable components and better user experiences.',
  },
  {
    year: '2025',
    title: 'Full-stack exploration',
    description:
      'Expanded into Python and FastAPI, learning how frontend applications connect with APIs, databases, authentication, and real functionality.',
  },
  {
    year: 'Now',
    title: 'Building with intention',
    description:
      'Focused on creating thoughtful websites and applications while continuing to improve my frontend skills, backend knowledge, and understanding of design.',
  },
]

export default function JourneyTimeline() {
  return (
    <div>
      <div className="max-w-2xl mb-14">
        <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-4">
          Journey
        </p>

        <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#1e2022]">
          How I got here.
        </h3>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#1e2022]/10" />

        <div className="space-y-10">
          {journey.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              className="relative pl-10"
            >
              {/* Timeline point */}
              <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#bddda7] border-4 border-[#f5ecd9]" />

              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-3 md:gap-8">
                <span className="text-sm font-medium text-[#6b7280]">
                  {item.year}
                </span>

                <div>
                  <h4 className="text-xl md:text-2xl font-semibold tracking-tight text-[#1e2022]">
                    {item.title}
                  </h4>

                  <p className="mt-3 max-w-2xl text-sm md:text-base leading-7 text-[#6b7280]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}