import React from 'react'
import { ArrowUpRight, Globe } from 'lucide-react'

export default function TechCard({ project }) {
  const { name, category, intro, bullets, stack, codeUrl, liveUrl } = project

  return (
    <article className="group rounded-3xl bg-white border border-black/5 p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <span className="text-sm font-medium text-[#6b7280]">
          {category}
        </span>

        <span className="w-2 h-2 rounded-full bg-[#bddda7]" />
      </div>

      {/* Content */}
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1e2022]">
        {name}
      </h3>

      <p className="mt-5 text-base leading-7 text-[#6b7280]">
        {intro}
      </p>

      {/* Features */}
      {bullets?.length > 0 && (
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 text-sm text-[#6b7280]"
            >
              <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-[#aed3e5]" />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      {stack?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-7">
          {stack.map((technology, index) => (
            <span
              key={technology}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                index % 2 === 0
                  ? 'bg-[#bddda7]/30 text-[#1e2022]'
                  : 'bg-[#aed3e5]/30 text-[#1e2022]'
              }`}
            >
              {technology}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      {(liveUrl || codeUrl) && (
        <div className="flex flex-wrap items-center gap-5 mt-9">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2022] hover:text-[#6b7280] transition-colors duration-200"
            >
              View live
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}

          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2022] hover:text-[#6b7280] transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              View code
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </article>
  )
}