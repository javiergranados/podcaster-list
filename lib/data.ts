'use server'

import { Podcast } from './definitions'

async function getData() {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', {
    next: { revalidate: 86400 }, // 24 hours
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const response = await res.json()
  return response.feed.entry as Podcast[]
}

export async function fetchPodcastList(query: string) {
  const podcasts = await getData()

  if (!query) {
    return podcasts
  }
  return podcasts.filter((podcast) => {
    return (
      podcast.title.label.toLowerCase().includes(query.toLowerCase()) ||
      podcast['im:artist'].label.toLowerCase().includes(query.toLowerCase())
    )
  })
}
