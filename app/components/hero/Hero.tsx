import { HeroBadge } from './HeroBadge'
import { HeroCTAs } from './HeroCTAs'
import { IMessageMockup } from './IMessageMockup'

const SERIF = { fontFamily: 'var(--font-baskerville, Georgia, serif)' } as const

export function Hero() {
  return (
    <section className="bg-background">
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-28">
        <div className="grid md:grid-cols-[1fr_420px] gap-16 items-center">
          <div>
            <HeroBadge />

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

            <HeroCTAs />
          </div>

          <IMessageMockup />
        </div>
      </div>
    </section>
  )
}
