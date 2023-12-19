import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import './globals.css'

const play = Play({ subsets: ['latin-ext'], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: 'Nucleo B2B',
  description: 'A full featured dashboard for freelancers and startups',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={play.className}>{children}</body>
    </html>
  )
}
