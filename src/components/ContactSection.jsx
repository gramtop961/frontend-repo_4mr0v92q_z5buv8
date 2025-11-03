import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactSection = () => {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thank you! Your message has been received. We will get back to you shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-[#F8FBFF]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-semibold text-[#00A6FB] tracking-widest uppercase">Contact</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002B5B] mt-2">Let’s build something great</h2>
            <p className="text-gray-600 mt-3">Share your goals and we’ll craft a tailored proposal. Based in Sangli, Maharashtra — working with clients worldwide.</p>

            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#00A6FB]" /> spwebsmiths@gmail.com</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#00A6FB]" /> +91 00000 00000</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#00A6FB]" /> Sangli, Maharashtra, India</div>
            </div>

            <div className="mt-6">
              <iframe
                title="SP WebSmiths Location"
                className="w-full h-56 rounded-lg border"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=Sangli%2C%20Maharashtra&output=embed"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#002B5B]">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#00A6FB] focus:ring-[#00A6FB]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#002B5B]">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#00A6FB] focus:ring-[#00A6FB]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[#002B5B]">Subject</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#00A6FB] focus:ring-[#00A6FB]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[#002B5B]">Message</label>
                <textarea required rows="5" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#00A6FB] focus:ring-[#00A6FB]" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-[#00A6FB] text-white px-5 py-3 font-semibold shadow hover:shadow-lg hover:bg-[#0096e3] transition w-full">
              Send Message
            </button>
            {status && <p className="text-green-600 text-sm mt-3">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
