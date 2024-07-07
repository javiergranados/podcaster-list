'use server'

import { Podcast, PodcastDetails } from './definitions'

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

export async function fetchPodcastById(podcastId: string) {
  const podcasts = await getData()
  return podcasts.find((podcast) => podcast.id.attributes['im:id'] === podcastId)
}

export async function fetchPodcastDetails(podcastId: string) {
  const res = await fetch(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
    {
      next: { revalidate: 86400 }, // 24 hours
    }
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const podcastDetails = await res.json()
  return podcastDetails as PodcastDetails
}
