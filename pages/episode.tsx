import { Tile } from '@ui/tile'
import { fetchPodcastById, fetchPodcastDetails } from '@lib/data'

type EpisodeProps = {
  podcastId: string
  episodeId: string
}

export async function Episode({ podcastId, episodeId }: EpisodeProps) {
  console.log('🚀 ~ Episode ~ episodeId:', episodeId)

  const podcast = await fetchPodcastById(podcastId)
  const podcastDetails = await fetchPodcastDetails(podcastId)

  return (
    <>
      <Tile description={podcast!.summary.label} metadata={podcastDetails.metadata} />
      <div>
        <h1>Episode Details Page</h1>
      </div>
    </>
  )
}
