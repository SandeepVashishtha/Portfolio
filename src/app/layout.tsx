import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'

import ClientLayout from './components/ClientLayout'
import { CustomCursor } from './components/CustomCursor'

import Providers from './providers'

import { Analytics } from '@vercel/analytics/next'

const saira = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Sandeep Vashishtha',
  description: 'Portfolio of Sandeep Vashishtha',
  verification: {
    google: 'NK_YRyzH-6vt7WN_fUlh27kl9Rbv60jNBhDY_H7oLb8'
  }
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <CustomCursor />
        <ClientLayout>
          <Providers>{children}</Providers>
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
