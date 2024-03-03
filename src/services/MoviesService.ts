import { ServiceHelper } from '../helpers/ServiceHelper'
import { TitlesResponse, SearchTitlesParams } from '../types/ApiTypes'
import { AppType, apiGet } from './BaseService'

export const getMovies = async (
  params?: SearchTitlesParams
): Promise<TitlesResponse> => {
  try {
    const url = `/discover/movie?`
    const response = await apiGet<any>(url, AppType.Tmdb, params)
    const movies = await ServiceHelper.getMoviesList(response.results)
    return {
      data: movies,
      totalPages: response.total_pages
    }
  } catch (error: any) {
    console.log('Error on getMovies', error)
    throw error
  }
}

export const getMoviesByName = async (
  params?: SearchTitlesParams
): Promise<TitlesResponse> => {
  try {
    const url = `/search/movie?`
    const response = await apiGet<any>(url, AppType.Tmdb, params)
    const movies = await ServiceHelper.getMoviesList(response.results)
    return {
      data: movies,
      totalPages: response.total_pages
    }
  } catch (error: any) {
    console.log('Error on getMoviesByName', error)
    throw error
  }
}
