import { fetchPodcastById, fetchPodcastDetails } from '@lib/data'

type PodcastListProps = {
  podcastId: string
}

export async function PodcastDetails({ podcastId }: PodcastListProps) {
  const podcast = await fetchPodcastById(podcastId)
  const podcastDetails = await fetchPodcastDetails(podcastId)

  console.log('🚀 ~ PodcastDetails ~ podcast:', podcast)
  console.log('🚀 ~ PodcastDetails ~ podcastDetails:', podcastDetails)

  return <h1>Podcast Details Component</h1>
}
