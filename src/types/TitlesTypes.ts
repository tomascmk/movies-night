export enum TitleType {
  Movie = 'movie',
  Serie = 'serie'
}
export interface Title {
  id: number
  title: string
  desc?: string
  image?: string
  url?: string
  rate?: number
  totalVotes?: number
  adults?: boolean
  type: TitleType
}
