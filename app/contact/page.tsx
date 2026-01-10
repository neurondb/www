'use client'

import React, { useState } from 'react'
import { Mail, Github, MessageCircle, Send, ArrowRight, MessageSquare } from 'lucide-react'
import Link from 'next/link'
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Beautiful Professional Hero */}
      <section className="relative overflow-hidden min-h-[560px] md:min-h-[600px] flex items-center pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Enhanced animated gradient background */}
        <div className="absolute inset-0 neuron-tech-bg opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-950/20 via-amber-950/20 to-orange-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-950"></div>
        
        {/* Floating animated orbs */}
        <div className="absolute top-10 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="mx-auto max-w-4xl text-center w-full">
            {/* Badge with glow effect */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 backdrop-blur-sm px-5 py-2 text-xs text-slate-200 mb-8 animate-fade-in-up shadow-lg shadow-yellow-500/20">
              <MessageSquare className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="font-semibold">Contact</span>
              <span className="text-slate-500">•</span>
              <span className="font-mono text-yellow-300">Get in Touch</span>
            </div>

            {/* Main Title with enhanced gradient */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 animate-slide-up leading-none">
              <span className="block drop-shadow-2xl">Contact</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 via-orange-400 to-red-400 animate-gradient">
                Us
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Have questions, feedback, or need support? We're here to help. Reach out via email, GitHub, or use the contact form below.
            </p>

            {/* Enhanced Quick Links with glow effects */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mb-12 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-yellow-500/20 hover:border-yellow-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <Mail className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                <span className="font-semibold text-slate-200">{siteConfig.email}</span>
              </Link>
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-amber-500/20 hover:border-amber-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <Github className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <span className="font-semibold text-slate-200">GitHub</span>
              </Link>
              <Link href="/docs" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-orange-500/20 hover:border-orange-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <MessageCircle className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors" />
                <span className="font-semibold text-slate-200">Documentation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-slate-300 mb-3">
                Email for general inquiries and support: <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                >
                  {siteConfig.email}
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
              <p className="text-slate-300 mb-3">
                Report issues, request features, or contribute: <Link
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
              <h3 className="text-xl font-semibold text-white mb-2">Documentation</h3>
              <p className="text-slate-300 mb-3">
                Documentation and guides: <Link
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
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Send us a Message</h2>
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white placeholder-slate-400"
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white placeholder-slate-400"
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
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors text-white placeholder-slate-400"
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
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-none text-white placeholder-slate-400"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
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

