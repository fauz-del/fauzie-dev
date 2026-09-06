import React from 'react'

export default function PlaceholderThumb({ label = 'Preview coming soon', className = '' }) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #FDEDE6 0%, #E9F3F8 50%, #F4E9DE 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.35) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <span className="relative text-xs font-semibold tracking-wide text-neutral-500 uppercase">
        {label}
      </span>
    </div>
  )
}