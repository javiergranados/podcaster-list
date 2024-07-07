import { Suspense } from 'react'
import { PodcastDetails } from '@ui/podcastDetails'

type PodcastIdPageProps = {
  params: {
    podcastId: string
  }
}

export default function PodcastIdPage({ params }: PodcastIdPageProps) {
  return (
    <main className="flex h-full flex-col items-center p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <PodcastDetails podcastId={params.podcastId} />
      </Suspense>
    </main>
  )
}
