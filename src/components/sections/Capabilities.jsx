import React from 'react'
import { motion } from 'framer-motion'
import {
  Monitor,
  Layout,
  Server,
  ArrowUpRight,
} from 'lucide-react'

const capabilities = [
  {
    number: '01',
    icon: Monitor,
    title: 'Websites',
    description:
      'Responsive websites for businesses, brands, and personal projects, built with attention to structure, performance, and visual detail.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '02',
    icon: Layout,
    title: 'Interfaces',
    description:
      'Clean, reusable React interfaces that make complex ideas easier to understand and use.',
    technologies: ['React', 'Tailwind CSS', 'GSAP'],
  },
  {
    number: '03',
    icon: Server,
    title: 'Applications',
    description:
      'Full-stack applications that connect thoughtful interfaces with APIs, authentication, data, and backend functionality.',
    technologies: ['Python', 'FastAPI', 'React'],
  },
]

const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'GSAP',
  'Python',
  'FastAPI',
  'Git',
]

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-4">
            Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#1e2022]">
            What I build.
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-[#6b7280]">
            My work spans from focused websites to interactive interfaces
            and full-stack applications.
          </p>
        </motion.div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon

            return (
              <motion.article
                key={capability.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                className="group p-7 md:p-8 rounded-3xl bg-white border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Number + icon */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6b7280]">
                    {capability.number}
                  </span>

                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#f5ecd9]">
                    <Icon className="w-5 h-5 text-[#1e2022]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-9 text-2xl font-semibold tracking-tight text-[#1e2022]">
                  {capability.title}
                </h3>

                <p className="mt-4 text-sm md:text-base leading-7 text-[#6b7280]">
                  {capability.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-7">
                  {capability.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-full bg-[#f5ecd9]/70 border border-black/5 text-xs font-medium text-[#1e2022]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-10 border-t border-black/10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280]">
                Tools & Technologies
              </p>

              <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-[#1e2022]">
                The tools behind the work.
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 max-w-2xl md:justify-end">
              {technologies.map((technology, index) => (
                <span
                  key={technology}
                  className={`px-4 py-2 rounded-full border text-sm transition-colors duration-200 ${
                    index % 3 === 0
                      ? 'bg-[#bddda7]/40 border-[#bddda7]/60'
                      : index % 3 === 1
                        ? 'bg-[#aed3e5]/40 border-[#aed3e5]/60'
                        : 'bg-white border-black/10'
                  } text-[#1e2022]`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Small CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group inline-flex items-center gap-2 mt-12 text-sm font-medium text-[#1e2022]"
        >
          Have a project in mind?
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#bddda7] transition-transform duration-200 group-hover:translate-x-1">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </motion.a>

      </div>
    </section>
  )
}