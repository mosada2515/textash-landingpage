const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const
const MONO = { fontFamily: 'var(--font-plex-mono, monospace)' } as const

export function IMessageMockup() {
  return (
    <div className="bg-white rounded-[28px] border border-border p-5 shadow-[0_8px_40px_-12px_rgba(155,44,44,0.18)] w-full">
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

      <div className="flex flex-col gap-2">
        <div className="self-start max-w-[82%] bg-muted text-foreground text-sm leading-snug px-4 py-2.5 rounded-[18px] rounded-bl-[4px]">
          Hey Jack, I think I found someone for you 
        </div>
        <div className="self-start max-w-[82%] bg-muted text-foreground text-sm leading-snug px-4 py-2.5 rounded-[18px] rounded-bl-[4px]">
          her name's Sophie. same campus, loves hiking, actually funny. I'm going to make an intro.
        </div>
        <div className="self-end max-w-[82%] bg-primary text-primary-foreground text-sm leading-snug px-4 py-2.5 rounded-[18px] rounded-br-[4px]">
          I'm listening... 👀
        </div>
        <div className="self-start max-w-[82%] bg-muted text-foreground text-sm leading-snug px-4 py-2.5 rounded-[18px] rounded-bl-[4px]">
          You got this 😉
        </div>
      </div>
    </div>
  )
}
