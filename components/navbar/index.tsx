import Link from 'next/link'
import { ThemeSelectorButton } from './components/ThemeSelectorButton'

export function Navbar() {
  return (
    <header className="navbar z-10 h-16 border-b border-gray-400 bg-base-100 dark:bg-primary">
      <div className="flex-1" data-testid="spotahome-logo">
        <Link
          className="btn btn-link text-xl normal-case text-primary hover:text-primary-content dark:text-neutral"
          href="/"
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
