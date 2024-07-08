import { Suspense } from 'react'
import { Episode } from '@pages/episode'

type EpisodePageProps = {
  params: {
    podcastId: string
    episodeId: string
  }
}

export default function EpisodePage({ params }: EpisodePageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Episode {...params} />
    </Suspense>
  )
}
