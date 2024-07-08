// PODCAST LIST

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

// PODCAST DETAILS

export interface PodcastMetadata {
  wrapperType: string
  kind: string
  artistId: number
  collectionId: number
  trackId: number
  artistName: string
  collectionName: string
  trackName: string
  collectionCensoredName: string
  trackCensoredName: string
  artistViewUrl: string
  collectionViewUrl: string
  feedUrl: string
  trackViewUrl: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  collectionPrice: number
  trackPrice: number
  collectionHdPrice: number
  releaseDate: Date
  collectionExplicitness: string
  trackExplicitness: string
  trackCount: number
  trackTimeMillis: number
  country: string
  currency: string
  primaryGenreName: string
  artworkUrl600: string
  genreIds: string[]
  genres: string[]
}

export interface Episode {
  trackViewUrl: string
  artworkUrl60: string
  artistViewUrl: string
  previewUrl: string
  closedCaptioning: string
  collectionId: number
  collectionName: string
  genres: {
    name: string
    id: string
  }[]
  episodeGuid: string
  description: string
  shortDescription: string
  trackId: number
  trackName: string
  releaseDate: string
  artistIds: number[]
  feedUrl: string
  artworkUrl600: string
  collectionViewUrl: string
  trackTimeMillis: number
  episodeFileExtension: string
  episodeUrl: string
  artworkUrl160: string
  episodeContentType: string
  country: string
  kind: string
  wrapperType: string
}

export interface PodcastDetails {
  resultCount: number
  metadata: PodcastMetadata
  episodes: Episode[]
}
