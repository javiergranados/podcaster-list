import { Suspense } from 'react'
import { PodcastDetailsSkeleton } from '@skeletons/podcastDetailsSkeleton'
import { Podcast } from '../../../screens/podcast'

type PodcastPageProps = {
  params: {
    podcastId: string
  }
}

export default function PodcastPage({ params }: PodcastPageProps) {
  return (
    <Suspense fallback={<PodcastDetailsSkeleton />}>
      <Podcast podcastId={params.podcastId} />
    </Suspense>
  )
}
