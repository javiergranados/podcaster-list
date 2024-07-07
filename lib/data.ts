'use server'

export async function getData() {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', {
    next: { revalidate: 86400 }, // 24 hours
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const podcasts = await res.json()
  return podcasts.feed.entry
}
