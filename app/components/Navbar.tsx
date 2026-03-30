const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const

export function Navbar() {
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
