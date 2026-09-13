import React from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import myPhoto from '../../assets/my-photo.jpeg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-16 md:px-10 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >

            {/* Availability */}
            <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-2 rounded-full border border-[#bddda7]/70 bg-white/70 text-sm font-medium text-[#1e2022]">
              <span className="w-2 h-2 rounded-full bg-[#bddda7]" />
              Open to freelance & remote work
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-[#1e2022]">

              Building thoughtful

              <span className="block">
                <span className="text-[#7fae65]">
                  digital
                </span>{' '}

                <span className="relative inline-block">
                  <span className="relative z-10 text-[#6da8c2]">
                    experiences.
                  </span>

                  <span className="absolute left-0 bottom-1 w-full h-3 bg-[#bddda7]/50 -z-0" />
                </span>
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base sm:text-lg leading-8 text-[#6b7280]">

              I'm a{' '}
              <span className="font-semibold text-[#1e2022]">
                frontend-focused developer
              </span>{' '}
              creating responsive websites and applications with a focus on{' '}

              <span className="font-medium text-[#7fae65]">
                clarity
              </span>
              ,{' '}

              <span className="font-medium text-[#6da8c2]">
                usability
              </span>{' '}
              and purposeful interaction.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-9">

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1e2022] text-white font-medium transition-all duration-200 hover:-translate-y-1 hover:bg-[#7fae65]"
              >
                View my work

                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#1e2022]/20 bg-white/60 text-[#1e2022] font-medium transition-all duration-200 hover:-translate-y-1 hover:border-[#6da8c2] hover:bg-[#aed3e5]/30"
              >
                Let's talk
              </a>

            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-10">

              <span className="px-3 py-1.5 rounded-full bg-[#bddda7]/40 text-[#4f713f] text-xs font-medium">
                React
              </span>

              <span className="px-3 py-1.5 rounded-full bg-[#aed3e5]/50 text-[#477c96] text-xs font-medium">
                JavaScript
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-[#6b7280] text-xs font-medium">
                Python
              </span>

              <span className="px-3 py-1.5 rounded-full bg-[#bddda7]/40 text-[#4f713f] text-xs font-medium">
                FastAPI
              </span>

              <span className="px-3 py-1.5 rounded-full bg-[#aed3e5]/50 text-[#477c96] text-xs font-medium">
                GSAP
              </span>

            </div>

          </motion.div>


          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: 'easeOut',
            }}
            className="relative flex justify-center lg:justify-end"
          >

            <div className="relative w-full max-w-md">

              {/* Powder blue offset */}
              <div className="absolute -right-5 -bottom-5 w-full h-full rounded-[2rem] bg-[#aed3e5]" />

              {/* Sage accent */}
              <div className="absolute -left-6 -top-6 w-20 h-20 rounded-full bg-[#bddda7]" />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-sm">

                <img
                  src={myPhoto}
                  alt="Fauzie"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

              </div>

              {/* Label */}
              <div className="absolute -left-5 bottom-8 px-4 py-2.5 rounded-full bg-[#f5ecd9] border border-black/5 text-sm font-medium text-[#1e2022] shadow-sm">
                <span className="inline-block w-2 h-2 mr-2 rounded-full bg-[#7fae65]" />
                Frontend Developer
              </div>

              {/* Small accent card */}
              <div className="absolute -right-5 top-10 px-4 py-3 rounded-2xl bg-white border border-black/5 shadow-sm">

                <p className="text-xs text-[#6b7280]">
                  Currently building
                </p>

                <p className="mt-1 text-sm font-semibold text-[#6da8c2]">
                  Useful things.
                </p>

              </div>

            </div>

          </motion.div>

        </div>


        {/* Scroll indicator */}
        <div className="hidden md:flex items-center gap-3 mt-20 text-sm text-[#6b7280]">

          <ArrowDown className="w-4 h-4 text-[#7fae65]" />

          <span>
            Scroll to explore
          </span>

        </div>

      </div>
    </section>
  )
}