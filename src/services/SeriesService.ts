import { ServiceHelper } from '../helpers/ServiceHelper'
import { TitlesResponse, SearchTitlesParams } from '../types/ApiTypes'
import { AppType, apiGet } from './BaseService'

export const getSeries = async (
  params?: SearchTitlesParams
): Promise<TitlesResponse> => {
  try {
    const url = `/discover/tv?`
    const response = await apiGet<any>(url, AppType.Tmdb, params)
    const movies = await ServiceHelper.getSeriesList(response.results)
    return {
      data: movies,
      totalPages: response.total_pages
    }
  } catch (error: any) {
    console.log('Error on getAccountHotelTaxesFees', error)
    throw error
  }
}

export const getSeriesByName = async (
  params?: SearchTitlesParams
): Promise<TitlesResponse> => {
  try {
    const url = `/search/tv?`
    const response = await apiGet<any>(url, AppType.Tmdb, params)
    const movies = await ServiceHelper.getSeriesList(response.results)
    return {
      data: movies,
      totalPages: response.total_pages
    }
  } catch (error: any) {
    console.log('Error on getAccountHotelTaxesFees', error)
    throw error
  }
}
