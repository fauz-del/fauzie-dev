import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { sectionDictionary } from '../../data/sectionDictionary'

export default function SectionDictionary() {
  return (
    <section
      id="experiments"
      className="relative px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-4">
            Experiments
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#1e2022]">
            I like experimenting
            <span className="block">
              with interfaces.
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-[#6b7280]">
            A collection of smaller experiments exploring visual systems,
            layouts, typography, and interaction. These are places where I
            test ideas and learn by building.
          </p>
        </motion.div>

        {/* Experiment grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionDictionary.map((experiment, index) => (
            <motion.article
              key={
                experiment.id ||
                experiment.name ||
                experiment.title ||
                index
              }
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: 'easeOut',
              }}
              className="group overflow-hidden rounded-3xl bg-white border border-black/5"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#f5ecd9]">
                {experiment.image ? (
                  <img
                    src={experiment.image}
                    alt={
                      experiment.name ||
                      experiment.title ||
                      'Interface experiment'
                    }
                    className="w-full aspect-[16/10] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="w-full aspect-[16/10] flex items-center justify-center">
                    <span className="text-sm text-[#6b7280]">
                      Experiment preview
                    </span>
                  </div>
                )}

                {/* Number */}
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 text-xs font-medium text-[#1e2022]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">

                {/* Category */}
                {experiment.category && (
                  <p className="text-sm text-[#6b7280]">
                    {experiment.category}
                  </p>
                )}

                {/* Name */}
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1e2022]">
                  {experiment.name || experiment.title}
                </h3>

                {/* Description */}
                {experiment.description && (
                  <p className="mt-4 text-sm md:text-base leading-7 text-[#6b7280]">
                    {experiment.description}
                  </p>
                )}

                {/* Links */}
                <div className="flex flex-wrap items-center gap-5 mt-6">

                  {experiment.github && (
                    <a
                      href={experiment.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2022] hover:text-[#6b7280] transition-colors duration-200"
                    >
                      View code
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {experiment.liveUrl && (
                    <a
                      href={experiment.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2022] hover:text-[#6b7280] transition-colors duration-200"
                    >
                      View experiment
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
