import { Podcast } from './definitions'

export function getPodcastImage(podcast: Podcast): string {
  const imagesOrdered = podcast['im:image'].sort(
    (a, b) => parseInt(b.attributes.height, 10) - parseInt(a.attributes.height, 10)
  )
  return imagesOrdered[0].label
}
