const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const
const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

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

export function WhyDifferent() {
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
