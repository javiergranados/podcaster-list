'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ThemeSelectorButton } from './components/ThemeSelectorButton'

export function Navbar() {
  const searchParams = useSearchParams()

  return (
    <header className="navbar z-10 h-16 border-b border-primary-content bg-base-100 transition-all dark:border-primary">
      <div className="flex-1" data-testid="spotahome-logo">
        <Link
          className="btn btn-link text-xl normal-case text-primary hover:text-primary-content dark:text-primary dark:hover:text-neutral"
          href={{
            pathname: '/',
            query: { query: searchParams.get('query')?.toString() },
          }}
        >
          Podcaster
        </Link>
      </div>
      <div className="flex-none gap-4">
        <ThemeSelectorButton />
      </div>
    </header>
  )
}
