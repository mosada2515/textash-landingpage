const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const
const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

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

export function HowItWorks() {
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
