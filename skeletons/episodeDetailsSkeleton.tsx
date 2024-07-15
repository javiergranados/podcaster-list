import { EpisodeSkeleton } from './episodeSkeleton'
import { TileSkeleton } from './tileSkeleton'

export async function EpisodeDetailsSkeleton() {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start">
      <TileSkeleton />
      <EpisodeSkeleton />
    </div>
  )
}
