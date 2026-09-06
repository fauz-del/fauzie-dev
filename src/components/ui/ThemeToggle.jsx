import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className='p-2.5 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:scale-105 hover:bg-[#38BDF8]/20 transition-all shadow-sm'
      aria-label='Toggle Theme'
    >
      {isDark ? <Sun className='w-4 h-4 text-[#F4A261]' /> : <Moon className='w-4 h-4 text-[#84A98C]' />}
    </button>
  )
}
