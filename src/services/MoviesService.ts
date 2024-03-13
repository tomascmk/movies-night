import { ServiceHelper } from '../helpers/ServiceHelper'
import {
  TitlesResponse,
  SearchTitlesParams,
  ExternalKeys
} from '../types/ApiTypes'
import { Title } from '../types/TitlesTypes'
import { AppType, apiGet } from './BaseService'

export const getMovies = async (
  params?: SearchTitlesParams
): Promise<TitlesResponse> => {
  try {
    const url = `/discover/movie`
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
export const getTopMovies = async (
  params?: SearchTitlesParams
): Promise<Title[]> => {
  try {
    const url = `/movie/top_rated`
    const response = await apiGet<any>(url, AppType.Tmdb, params)
    const movies = await ServiceHelper.getMoviesList(response.results)
    return movies
  } catch (error: any) {
    console.log('Error on getMovies', error)
    throw error
  }
}

export const getMoviesByName = async (
  params?: SearchTitlesParams
): Promise<TitlesResponse> => {
  try {
    const url = `/search/movie`
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
    const url = `/movie/${id}/recommendations`
    const response = await apiGet<any>(url, AppType.Tmdb, params)
    return await ServiceHelper.getMoviesList(response.results)
  } catch (error: any) {
    console.log('Error on getMoviesByName', error)
    throw error
  }
}

export const getExternalIds = async (id: number): Promise<ExternalKeys> => {
  try {
    const url = `/movie/${id}/external_ids`
    const response = await apiGet<any>(url, AppType.Tmdb)
    console.log('response', response)
    return response as ExternalKeys
  } catch (error: any) {
    console.log('Error on getMoviesByName', error)
    throw error
  }
}

export const getMovieById = async (
  id: number,
  params?: SearchTitlesParams
): Promise<Title[]> => {
  try {
    const ids = await getExternalIds(id)
    const url = `/find/${ids.imdb_id}`
    const response = await apiGet<any>(url, AppType.Tmdb, params)
    return await ServiceHelper.getMoviesList(response.movie_results)
  } catch (error: any) {
    console.log('Error on getMoviesByName', error)
    throw error
  }
}
