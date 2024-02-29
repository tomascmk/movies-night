import { Title } from '../types/TitlesTypes'

export abstract class ServiceHelper {
  static getMoviesList = (movies: any[]): Title[] => {
    return movies.map((movie: any) => {
      return {
        id: movie.id,
        title: movie.title,
        desc: movie.overview,
        image: movie.poster_path,
        url: movie.url,
        rate: movie.vote_average,
        totalVotes: movie.vote_count,
        adults: movie.adult
      }
    })
  }
  static getSeriesList = (movies: any[]): Title[] => {
    return movies.map((movie: any) => {
      return {
        id: movie.id,
        title: movie.name,
        desc: movie.overview,
        image: movie.poster_path,
        url: movie.url,
        rate: movie.vote_average,
        totalVotes: movie.vote_count,
        adults: movie.adult
      }
    })
  }
}
