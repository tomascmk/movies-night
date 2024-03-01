import ListGroup from 'react-bootstrap/ListGroup'
import { TitlesListCard } from './TitlesListCard'
import { Title } from '../../types/TitlesTypes'

interface Props {
  titles: Title[]
  onTitleSelected(title?: Title): void
}

export const SearchTitlesList = ({
  titles,
  onTitleSelected
}: Props): JSX.Element => {
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
            <TitlesListCard title={title} onTitleSelected={onTitleSelected} />
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}
