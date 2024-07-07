import { TinyTileSkeleton } from './tintyTileSkeleton'

export function PodcastListSkeleton() {
  return (
    <div className="mt-20 grid w-5/6 grid-cols-1-20 gap-6 overflow-y-auto overflow-x-hidden py-8 sm:grid-cols-2-20 md:grid-cols-3-20 lg:grid-cols-4-20">
      {new Array(15).fill(0).map((_, index) => (
        <TinyTileSkeleton key={index} />
      ))}
    </div>
  )
}
