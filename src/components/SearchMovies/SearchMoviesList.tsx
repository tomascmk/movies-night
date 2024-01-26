import ListGroup from 'react-bootstrap/ListGroup'
import { type Movie, MoviesListCard } from './MoviesListCard'

interface Props {
  movies: Movie[]
}
export const SearchMoviesList = ({ movies }: Props): JSX.Element => {
  console.log(movies)
  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          {movies.length > 0 &&
            movies.map((movie) => <MoviesListCard movie={movie} />)}
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}
