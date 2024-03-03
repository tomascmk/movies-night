import { AppType, apiGet } from './BaseService'

export abstract class UtilsService {
  static getTitlesImages = async (ids: any[]): Promise<string[]> => {
    try {
      const images: string[] = []
      ids.forEach(async (id) => {
        const url = `/movie/${id}/images?`
        const response = await apiGet<any>(url, AppType.Tmdb)
        images.push(response.posters[0].file_path)
      })
      return images
    } catch (error: any) {
      console.log('Error on getTitlesImages', error)
      throw error
    }
  }
}
