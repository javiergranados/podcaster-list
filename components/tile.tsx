'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PodcastMetadata } from '@lib/definitions'

type TileProps = {
  description: string
  metadata: PodcastMetadata
  enableRedirect?: boolean
  podcastId?: string
}

export function Tile({ description, metadata, enableRedirect, podcastId }: TileProps) {
  const router = useRouter()

  const handleClick = () => {
    if (!enableRedirect) return
    router.push(`/podcast/${podcastId}`)
  }

  return (
    <div
      className={clsx(
        'relative top-0 mt-6 flex min-h-96 max-w-72 flex-col items-start bg-base-100 p-4 shadow-md transition-all dark:bg-neutral md:sticky',
        {
          ['cursor-pointer hover:scale-105 hover:shadow-lg']: enableRedirect,
        }
      )}
      onClick={handleClick}
    >
      <Image width={170} height={170} src={metadata.artworkUrl100} alt="img" className="self-center rounded-md" />
      <div className="divider my-4"></div>
      <h2 className="line-clamp-1 text-base font-semibold">{metadata.collectionName}</h2>
      <p className="line-clamp-1 text-sm font-light italic text-gray-400">by {metadata.artistName}</p>
      <div className="divider my-2"></div>
      <h3 className="line-clamp-1 text-sm font-medium">Description:</h3>
      <p className="line-clamp-3 w-full text-sm font-light italic text-gray-400">{description}</p>
    </div>
  )
}
