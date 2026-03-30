export function HeroCTAs() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="#cta"
        className="bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl text-[15px] hover:opacity-90 transition-opacity"
      >
        Request an invite
      </a>
      <a
        href="#how-it-works"
        className="border border-border text-foreground font-medium px-6 py-3.5 rounded-xl text-[15px] hover:bg-muted transition-colors"
      >
        See how it works
      </a>
    </div>
  )
}
