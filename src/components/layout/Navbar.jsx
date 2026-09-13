import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-[#1e2022]"
        >
          fauzie
          <span className="text-[#bddda7]">.dev</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6b7280]">
          <a
            href="#projects"
            className="transition-colors duration-200 hover:text-[#1e2022]"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition-colors duration-200 hover:text-[#1e2022]"
          >
            About
          </a>

          <a
            href="#experience"
            className="transition-colors duration-200 hover:text-[#1e2022]"
          >
            Journey
          </a>
        </nav>

        {/* Contact */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1e2022] text-white text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
        >
          Let's talk

          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

      </div>
    </header>
  )
}