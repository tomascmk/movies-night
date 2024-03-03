export enum TitleType {
  Movie = 'movie',
  Serie = 'serie'
}
export enum StreamProvider {
  All4 = 'all4',
  Netflix = 'netflix',
  Aplle = 'apple',
  Britbox = 'britbox',
  Crave = 'crave',
  Curiosity = 'curiosity',
  Disney = 'disney',
  Hotstar = 'hotstar',
  Hulu = 'hulu',
  Iplayer = 'iplayer',
  Mubi = 'mubi',
  Now = 'now',
  Paramount = 'paramount',
  Peacock = 'peacock',
  Prime = 'prime',
  Stan = 'stan',
  Starz = 'starz',
  Wow = 'wow',
  Zee5 = 'zee5'
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
