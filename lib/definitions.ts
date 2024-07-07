interface Base {
  label: string
}

interface ID extends Base {
  attributes: {
    'im:id': string
  }
}
interface Category {
  attributes: {
    'im:id': string
    term: string
    scheme: string
    label: string
  }
}

interface Link {
  attributes: {
    rel: string
    type?: string
    href: string
  }
}

interface Artist extends Base {
  attributes?: {
    href: string
  }
}

interface Price extends Base {
  attributes: {
    amount: string
    currency: string
  }
}

interface Image extends Base {
  attributes: {
    height: string
  }
}

interface ContentType {
  attributes: {
    term: string
    label: string
  }
}

interface ReleaseDate {
  label: Date
  attributes: Base
}

export interface Podcast {
  id: ID
  title: Base
  summary: Base
  category: Category
  link: Link
  rights?: Base
  'im:name': Base
  'im:artist': Artist
  'im:price': Price
  'im:image': Image[]
  'im:contentType': ContentType
  'im:releaseDate': ReleaseDate
}

export interface PodcastDetails {
  resultCount: number
  results: Episode[]
}

export interface Episode {
  wrapperType: {
    PodcastEpisode: string
    Track: string
  }
  kind: {
    Podcast: string
    PodcastEpisode: string
  }
  artistId?: number
  collectionId: number
  trackId: number
  artistName?: string
  collectionName: string
  trackName: string
  collectionCensoredName?: string
  trackCensoredName?: string
  artistViewUrl: string
  collectionViewUrl: string
  feedUrl: string
  trackViewUrl: string
  artworkUrl30?: string
  artworkUrl60: string
  artworkUrl100?: string
  collectionPrice?: number
  trackPrice?: number
  collectionHdPrice?: number
  releaseDate: Date
  collectionExplicitness?: string
  trackExplicitness?: string
  trackCount?: number
  trackTimeMillis: number
  country: string
  currency?: string
  primaryGenreName?: string
  artworkUrl600: string
  genreIds?: string[]
  genres: Array<{
    name: string
    id: string
  }>
  episodeUrl?: string
  description?: string
  shortDescription?: string
  closedCaptioning?: string
  artworkUrl160?: string
  episodeFileExtension?: string
  episodeContentType?: string
  artistIds?: number[]
  previewUrl?: string
  episodeGuid?: string
}
