import React from 'react'
import { ArrowUpRight, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { technicalWork } from '../../data/projects'

export default function TechnicalWork() {
  return (
    <section
      id="technical"
      className="relative px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-4">
            Technical Work
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#1e2022]">
            More than just
            <span className="block">websites.</span>
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-[#6b7280]">
            I also build applications and backend systems, exploring how
            interfaces connect with real functionality behind the scenes.
          </p>
        </div>

        {/* Technical projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {technicalWork.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              className="group p-7 md:p-9 rounded-3xl bg-white border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Number + category */}
              <div className="flex items-center justify-between mb-10">
                <span className="text-sm font-medium text-[#6b7280]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="px-3 py-1 rounded-full bg-[#f5ecd9] text-xs font-medium text-[#1e2022]">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1e2022]">
                {project.name}
              </h3>

              {/* Description */}
              <p className="mt-5 text-base leading-7 text-[#6b7280]">
                {project.intro}
              </p>

              {/* Features */}
              {project.bullets && (
                <ul className="mt-6 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-[#6b7280]"
                    >
                      <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-[#bddda7]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mt-7">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full bg-[#f5ecd9]/70 border border-black/5 text-xs font-medium text-[#1e2022]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub */}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-9 text-sm font-medium text-[#1e2022] transition-colors duration-200 hover:text-[#6b7280]"
                >
                  <Globe className="w-4 h-4" />
                  View on GitHub
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}