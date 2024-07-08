import { fetchPodcastById, fetchPodcastDetails } from '@lib/data'
import { EpisodeList } from './episodeList'
import { Tile } from './tile'

type PodcastListProps = {
  podcastId: string
}

export async function PodcastDetails({ podcastId }: PodcastListProps) {
  const podcast = await fetchPodcastById(podcastId)
  const podcastDetails = await fetchPodcastDetails(podcastId)

  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start">
      <Tile description={podcast!.summary.label} metadata={podcastDetails.metadata} />
      <EpisodeList resultCount={podcastDetails.resultCount} episodes={podcastDetails.episodes} />
    </div>
  )
}
