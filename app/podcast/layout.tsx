import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Podcaster Details',
  description: 'Details of the selected podcast',
}

type LayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: LayoutProps) {
  return (
    <main className="flex h-full flex-col items-center p-4">
      <div className="flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start">
        {children}
      </div>
    </main>
  )
}
