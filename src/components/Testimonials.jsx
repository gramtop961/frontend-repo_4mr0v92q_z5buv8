import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Kiran Patil',
    role: 'Founder, Sangli Realty',
    quote:
      'SP WebSmiths turned our ideas into a fast, elegant website. Traffic and leads improved within weeks.',
  },
  {
    name: 'Aarav Mehta',
    role: 'Artist, Artfolio',
    quote:
      'Loved the attention to detail and design. The site feels premium and loads super quick.',
  },
  {
    name: 'Neha Sharma',
    role: 'Owner, Cafe Moonlight',
    quote:
      'From branding to SEO, they handled it all with professionalism. Highly recommended!',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#00A6FB] tracking-widest uppercase">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002B5B] mt-2">What clients say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-[#00A6FB] mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold text-[#002B5B]">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
