import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@ui/footer'
import { Navbar } from '@ui/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Podcaster List',
  description: 'List of the 100 most popular podcasters on Apple Podcasts',
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="pastel">
      <body className={inter.className}>
        <Navbar />
        <main role="main" className="h-[calc(100vh-9rem)] overflow-auto bg-base-100 p-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
