import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full backdrop-blur-md bg-[#FDEDE6]/80 dark:bg-[#0F1115]/80 transition-colors duration-300'>
      <a href='#' className='text-xl font-bold tracking-tight text-neutral-900 dark:text-white group'>
        fauzie<span className='text-[#E07A5F] group-hover:text-[#38BDF8] transition-colors duration-200'>.dev</span>
      </a>

      <nav className='hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300'>
        <a href='#about' className='hover:text-[#38BDF8] transition-colors duration-200'>About</a>
        <a href='#projects' className='hover:text-[#38BDF8] transition-colors duration-200'>Projects</a>
        <a href='#experience' className='hover:text-[#38BDF8] transition-colors duration-200'>Experience</a>
      </nav>

      <div className='flex items-center gap-4'>
        <ThemeToggle />
        <a
          href='#contact'
          className='inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 bg-[#E07A5F] hover:bg-[#38BDF8] text-white rounded-full transition-colors duration-200 shadow-sm'
        >
          Let's talk <ArrowUpRight className='w-4 h-4' />
        </a>
      </div>
    </header>
  )
}
