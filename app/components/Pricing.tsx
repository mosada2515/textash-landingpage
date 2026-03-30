const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const
const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

export function Pricing() {
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
