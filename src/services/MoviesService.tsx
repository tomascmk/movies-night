import { type Movie } from '../components/SearchMovies/MoviesListCard'
import { AppType, apiGet } from './BaseService'

export const getMovies = async (params: string): Promise<Movie[]> => {
  try {
    const url = `/discover/movie?api_key=5f7ae5440db9ba5bd716f95ef0761b80&${params}`
    console.log('import.meta.env.API_KEY', import.meta.env.TMDB_API_KEY)
    const response = await apiGet<Movie[]>(url, AppType.Tmdb)
    return response
  } catch (error: any) {
    console.log('Error on getAccountHotelTaxesFees', error)
    throw error
  }
}
