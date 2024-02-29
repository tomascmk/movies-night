import ListGroup from 'react-bootstrap/ListGroup'
import { TitlesListCard } from './TitlesListCard'
import { Title } from '../../types/TitlesTypes'

interface Props {
  titles: Title[]
}
export const SearchTitlesList = ({ titles }: Props): JSX.Element => {
  return (
    <ListGroup>
      {titles.length > 0 &&
        titles.map((title) => (
          <ListGroup.Item
            style={{
              backgroundColor: 'transparent',
              borderColor: 'transparent'
            }}
          >
            <TitlesListCard title={title} />
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}
