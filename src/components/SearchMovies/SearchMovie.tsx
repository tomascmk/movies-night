import { useState } from 'react'
import { SearchMoviesList } from './SearchMoviesList'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { getMovies } from '../../services/MoviesService'
import { type Movie } from './MoviesListCard'

export const SearchMovie = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined)

  const moviesLoader = useAsyncCall(async () => {
    const result = await getMovies('with_keywords=society of the Snow')
    setMovies([])
    console.log('result', import.meta.env.TMDB_API_KEY)
    return result
  }, [])

  return (
    <>
      {movies === undefined ? (
        'Here will appear all the movies'
      ) : moviesLoader.loading ? (
        'Loading movies'
      ) : movies.length ? (
        <SearchMoviesList movies={movies} />
      ) : (
        'Movie not found'
      )}
    </>
  )
}
