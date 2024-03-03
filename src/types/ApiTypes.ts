import { Title } from './TitlesTypes'

export interface TitlesResponse {
  data: Title[]
  totalPages: number
}

export interface SearchTitlesParams {
  page?: number | string
  query?: string
}

export interface GeoParams {
  ip?: string
}
