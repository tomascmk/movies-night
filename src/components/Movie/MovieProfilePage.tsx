import { useState } from 'react'
import { MovieProfile } from './MovieProfile'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { getMovieById } from '../../services/MoviesService'
import { Title } from '../../types/TitlesTypes'

export const MovieProfilePage = () => {
  const [title, setTitle] = useState<Title>()

  const movieLoader = useAsyncCall(async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id')
    const movie = await getMovieById(Number(id), {
      external_source: 'imdb_id'
    })
    setTitle(movie[0])
    console.log('movie', movie)
  }, [])
  return movieLoader.completed && title ? (
    <MovieProfile titleToShow={title} />
  ) : (
    <div>Error</div>
  )
}
