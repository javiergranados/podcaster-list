import { Suspense } from 'react'
import PodcastList from '@ui/podcastList'
import PodcastListSkeleton from '@skeletons/podcastListSkeleton'

export default async function HomePage() {
  return (
    <main className="flex h-full flex-col items-center p-4">
      <input
        type="text"
        placeholder="Filter podcasts"
        className="input input-bordered input-primary mb-8 h-10 w-full max-w-lg self-end rounded-md"
      />
      <Suspense fallback={<PodcastListSkeleton />}>
        <PodcastList />
      </Suspense>
    </main>
  )
}
