import { Suspense } from 'react'
import { Podcast } from '@screens/podcast'
import { PodcastDetailsSkeleton } from '@skeletons/podcastDetailsSkeleton'

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
