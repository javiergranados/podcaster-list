import { Podcast } from './definitions'

export function getPodcastImage(podcast: Podcast): string {
  const imagesOrdered = podcast['im:image'].sort(
    (a, b) => parseInt(b.attributes.height, 10) - parseInt(a.attributes.height, 10)
  )
  return imagesOrdered[0].label
}

export function formatMilliseconds(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
