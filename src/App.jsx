import React from 'react'
import BackgroundCanvas from './components/ui/BackgroundCanvas'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import SelectedWork from './components/sections/SelectedWork'
import TechnicalWork from './components/sections/TechnicalWork'
import SectionDictionary from './components/sections/SectionDictionary'
import Capabilities from './components/sections/Capabilities'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#f5ecd9] text-[#1e2022] font-sans antialiased selection:bg-[#bddda7] selection:text-[#1e2022]">
      <BackgroundCanvas />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <SelectedWork />
        <TechnicalWork />
        <SectionDictionary />
        <Capabilities />
        <About />
        <Contact />
      </main>
    </div>
  )
}