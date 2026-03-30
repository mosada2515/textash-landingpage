import { Navbar } from './components/Navbar'
import { Hero } from './components/hero/Hero'
import { HowItWorks } from './components/HowItWorks'
import { WhyDifferent } from './components/WhyDifferent'
import { Exclusivity } from './components/Exclusivity'
import { SocialProof } from './components/SocialProof'
import { Pricing } from './components/Pricing'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyDifferent />
      <Exclusivity />
      <SocialProof />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  )
}
