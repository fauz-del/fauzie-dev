import React, { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const email = 'fauziewebdev@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  return (
    <section
      id="contact"
      className="relative px-6 pt-24 pb-12 md:px-10 md:pt-32 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Main contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-[2rem] bg-[#1e2022] text-white px-7 py-12 md:px-12 md:py-16 lg:px-16"
        >
          <div className="max-w-4xl">

            <p className="text-sm font-medium tracking-widest uppercase text-[#aed3e5] mb-6">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1]">
              Let's build
              <span className="block text-[#bddda7]">
                something useful.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base md:text-lg leading-8 text-white/65">
              Have a project, idea, or opportunity you'd like to discuss?
              I'd be happy to hear about it.
            </p>

            {/* Email */}
            <div className="relative inline-flex items-center gap-3 mt-9">
              <a
                href={`mailto:${email}`}
                className="text-lg md:text-2xl font-medium underline underline-offset-8 decoration-white/30 hover:decoration-[#bddda7] transition-colors duration-200"
              >
                {email}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#bddda7] hover:text-[#1e2022] transition-colors duration-200"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>

              {copied && (
                <span className="absolute left-0 top-full mt-3 text-xs text-[#bddda7]">
                  Email copied
                </span>
              )}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-4 mt-12">
              <a
                href="https://github.com/fauz-del"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200"
              >
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.instagram.com/fauzie_dev?stkn=MXVzZ3gxbzdxYTVwYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200"
              >
                Instagram
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </motion.div>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-8 text-sm text-[#6b7280]">
          <p>
            © {new Date().getFullYear()} Fauzie. Built with React.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 hover:text-[#1e2022] transition-colors duration-200"
          >
            Back to top
            <ArrowUpRight className="w-4 h-4 -rotate-45" />
          </a>
        </footer>

      </div>
    </section>
  )
}