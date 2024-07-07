import React from 'react'
import { getData } from '@lib/data'
import { Podcast } from '@lib/definitions'
import { TinyTile } from './tinyTile'

export default async function PodcastList() {
  const podcasts: Podcast[] = await getData()

  return (
    <div className="grid w-5/6 grid-cols-1-20 gap-6 overflow-y-auto overflow-x-hidden py-8 sm:grid-cols-2-20 md:grid-cols-3-20 lg:grid-cols-4-20">
      {podcasts.map((podcast, index) => (
        <TinyTile key={index} podcast={podcast} />
      ))}
    </div>
  )
}
