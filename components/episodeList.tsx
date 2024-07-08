import Link from 'next/link'
import { Episode } from '@lib/definitions'
import { formatMilliseconds } from '@lib/utils'

type PodcastListProps = {
  resultCount: number
  episodes: Episode[]
}

export async function EpisodeList({ resultCount, episodes }: PodcastListProps) {
  return (
    <div className="mt-12 w-full list-none p-0 md:mt-4 md:p-8 md:pl-16 md:pt-0">
      <div className="mb-8 bg-base-100 p-4 text-xl font-bold shadow-lg dark:bg-neutral">Episodes: {resultCount}</div>
      <div className="bg-base-100 p-0 shadow-lg dark:bg-neutral">
        <table className="table md:table-pin-rows">
          <thead>
            <tr>
              <th className="w-3/4 text-base dark:text-neutral-content">Title</th>
              <th className="text-base dark:text-neutral-content">Date</th>
              <th className="text-end text-base dark:text-neutral-content">Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <tr key={episode.trackId}>
                <td>
                  <Link
                    className="link text-blue-700 hover:opacity-70 dark:text-blue-400 dark:hover:opacity-50"
                    href="/"
                  >
                    {episode.trackName}
                  </Link>
                </td>
                <td>{new Date(episode.releaseDate).toLocaleDateString('es-ES')}</td>
                <td className="text-end">{formatMilliseconds(episode.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
