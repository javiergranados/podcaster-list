'use client'

import Image from 'next/image'
import { PodcastMetadata } from '@lib/definitions'

type TileProps = {
  metadata: PodcastMetadata
  description: string
}

export function Tile({ metadata, description }: TileProps) {
  return (
    <div className="relative mt-6 flex h-96 max-w-72 flex-col items-start bg-base-100 p-4 shadow-md transition-all dark:bg-neutral">
      <Image width={170} height={170} src={metadata.artworkUrl100} alt="img" className="self-center rounded-md" />
      <div className="divider my-4"></div>
      <h2 className="line-clamp-1 text-base font-semibold">{metadata.collectionName}</h2>
      <p className="line-clamp-1 text-sm font-light italic text-gray-400">by {metadata.artistName}</p>
      <div className="divider my-2"></div>
      <h3 className="line-clamp-1 text-sm font-medium">Description:</h3>
      <p className="line-clamp-3 text-sm font-light italic text-gray-400">{description}</p>
    </div>
  )
}
