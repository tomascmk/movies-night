import { StreamProvider } from '../types/TitlesTypes'

export abstract class StreamingHelper {
  static getParsedProvided = (providers: string[]): StreamProvider[] => {
    const providersParsed: StreamProvider[] = []
    providers.forEach((provider) => {
      switch (provider) {
        case StreamProvider.All4:
          providersParsed.push(StreamProvider.All4)
          break
        case StreamProvider.Netflix:
          providersParsed.push(StreamProvider.Netflix)
          break
        case StreamProvider.Aplle:
          providersParsed.push(StreamProvider.Aplle)
          break
        case StreamProvider.Britbox:
          providersParsed.push(StreamProvider.Britbox)
          break
        case StreamProvider.Crave:
          providersParsed.push(StreamProvider.Crave)
          break
        case StreamProvider.Curiosity:
          providersParsed.push(StreamProvider.Curiosity)
          break
        case StreamProvider.Disney:
          providersParsed.push(StreamProvider.Disney)
          break
        case StreamProvider.Hotstar:
          providersParsed.push(StreamProvider.Hotstar)
          break
        case StreamProvider.Hulu:
          providersParsed.push(StreamProvider.Hulu)
          break
        case StreamProvider.Iplayer:
          providersParsed.push(StreamProvider.Iplayer)
          break
        case StreamProvider.Mubi:
          providersParsed.push(StreamProvider.Mubi)
          break
        case StreamProvider.Now:
          providersParsed.push(StreamProvider.Now)
          break
        case StreamProvider.Paramount:
          providersParsed.push(StreamProvider.Paramount)
          break
        case StreamProvider.Peacock:
          providersParsed.push(StreamProvider.Peacock)
          break
        case StreamProvider.Prime:
          providersParsed.push(StreamProvider.Prime)
          break
        case StreamProvider.Stan:
          providersParsed.push(StreamProvider.Stan)
          break
        case StreamProvider.Starz:
          providersParsed.push(StreamProvider.Starz)
          break
        case StreamProvider.Wow:
          providersParsed.push(StreamProvider.Wow)
          break
        case StreamProvider.Zee5:
          providersParsed.push(StreamProvider.Zee5)
          break

        default:
          break
      }
    })
    return providersParsed
  }

  static getProvidersUrl = (provider: StreamProvider) => {
    switch (provider) {
      case StreamProvider.All4:
        return 'https://www.channel4.com/'
      case StreamProvider.Netflix:
        return 'https://www.netflix.com/'
      case StreamProvider.Aplle:
        return 'https://tv.apple.com/'
      case StreamProvider.Britbox:
        return 'https://www.britbox.com/'
      case StreamProvider.Crave:
        return 'https://www.crave.ca/'
      case StreamProvider.Curiosity:
        return 'https://curiositystream.com/'
      case StreamProvider.Disney:
        return 'https://www.disneyplus.com/'
      case StreamProvider.Hotstar:
        return 'https://www.hotstar.com/'
      case StreamProvider.Hulu:
        return 'https://www.hulu.com/'
      case StreamProvider.Iplayer:
        return 'https://www.bbc.co.uk/'
      case StreamProvider.Mubi:
        return 'https://mubi.com/'
      case StreamProvider.Now:
        return 'https://www.nowtv.com/'
      case StreamProvider.Paramount:
        return 'https://www.paramountplus.com/'
      case StreamProvider.Peacock:
        return 'https://www.peacocktv.com/'
      case StreamProvider.Prime:
        return 'https://www.primevideo.com/'
      case StreamProvider.Stan:
        return 'https://www.stan.com.au/'
      case StreamProvider.Starz:
        return 'https://www.starz.com/'
      case StreamProvider.Wow:
        return 'https://www.wowpresentsplus.com/'
      case StreamProvider.Zee5:
        return 'https://www.zee5.com/'

      default:
        break
    }
  }
}
