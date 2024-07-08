import { EpisodeListSkeleton } from './episodeListSkeleton'
import { TileSkeleton } from './tileSkeleton'

export async function PodcastDetailsSkeleton() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start">
      <TileSkeleton />
      <EpisodeListSkeleton />
    </div>
  )
}
