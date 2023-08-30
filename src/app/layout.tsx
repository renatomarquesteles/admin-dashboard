import '@/styles/global.css'

import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import { TopBar } from './top-bar'
import { ThemeProviders } from './theme-providers'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
}

const sourceSans3 = Source_Sans_3({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sourceSans3.className}>
      <body>
        <ThemeProviders>
          <TopBar />
          {children}
        </ThemeProviders>
      </body>
    </html>
  )
}
