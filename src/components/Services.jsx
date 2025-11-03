import React from 'react'
import { Code, Palette, Search, Wrench } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    desc: 'Pixel-perfect, responsive websites with clean code and fast performance.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Human-centered interfaces that are intuitive, elegant, and conversion-focused.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Technical SEO, site speed, and on-page best practices to lift your rankings.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    desc: 'Keep your site secure, up-to-date, and running smoothly 24/7.',
  },
]

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#00A6FB] tracking-widest uppercase">Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002B5B] mt-2">What we do best</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">From brand-new builds to redesigns and SEO overhauls — we ship quality, on time.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
              <div className="h-12 w-12 rounded-lg bg-[#00A6FB]/10 text-[#00A6FB] flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-[#002B5B] text-lg">{title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 text-[#00A6FB] text-sm font-semibold">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
