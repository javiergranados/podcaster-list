import { EpisodeList } from '@ui/episodeList'
import { Tile } from '@ui/tile'
import { fetchPodcastById, fetchPodcastDetails } from '@lib/data'

type PodcastProps = {
  podcastId: string
}

export async function Podcast({ podcastId }: PodcastProps) {
  const podcast = await fetchPodcastById(podcastId)
  const podcastDetails = await fetchPodcastDetails(podcastId)

  return (
    <>
      <Tile description={podcast!.summary.label} metadata={podcastDetails.metadata} />
      <EpisodeList podcastId={podcastId} resultCount={podcastDetails.resultCount} episodes={podcastDetails.episodes} />
    </>
  )
}
