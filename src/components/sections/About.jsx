import React from 'react'
import { motion } from 'framer-motion'
import JourneyTimeline from '../ui/JourneyTimeline'

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280] mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#1e2022]">
            I care about how things
            <span className="block">
              work, not just how they look.
            </span>
          </h2>

          <p className="mt-7 text-base md:text-lg leading-8 text-[#6b7280]">
            I'm a self-taught developer with a frontend-first approach.
            I enjoy turning ideas and designs into responsive, useful
            interfaces while continuing to explore the systems behind them.
          </p>

          <p className="mt-5 text-base md:text-lg leading-8 text-[#6b7280]">
            My work sits between design and development. I focus on
            understanding the problem first, building a solid foundation,
            and then refining the details that make an interface feel
            intentional.
          </p>
        </motion.div>

        {/* How I work */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-3xl bg-white border border-black/5"
          >
            <span className="text-sm font-medium text-[#6b7280]">
              01
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-[#1e2022]">
              Understand
            </h3>

            <p className="mt-4 text-sm md:text-base leading-7 text-[#6b7280]">
              I start by understanding the purpose of the project,
              the people using it, and what the interface needs to achieve.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="p-7 rounded-3xl bg-white border border-black/5"
          >
            <span className="text-sm font-medium text-[#6b7280]">
              02
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-[#1e2022]">
              Build
            </h3>

            <p className="mt-4 text-sm md:text-base leading-7 text-[#6b7280]">
              I turn the idea into a responsive interface with reusable
              components, clean structure, and technology that fits the job.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="p-7 rounded-3xl bg-white border border-black/5"
          >
            <span className="text-sm font-medium text-[#6b7280]">
              03
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-[#1e2022]">
              Refine
            </h3>

            <p className="mt-4 text-sm md:text-base leading-7 text-[#6b7280]">
              I test, adjust, and polish the experience so the final result
              feels clear, responsive, and intentional.
            </p>
          </motion.article>
        </div>

        {/* Current focus */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20"
        >
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-[#6b7280]">
              Currently Exploring
            </p>

            <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#1e2022]">
              Going deeper
              <span className="block">behind the interface.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#bddda7]/40 border border-[#bddda7]/50">
              <h4 className="font-semibold text-[#1e2022]">
                WebGL & Three.js
              </h4>

              <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                Exploring interactive 3D experiences and understanding how
                graphics can support a real interface.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#aed3e5]/40 border border-[#aed3e5]/50">
              <h4 className="font-semibold text-[#1e2022]">
                React
              </h4>

              <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                Building reusable interfaces and improving how I structure
                larger frontend applications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/5">
              <h4 className="font-semibold text-[#1e2022]">
                Python & FastAPI
              </h4>

              <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                Expanding beyond the frontend by building APIs and
                full-stack applications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/5">
              <h4 className="font-semibold text-[#1e2022]">
                Better Interfaces
              </h4>

              <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                Learning when interaction adds value and when keeping things
                simple creates a better experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Journey */}
        <div id="experience" className="mt-28">
          <JourneyTimeline />
        </div>

      </div>
    </section>
  )
}