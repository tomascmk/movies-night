import ListGroup from 'react-bootstrap/ListGroup'

interface Props {
  canSearchMovies: boolean
  onOptionChange(option: boolean): void
}
export const SearchOptions = ({ canSearchMovies, onOptionChange }: Props) => {
  return (
    <div className='d-flex justify-content-center align-items-center m-3'>
      <ListGroup horizontal>
        <ListGroup.Item
          variant={canSearchMovies ? 'info' : 'dark'}
          action
          onClick={() => onOptionChange(true)}
        >
          Movies
        </ListGroup.Item>
        <ListGroup.Item
          variant={!canSearchMovies ? 'info' : 'dark'}
          action
          onClick={() => onOptionChange(false)}
        >
          Series
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}
