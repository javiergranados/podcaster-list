import { TinyTile } from '@ui/tinyTile'
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

  return (
    <main className="flex h-full flex-col items-center p-4">
      <div className="grid w-5/6 grid-cols-1 gap-6 overflow-y-auto overflow-x-hidden py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {podcasts.map((podcast, index) => (
          <TinyTile key={index} podcast={podcast} />
        ))}
      </div>
    </main>
  )
}
