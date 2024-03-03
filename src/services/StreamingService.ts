/* import { AppType, apiGet } from './BaseService' */
import { ArrayHelper } from '../helpers/ArrayHelper'
import { ServiceHelper } from '../helpers/ServiceHelper'
import { Title } from '../types/TitlesTypes'
import { AppType, apiGet } from './BaseService'

export abstract class StreamingService {
  static getStreamingByTitle = async (title?: Title): Promise<string[]> => {
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
      const streamingInfo = response.result
        .find(
          (titleFetched: { title: string }) =>
            titleFetched.title === title.title
        )
        .streamingInfo[countryCode].map((provider: any) => provider.service)

      return ArrayHelper.deleteDuplicates(streamingInfo)
    } catch (error: any) {
      console.log('Error on getStreamingByTitle', error)
      throw error
    }
  }
}
