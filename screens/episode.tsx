import { notFound } from 'next/navigation'
import { EpisodeDetails } from '@ui/episodeDetails'
import { Tile } from '@ui/tile'
import { fetchPodcastById, fetchPodcastDetails } from '@lib/data'

type EpisodeProps = {
  podcastId: string
  episodeId: string
}

export async function Episode({ podcastId, episodeId }: EpisodeProps) {
  const podcast = await fetchPodcastById(podcastId)
  const podcastDetails = await fetchPodcastDetails(podcastId)

  const episode = podcastDetails.episodes.find((episode) => episode.trackId === parseInt(episodeId))

  if (!episode) {
    return notFound()
  }
  return (
    <>
      <Tile
        description={podcast!.summary.label}
        metadata={podcastDetails.metadata}
        enableRedirect
        podcastId={podcastId}
      />
      <EpisodeDetails episode={episode!} />
    </>
  )
}
