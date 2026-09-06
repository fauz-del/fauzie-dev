import fieldNoteImg from '../assets/field-note.jpeg'
import roofingImg from '../assets/northline-roofing.jpeg'
import dentalImg from '../assets/dental-website.png'
import petGroomingImg from '../assets/pet-grooming.png'

export const selectedWork = [
  {
    id: 'field-notes',
    name: 'Field Notes',
    category: 'Travel / Hospitality',
    image: fieldNoteImg,
    intro: 'A nature-focused travel experience built around immersive imagery, large typography and smooth interaction.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://fauz-del.github.io/section-dictionary/websites/001-field-notes/',
    codeUrl: null,
  },
  {
    id: 'roast-rye',
    name: 'Roast & Rye',
    category: 'Coffee / Hospitality',
    image: null,
    intro: 'A warm coffee experience combining cinematic imagery, scroll-driven motion and interactive storytelling.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://fauz-del.github.io/section-dictionary/websites/004-roast-rye/',
    codeUrl: null,
  },
  {
    id: 'roofing',
    name: 'Northline Roofing',
    category: 'Business / Roofing',
    image: roofingImg,
    intro: 'A responsive business website with reusable theming and a video hero, built for a real roofing company.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: null,
    codeUrl: null,
  },
  {
    id: 'dental',
    name: 'Dental Redesign',
    category: 'Business / Dental',
    image: dentalImg,
    intro: 'A redesign concept focused on clarity, trust and conversion for a dental practice.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://fauz-del.github.io/dental-redesign-concepts/',
    codeUrl: null,
  },
  {
    id: 'pet-haven',
    name: 'Pet Haven',
    category: 'Pet Care / Services',
    image: petGroomingImg,
    intro: 'A friendly, approachable template for a pet grooming and care business.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://fauz-del.github.io/pet-haven-template/',
    codeUrl: null,
  },
]

export const technicalWork = [
  {
    id: 'nexus-cart',
    name: 'Nexus Cart',
    category: 'Full-Stack · E-Commerce',
    intro: 'A complete e-commerce application with a product catalog, cart and checkout flow, and admin-facing order management.',
    bullets: [
      'Product catalog with filtering & search',
      'Cart and checkout flow',
      'Admin order management',
    ],
    stack: ['React', 'Python', 'FastAPI', 'JavaScript'],
    liveUrl: null,
    codeUrl: 'https://github.com/fauz-del/Nexuscart-',
  },
  {
    id: 'securehub',
    name: 'SecureHub',
    category: 'Full-Stack · Access Control',
    intro: 'A role-based access control dashboard, with scoped views and permissions depending on user role.',
    bullets: [
      'Role-based access control (admin / user tiers)',
      'Authentication flow',
      'Dashboard views scoped by role',
    ],
    stack: ['React', 'Python', 'FastAPI'],
    liveUrl: null,
    codeUrl: 'https://github.com/fauz-del/SecureHub',
  },
]