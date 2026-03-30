const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const
const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

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

export function SocialProof() {
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
