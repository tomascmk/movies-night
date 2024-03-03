import { StreamProvider } from '../types/TitlesTypes'

export const useProvidersTranslation = () => {
  const t = (name: StreamProvider) => {
    switch (name) {
      case StreamProvider.All4:
        return 'All 4'
      case StreamProvider.Netflix:
        return 'Netflix'
      case StreamProvider.Aplle:
        return 'Apple TV+'
      case StreamProvider.Britbox:
        return 'BritBox'
      case StreamProvider.Crave:
        return 'Crave'
      case StreamProvider.Curiosity:
        return 'Curiosity Stream'
      case StreamProvider.Disney:
        return 'Disney+'
      case StreamProvider.Hotstar:
        return 'HotStar'
      case StreamProvider.Hulu:
        return 'Hulu'
      case StreamProvider.Iplayer:
        return 'BBC iPlayer'
      case StreamProvider.Mubi:
        return 'Mubi'
      case StreamProvider.Now:
        return 'NOW TV'
      case StreamProvider.Paramount:
        return 'Paramount +'
      case StreamProvider.Peacock:
        return 'Peacock'
      case StreamProvider.Prime:
        return 'Amazon Prime Video'
      case StreamProvider.Stan:
        return 'STAN'
      case StreamProvider.Starz:
        return 'Starz Encore'
      case StreamProvider.Wow:
        return 'WOW Presents'
      case StreamProvider.Zee5:
        return 'ZEE5'

      default:
        break
    }
  }

  return { t }
}
