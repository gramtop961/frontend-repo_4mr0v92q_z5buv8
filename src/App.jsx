import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import ContactSection from './components/ContactSection'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
          <span className="text-[#002B5B]">SP</span>
          <span className="text-[#00A6FB]">WebSmiths</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="text-[#002B5B] hover:text-[#00A6FB] transition">Services</a>
          <a href="#portfolio" className="text-[#002B5B] hover:text-[#00A6FB] transition">Portfolio</a>
          <a href="#contact" className="text-[#002B5B] hover:text-[#00A6FB] transition">Contact</a>
          <a href="#contact" className="ml-2 inline-flex items-center rounded-md bg-[#00A6FB] text-white px-4 py-2 shadow hover:shadow-md hover:bg-[#0096e3] transition">Request a Project</a>
        </nav>
        <a href="#contact" className="md:hidden inline-flex items-center rounded-md bg-[#00A6FB] text-white px-3 py-2 text-sm">Start</a>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold text-xl">SP WebSmiths</div>
          <p className="text-white/80 mt-2 max-w-sm">
            Your Vision, Our Code. We design and build modern, fast, and SEO-first websites.
          </p>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-2 text-white/80">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white">Request a Project</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <p className="text-white/80 mt-2">Sangli, Maharashtra, India</p>
          <p className="text-white/80">spwebsmiths@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-white/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} SP WebSmiths. All rights reserved.</span>
          <span>Built with care in Sangli.</span>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
