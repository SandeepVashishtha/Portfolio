import './globals.css'
import { Space_Mono } from 'next/font/google'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import { Analytics } from '@vercel/analytics/next'

const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700']
})

export const metadata = {
  title: 'Portfolio | Sandeep Vashishtha',
  description: 'Portfolio of Sandeep Vashishtha - Developer, Designer, Creator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased`}>
        <div className="relative z-10 min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
