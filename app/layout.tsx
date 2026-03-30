import type { Metadata } from 'next'
import { Poppins, Libre_Baskerville, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-baskerville',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Text Ash — Dating in college just got interesting.',
  description:
    'No swiping. No browsing. Just someone worth meeting — showing up right in your texts. Invite only. College exclusive.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${libreBaskerville.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
