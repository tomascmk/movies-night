/* import { AppType, apiGet } from './BaseService' */
import { ArrayHelper } from '../helpers/ArrayHelper'
import { ServiceHelper } from '../helpers/ServiceHelper'
import { StreamingHelper } from '../helpers/StreamingHelper'
import { StreamProvider, Title } from '../types/TitlesTypes'
import { AppType, apiGet } from './BaseService'

export abstract class StreamingService {
  static getStreamingByTitle = async (
    title?: Title
  ): Promise<StreamProvider[]> => {
    try {
      if (!title) {
        console.log('Error on getStreamingByTitle', 'No title provided')
        throw 'No title provided'
      }
      const countryCode = (
        await ServiceHelper.getUserCountryCode()
      ).toLocaleLowerCase()

      const url = `/search/title?`
      const response = await apiGet<any>(url, AppType.SA, {
        title: title.title,
        country: countryCode,
        showType: title.type
      })

      const streamingInfo = response.result.find(
        (titleFetched: { title: string }) => titleFetched.title === title.title
      ).streamingInfo[countryCode]

      if (!streamingInfo) {
        return []
      }

      const providerServices = streamingInfo.map(
        (provider: any) => provider.service
      )

      const providers = ArrayHelper.deleteDuplicates(providerServices)

      return StreamingHelper.getParsedProvided(providers)
    } catch (error: any) {
      console.log('Error on getStreamingByTitle', error)
      throw error
    }
  }
}
