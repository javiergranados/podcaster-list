import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mt-24 flex h-screen flex-col items-center justify-start">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mb-4 text-2xl">Page not found</p>
      <Link className="btn btn-primary" href="/">
        Return Home
      </Link>
    </div>
  )
}
