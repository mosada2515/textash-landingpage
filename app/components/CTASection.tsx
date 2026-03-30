'use client'

import { useState } from 'react'

const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const
const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

export function CTASection() {
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (phone.trim()) setSubmitted(true)
  }

  return (
    <section id="cta" className="bg-accent border-t border-border py-24">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p style={MONO} className="text-[10px] tracking-[0.2em] text-accent-foreground uppercase mb-4">
          Ready?
        </p>
        <h2 style={SERIF} className="text-4xl md:text-5xl text-foreground mb-4 leading-tight">
          Someone on your campus
          <br />
          is waiting to meet you.
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Drop your number. If someone vouches for you, you'll hear from us.
        </p>

        {submitted ? (
          <div className="bg-background border border-border rounded-2xl p-10">
            <p style={SERIF} className="text-2xl text-foreground mb-2">
              You're on the list.
            </p>
            <p className="text-sm text-muted-foreground">
              We'll reach out when someone vouches for you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-background border border-border text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-4 text-[15px] outline-none focus:ring-2 focus:ring-primary transition-shadow"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl text-[15px] hover:opacity-90 transition-opacity"
            >
              I want in
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-5">
          We'll only reach out when you've been approved. No spam, ever.
        </p>
      </div>
    </section>
  )
}
