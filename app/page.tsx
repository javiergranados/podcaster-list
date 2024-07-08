import { Suspense } from 'react'
import { Home } from '@pages/home'
import { PodcastListSkeleton } from '@skeletons/podcastListSkeleton'

type HomePageProps = {
  searchParams?: {
    query?: string
  }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const query = searchParams?.query || ''

  return (
    <main className="flex h-full flex-col items-center p-4">
      <Suspense fallback={<PodcastListSkeleton />}>
        <Home query={query} />
      </Suspense>
    </main>
  )
}
