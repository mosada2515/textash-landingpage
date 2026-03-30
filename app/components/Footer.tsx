const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const
const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

export function Footer() {
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
