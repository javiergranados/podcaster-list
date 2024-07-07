import { fetchPodcastList } from '@lib/data'
import { Search } from './search'
import { TinyTile } from './tinyTile'

type PodcastListProps = {
  query: string
}

export async function PodcastList({ query }: PodcastListProps) {
  const podcasts = await fetchPodcastList(query)

  return (
    <>
      <Search numberOfPodcasts={podcasts.length} />
      <div className="grid w-5/6 grid-cols-1-20 gap-6 overflow-y-auto overflow-x-hidden py-8 sm:grid-cols-2-20 md:grid-cols-3-20 lg:grid-cols-4-20">
        {podcasts.map((podcast) => (
          <TinyTile key={podcast.id.attributes['im:id']} podcast={podcast} />
        ))}
      </div>
    </>
  )
}
