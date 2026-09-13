import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { selectedWork } from '../../data/projects'

export default function SelectedWork() {
  return (
    <section
      id="projects"
      className="relative px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section intro */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-4">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#1e2022]">
            Websites I've designed
            <span className="block">and built.</span>
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-[#6b7280]">
            A selection of websites I've built for different industries,
            focusing on responsive design, clear user experiences, and
            purposeful interactions.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedWork.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
              className="group"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-black/5">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="w-full aspect-[16/10] flex items-center justify-center bg-[#f5ecd9]">
                    <span className="text-[#6b7280]">
                      Project preview
                    </span>
                  </div>
                )}

                {/* View project */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name}`}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-[#1e2022] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-[#bddda7]"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Project information */}
              <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#6b7280] mb-1">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight text-[#1e2022]">
                      {project.name}
                    </h3>
                  </div>

                  <span className="text-sm text-[#6b7280]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 max-w-xl text-sm md:text-base leading-7 text-[#6b7280]">
                  {project.intro}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-full bg-white border border-black/10 text-xs text-[#6b7280]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}