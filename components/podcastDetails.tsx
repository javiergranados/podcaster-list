import { fetchPodcastById, fetchPodcastDetails } from '@lib/data'
import { Tile } from './tile'

type PodcastListProps = {
  podcastId: string
}

export async function PodcastDetails({ podcastId }: PodcastListProps) {
  const podcast = await fetchPodcastById(podcastId)
  const podcastDetails = await fetchPodcastDetails(podcastId)

  return (
    <div className="flex w-full flex-col items-center md:flex-row md:items-start">
      <Tile description={podcast!.summary.label} metadata={podcastDetails.metadata} />
    </div>
  )
}
