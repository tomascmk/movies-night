import { ServiceHelper } from '../helpers/ServiceHelper'
import { TitlesResponse, SearchTitlesParams } from '../types/ApiTypes'
import { Title } from '../types/TitlesTypes'
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

export const getRecomedationsById = async (
  id: number,
  params?: SearchTitlesParams
): Promise<Title[]> => {
  try {
    const url = `/movie/${id}/recommendations?`
    const response = await apiGet<any>(url, AppType.Tmdb, params)
    return await ServiceHelper.getMoviesList(response.results)
  } catch (error: any) {
    console.log('Error on getMoviesByName', error)
    throw error
  }
}
