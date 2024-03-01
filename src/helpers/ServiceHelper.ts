import { UtilsService } from '../services/UtilsService'
import { Title } from '../types/TitlesTypes'

export abstract class ServiceHelper {
  static getMoviesList = async (movies: any[]): Promise<Title[]> => {
    const images = await UtilsService.getTitlesImages(
      movies.map((movie) => movie.id)
    )
    return movies.map((movie: any, i) => {
      return {
        id: movie.id,
        title: movie.title,
        desc: movie.overview,
        image: images?.length && images[i] ? images[i] : movie.poster_path,
        url: movie.url,
        rate: movie.vote_average,
        totalVotes: movie.vote_count,
        adults: movie.adult
      }
    })
  }
  static getSeriesList = async (series: any[]): Promise<Title[]> => {
    const images = await UtilsService.getTitlesImages(
      series.map((serie) => serie.id)
    )
    return series.map((serie: any, i) => {
      return {
        id: serie.id,
        title: serie.name,
        desc: serie.overview,
        image: images?.length && images[i] ? images[i] : serie.poster_path,
        url: serie.url,
        rate: serie.vote_average,
        totalVotes: serie.vote_count,
        adults: serie.adult
      }
    })
  }
}
