import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Send, Loader2 } from 'lucide-react'

const EMAIL = 'fauziewebdev@gmail.com'
// Replace with your Formspree endpoint ID or Web3Forms access key
const FORM_ENDPOINT = 'https://formspree.io/f/xzebjarn'

function MagneticEmail({ children, onClick }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

  const handleMove = (event) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.12)
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.18)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={`mailto:${EMAIL}`}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.98 }}
      className='inline-block max-w-full break-words text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white hover:text-[#E07A5F] transition-colors duration-200'
    >
      {children}
    </motion.a>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const copyEmail = async (event) => {
    event.preventDefault()
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id='contact' className='py-28 px-6 max-w-7xl mx-auto'>
      <div className='border-t border-neutral-300/70 dark:border-white/10 pt-8'>
        <span className='text-xs font-semibold tracking-widest text-[#E07A5F] uppercase'>
          Contact
        </span>

        <div className='mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          {/* Left Column: Context & Direct Contact */}
          <div className='lg:col-span-5 space-y-8'>
            <div>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-neutral-900 dark:text-white'>
                Have a project in mind? Let&apos;s make it feel considered.
              </h2>
              <p className='mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                Feel free to reach out using the form or copy my email address directly.
              </p>
            </div>

            <div>
              <MagneticEmail onClick={copyEmail}>{EMAIL}</MagneticEmail>
              <p className='mt-3 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400' aria-live='polite'>
                {copied ? <Check className='h-4 w-4 text-[#84A98C]' /> : <Copy className='h-4 w-4' />}
                {copied ? 'Copied to clipboard!' : 'Click to copy email'}
              </p>
            </div>

            <div className='pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-neutral-600 dark:text-neutral-300'>
              <a
                href='https://github.com/fauz-del'
                target='_blank'
                rel='noreferrer'
                className='group inline-flex items-center gap-2 hover:text-[#38BDF8] transition-colors duration-200'
              >
                GitHub
                <ArrowUpRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1' />
              </a>
              <span className='text-neutral-300 dark:text-neutral-700' aria-hidden='true'>
                /
              </span>
              <span>Available for freelance &amp; contract work</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className='lg:col-span-7 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-2xl p-6 sm:p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Jane Doe'
                  className='w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200 text-sm'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='jane@example.com'
                  className='w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200 text-sm'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project, timeline, or scope...'
                  className='w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200 text-sm resize-none'
                />
              </div>

              <motion.button
                type='submit'
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className='w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 disabled:opacity-50 transition-colors duration-200'
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className='h-4 w-4 animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className='h-4 w-4' />
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <p className='text-sm text-center text-[#84A98C] font-medium'>
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {status === 'error' && (
                <p className='text-sm text-center text-red-500 font-medium'>
                  Something went wrong. Please try emailing directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}