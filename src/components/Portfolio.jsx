import React, { useMemo, useState } from 'react'
import { Globe, Store, Briefcase } from 'lucide-react'

const projects = [
  {
    title: 'FinEdge Analytics',
    type: 'business',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Corporate website with analytics dashboards and SEO-ready content.',
    link: '#',
  },
  {
    title: 'Artfolio',
    type: 'portfolio',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    desc: 'Minimal portfolio for a visual artist with CMS integration.',
    link: '#',
  },
  {
    title: 'Cafe Moonlight',
    type: 'creative',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop',
    desc: 'Brand website with menu, bookings, and social media embeds.',
    link: '#',
  },
  {
    title: 'Sangli Realty',
    type: 'business',
    img: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b7?q=80&w=1200&auto=format&fit=crop',
    desc: 'Property listings, lead forms, and performance-optimized UI.',
    link: '#',
  },
]

const filters = [
  { key: 'all', label: 'All', icon: Globe },
  { key: 'business', label: 'Business', icon: Briefcase },
  { key: 'portfolio', label: 'Portfolio', icon: Globe },
  { key: 'creative', label: 'Creative', icon: Store },
]

const Portfolio = () => {
  const [active, setActive] = useState('all')
  const visible = useMemo(() => {
    return active === 'all' ? projects : projects.filter(p => p.type === active)
  }, [active])

  return (
    <section id="portfolio" className="bg-[#F8FBFF]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#00A6FB] tracking-widest uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002B5B] mt-2">Selected work</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">A mix of business, creative and portfolio sites crafted with performance and polish.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {filters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                active === key
                  ? 'bg-[#00A6FB] text-white border-[#00A6FB]'
                  : 'bg-white text-[#002B5B] border-gray-200 hover:border-[#00A6FB]/50'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <a key={p.title} href={p.link} className="group block rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wider text-[#00A6FB] font-semibold">{p.type}</div>
                <h3 className="text-lg font-semibold text-[#002B5B] mt-1">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
