const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const
const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

export function Exclusivity() {
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
