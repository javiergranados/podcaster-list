import { Button } from '@ui/button'
import { Podcast } from '@lib/definitions'

async function getData() {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', {
    next: { revalidate: 86400 }, // 24 hours
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const podcasts = await res.json()
  return podcasts.feed.entry
}

export default async function HomePage() {
  const podcasts: Podcast[] = await getData()
  console.log('🚀 ~ HomePage ~ podcasts:', podcasts)

  return (
    <main className="flex h-full flex-col items-center pb-5 pt-5">
      <h1 className="color text-2xl font-semibold text-primary">Podcaster List</h1>
      <Button />
    </main>
  )
}
