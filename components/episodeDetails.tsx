import parse from 'html-react-parser'
import { Episode } from '@lib/definitions'

type EpisodeDetailsProps = {
  episode: Episode
}

export async function EpisodeDetails({ episode }: EpisodeDetailsProps) {
  return (
    <div className="mt-12 h-full min-h-64 w-full list-none p-0 md:mt-4 md:p-8 md:pl-16 md:pt-0">
      <div className="bg-base-100 p-4 shadow-lg dark:bg-neutral">
        <h1 className="mb-4 text-xl font-bold">{episode.trackName}</h1>
        <div className="mb-10 text-sm font-light italic text-gray-400">{parse(episode.description)}</div>
        <audio controls className="w-full">
          <source src={episode.episodeUrl} type={`audio/${episode.episodeFileExtension}`} />
        </audio>
      </div>
    </div>
  )
}
