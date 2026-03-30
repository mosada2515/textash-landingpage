const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

export function HeroBadge() {
  return (
    <div
      style={MONO}
      className="inline-flex items-center bg-accent text-accent-foreground text-[10px] font-semibold tracking-[0.15em] px-3 py-1.5 rounded-full border border-border mb-7 uppercase"
    >
      Invite only · College exclusive
    </div>
  )
}
