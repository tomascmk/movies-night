import { Title } from './TitlesTypes'

export interface TitlesResponse {
  data: Title[]
  totalPages: number
}

export interface SearchTitlesParams {
  page?: number | string
  query?: string
  external_source?: string
}

export interface GeoParams {
  ip?: string
}

export interface ExternalKeys {
  facebook_id: string
  id: number
  imdb_id: string
  instagram_id: string
  twitter_id: string
  wikidata_id: string
}
