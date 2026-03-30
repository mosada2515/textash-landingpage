'use client'

import { useState } from 'react'

const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const
const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

// ─── Navbar ────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span style={SERIF} className="text-xl font-semibold tracking-tight text-foreground">
          Text <span className="text-primary">Ash</span>
        </span>
        <a
          href="#cta"
          className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Get invited
        </a>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-background">
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-28">
        <div className="grid md:grid-cols-[1fr_420px] gap-16 items-center">
          {/* Text */}
          <div>
            <div
              style={MONO}
              className="inline-flex items-center bg-accent text-accent-foreground text-[10px] font-semibold tracking-[0.15em] px-3 py-1.5 rounded-full border border-border mb-7 uppercase"
            >
              Invite only · College exclusive
            </div>

            <h1 style={SERIF} className="text-5xl md:text-[3.75rem] text-foreground leading-[1.08] mb-6 tracking-tight">
              Dating in college
              <br />
              just got{' '}
              <em className="text-primary">interesting.</em>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9 max-w-md">
              No swiping. No browsing through profiles at 2am. Just someone worth
              meeting — showing up right in your texts.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#cta"
                className="bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl text-[15px] hover:opacity-90 transition-opacity"
              >
                Request an invite
              </a>
              <a
                href="#how-it-works"
                className="border border-border text-foreground font-medium px-6 py-3.5 rounded-xl text-[15px] hover:bg-muted transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* iMessage mock */}
          <div className="bg-white rounded-[28px] border border-border p-5 shadow-[0_8px_40px_-12px_rgba(155,44,44,0.18)] w-full">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span style={SERIF} className="text-white text-base font-bold leading-none">
                  A
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-none mb-0.5">Ash</p>
                <p style={MONO} className="text-[10px] text-muted-foreground">
                  textash.com · now
                </p>
              </div>
            </div>

            {/* Bubbles */}
            <div className="flex flex-col gap-2">
              <div className="self-start max-w-[82%] bg-muted text-foreground text-sm leading-snug px-4 py-2.5 rounded-[18px] rounded-bl-[4px]">
                hey 👋 I think I found someone for you
              </div>
              <div className="self-start max-w-[82%] bg-muted text-foreground text-sm leading-snug px-4 py-2.5 rounded-[18px] rounded-bl-[4px]">
                her name's Sophie. same campus, loves hiking, actually funny. I'm going to make an intro.
              </div>
              <div className="self-end max-w-[82%] bg-primary text-primary-foreground text-sm leading-snug px-4 py-2.5 rounded-[18px] rounded-br-[4px]">
                wait who is this lol
              </div>
              <div className="self-end max-w-[82%] bg-primary text-primary-foreground text-sm leading-snug px-4 py-2.5 rounded-[18px] rounded-br-[4px]">
                ok fine, I'm listening
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────

const STEPS = [
  {
    n: '01',
    title: 'Get invited.',
    body: "You can't just sign up. Someone already on Text Ash has to bring you in. That's what keeps it worth being part of.",
  },
  {
    n: '02',
    title: 'Have a real conversation.',
    body: "We chat with you — what you're like, what you care about, what you're actually looking for. Not a form. Not a quiz. Just a conversation.",
  },
  {
    n: '03',
    title: 'Someone shows up in your texts.',
    body: "When we think the timing's right, we make the intro. No warning. No swiping. Just a message that makes your day a little more interesting.",
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background border-t border-border py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p style={MONO} className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">
          How it works
        </p>
        <h2 style={SERIF} className="text-4xl md:text-5xl text-foreground mb-16 leading-tight">
          Three steps.
          <br />
          That's it.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {STEPS.map((step) => (
            <div key={step.n} className="bg-card border border-border rounded-2xl p-7">
              <p style={MONO} className="text-[11px] text-primary tracking-widest mb-5">
                {step.n}
              </p>
              <h3 style={SERIF} className="text-2xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Different ────────────────────────────────────────────────────────

const FEATURES = [
  {
    sym: '✦',
    title: 'Zero swiping. Zero browsing.',
    body: "You're a person, not a profile picture. We don't let people scroll through you like a catalog.",
  },
  {
    sym: '↺',
    title: 'We root for you.',
    body: "If a match almost clicked but didn't quite, we might just bring you back together — like that friend who keeps quietly pushing.",
  },
  {
    sym: '◎',
    title: 'Your campus only.',
    body: "Every single match goes to your school. Same quad, same coffee spots, same world — just a different person in it.",
  },
  {
    sym: '↑',
    title: 'Gets better over time.',
    body: "The more time you spend on Text Ash, the better your matches get. Your history here actually means something.",
  },
]

function WhyDifferent() {
  return (
    <section className="bg-muted py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p style={MONO} className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">
          Why we're different
        </p>
        <h2 style={SERIF} className="text-4xl md:text-5xl text-foreground mb-5 leading-tight">
          This isn't
          <br />a dating app.
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-xl">
          Dating apps turned meeting people into a second job — endless scrolling, forced bios,
          soul-crushing ghosting. Text Ash is the opposite. We do the work. You just stay open to it.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-background border border-border rounded-2xl p-7 hover:shadow-sm transition-shadow"
            >
              <p className="text-2xl text-primary mb-4">{f.sym}</p>
              <h3 className="text-[15px] font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Exclusivity ──────────────────────────────────────────────────────────

function Exclusivity() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p style={MONO} className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-4">
              The thing about us
            </p>
            <h2 style={SERIF} className="text-4xl md:text-5xl text-white mb-5 leading-tight">
              You can't just
              <br />
              sign up.
            </h2>
            <p className="text-base text-white/65 leading-relaxed mb-10">
              Getting into Text Ash is part of the experience. You need someone already
              inside to vouch for you — and even then, we have a quick conversation
              before you're in. Not everyone makes it. That's kind of the whole point.
            </p>
            <ul className="space-y-4">
              {[
                'A friend brings you in.',
                'We get to know you first.',
                'Not everyone makes it.',
                "That's kind of the whole point.",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  <span className="text-white text-[15px] font-medium">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pt-14">
            <blockquote className="border-l-2 border-white/20 pl-6">
              <p style={SERIF} className="text-xl italic text-white/70 leading-relaxed mb-4">
                "It's the only thing I've ever felt lucky to be a part of."
              </p>
              <cite style={MONO} className="text-[11px] text-white/30 not-italic tracking-wider">
                — NYU, class of '27
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Social Proof ─────────────────────────────────────────────────────────

const QUOTES = [
  {
    text: "I'd been seeing this guy across the library for months. We never talked. Then Text Ash introduced us. I almost fell out of my chair.",
    attr: 'Boston College, Junior',
  },
  {
    text: "My roommate dragged me into it. I complained the whole way through the setup. I've been on three dates since.",
    attr: 'UMich, Sophomore',
  },
  {
    text: "It feels like someone actually knows you and is genuinely trying to help. That's not something I expected from anything like this.",
    attr: 'Georgetown, Senior',
  },
]

function SocialProof() {
  return (
    <section className="bg-secondary border-t border-border py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p style={MONO} className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">
          What people are saying
        </p>
        <h2 style={SERIF} className="text-4xl md:text-5xl text-foreground mb-14 leading-tight">
          Real people.
          <br />
          Real campus.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {QUOTES.map((q) => (
            <div key={q.attr} className="bg-background border border-border rounded-2xl p-7">
              <p style={SERIF} className="text-base italic text-foreground leading-relaxed mb-5">
                "{q.text}"
              </p>
              <p style={MONO} className="text-[11px] text-muted-foreground tracking-wide">
                — {q.attr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────

function Pricing() {
  return (
    <section className="bg-background border-t border-border py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p style={MONO} className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-4">
          Pricing
        </p>
        <h2 style={SERIF} className="text-4xl md:text-5xl text-foreground mb-14 leading-tight">
          Simple.
        </h2>

        <div className="max-w-sm">
          <div className="bg-card border border-border rounded-3xl p-9 shadow-[0_4px_32px_-8px_rgba(155,44,44,0.12)]">
            <div className="flex items-end gap-1.5 mb-2">
              <span style={SERIF} className="text-7xl text-foreground leading-none">
                $29
              </span>
              <span className="text-lg text-muted-foreground mb-2">/month</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Less than a night out.
              <br />
              More exciting than most.
            </p>

            <div className="h-px bg-border mb-8" />

            <ul className="space-y-4 mb-8">
              {[
                'Matches delivered straight to your texts',
                'Exclusive to your campus',
                'Second-chance intros when things almost clicked',
                'Nothing to download — just a text',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-sm mt-0.5 shrink-0">✓</span>
                  <span className="text-sm text-foreground leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="block w-full text-center bg-primary text-primary-foreground font-semibold py-4 rounded-xl text-[15px] hover:opacity-90 transition-opacity"
            >
              Get on the list
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
            Monthly billing. Cancel anytime — though you'll lose your spot and
            everything we've learned about what works for you.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────

function CTASection() {
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

// ─── Footer ───────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p style={SERIF} className="text-xl font-semibold text-foreground mb-1">
          Text <span className="text-primary">Ash</span>
        </p>
        <p style={MONO} className="text-xs text-muted-foreground mb-8">
          textash.com
        </p>
        <p className="text-xs text-muted-foreground">© 2026 Text Ash. All rights reserved.</p>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyDifferent />
      <Exclusivity />
      <SocialProof />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  )
}
