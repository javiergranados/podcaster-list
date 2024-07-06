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
