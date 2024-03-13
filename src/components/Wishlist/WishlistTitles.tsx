import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import { type Title } from '../../types/TitlesTypes'
import { useCallback } from 'react'
import { WishListItem } from './WishListItem'

interface Props {
  titles: Title[]
  onTitleRemoved(title: Title): void
}

export const WishlistTitles = ({ titles, onTitleRemoved }: Props) => {
  const handleTitleRemoved = useCallback((title: Title) => {
    console.log('Removed Title', title)
    onTitleRemoved(title)
  }, [])

  return (
    <Tab.Container id='list-group-tabs-example' defaultActiveKey=''>
      <Row>
        <Col sm={12}>
          <ListGroup>
            {titles.map((title, i) => (
              <ListGroup.Item key={`wishlistTitle-${i}`}>
                <WishListItem
                  title={title}
                  onTitleSelected={handleTitleRemoved}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Tab.Container>
  )
}
