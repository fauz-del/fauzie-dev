import React from 'react'
import BackgroundCanvas from './components/ui/BackgroundCanvas'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

export default function App() {
  return (
    <div className='relative min-h-screen bg-[#FDEDE6] dark:bg-[#0F1115] text-[#1E2022] dark:text-[#F8FAFC] font-sans antialiased transition-colors duration-300 selection:bg-[#E07A5F] selection:text-white'>
      <BackgroundCanvas />
      <Navbar />
      <main className='relative z-10'>
        <Hero />
      </main>
    </div>
  )
}