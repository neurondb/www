'use client'

import React, { useState } from 'react'
import { Mail, Github, MessageCircle, Send, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data - send to support@neurondb.ai
    const email = 'support@neurondb.ai'
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `)

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1f2937' }}>
      <HeroTemplate height="default" className="text-white text-center pt-20">
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg">
              Get in touch with our team for support, questions, or feedback
            </p>
          </div>
        </div>
      </HeroTemplate>

      <section className="py-24" style={{ backgroundColor: '#1f2937' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-white/80 mb-3">
                Send us an email for general inquiries and support: <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                >
                  {siteConfig.email}
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
              <p className="text-white/80 mb-3">
                Report issues, request features, or contribute to NeuronDB: <Link
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                >
                  View Repository
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
              <p className="text-white/80 mb-3">
                Browse our comprehensive documentation and guides: <Link
                  href="/docs"
                  className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                >
                  View Documentation
                </Link>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white placeholder-white/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white placeholder-white/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white placeholder-white/50"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-none text-white placeholder-white/50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <FooterTemplate />
    </div>
  )
}

