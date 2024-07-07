import Image from 'next/image'
import React from 'react'
import { Podcast } from '@lib/definitions'

type Props = {
  podcast: Podcast
}

export function TinyTile({ podcast }: Props) {
  const imagesOrdered = podcast['im:image'].sort(
    (a, b) => parseInt(b.attributes.height, 10) - parseInt(a.attributes.height, 10)
  )
  const image = imagesOrdered[0].label

  return (
    <div className="relative mt-6 h-36 w-80 cursor-pointer bg-base-100 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-neutral">
      <Image
        width={100}
        height={100}
        src={image}
        alt="img"
        className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full"
      />
      <div className="flex h-full flex-col items-center justify-end p-0 pb-4 text-center">
        <h2 className="line-clamp-1 text-base font-semibold">{podcast.title.label}</h2>
        <p className="line-clamp-1 text-base font-light text-gray-400">Author: {podcast['im:artist'].label}</p>
      </div>
    </div>
  )
}
