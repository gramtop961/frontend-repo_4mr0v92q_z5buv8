import React from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-[#002B5B] font-semibold">
            <Rocket className="h-5 w-5 text-[#00A6FB]" />
            SP WebSmiths
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#002B5B] leading-tight">
            Building Smart, Stylish, and Scalable Web Experiences
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl">
            Your Vision, Our Code. We craft modern websites and digital brands with clean aesthetics, solid performance, and SEO-first thinking.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-[#00A6FB] text-white px-5 py-3 font-semibold shadow hover:shadow-lg hover:bg-[#0096e3] transition">
              Request a Project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-md border border-[#00A6FB]/30 text-[#002B5B] px-5 py-3 font-semibold hover:bg-[#00A6FB]/10 transition">
              View Portfolio
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-bold text-[#002B5B]">5+ yrs</p>
              <p>Experience</p>
            </div>
            <div>
              <p className="font-bold text-[#002B5B]">20+ </p>
              <p>Projects</p>
            </div>
            <div>
              <p className="font-bold text-[#002B5B]">100%</p>
              <p>Responsive</p>
            </div>
            <div>
              <p className="font-bold text-[#002B5B]">SEO</p>
              <p>Optimized</p>
            </div>
          </div>
        </div>
        <div className="h-[420px] md:h-[520px]" />
      </div>
    </section>
  )
}

export default Hero
