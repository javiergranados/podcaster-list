import { Suspense } from 'react'
import { Episode } from '@screens/episode'
import { EpisodeDetailsSkeleton } from '@skeletons/episodeDetailsSkeleton'

type EpisodePageProps = {
  params: {
    podcastId: string
    episodeId: string
  }
}

export default function EpisodePage({ params }: EpisodePageProps) {
  return (
    <Suspense fallback={<EpisodeDetailsSkeleton />}>
      <Episode {...params} />
    </Suspense>
  )
}
