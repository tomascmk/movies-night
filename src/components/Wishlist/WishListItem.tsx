import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { type Title } from '../../types/TitlesTypes'
import { ButtonGroup, Dropdown } from 'react-bootstrap'
import { useCallback } from 'react'
import { TitleImage } from '../TitleImage/TitleImage'
import { routes } from '../../constants/RouteConstants'

interface Props {
  title?: Title
  onTitleSelected(title?: Title): void
}
export const WishListItem = ({
  title,
  onTitleSelected
}: Props): JSX.Element => {
  const handleTitleSelected = useCallback(() => onTitleSelected(title), [title])

  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={3} md={3}>
              <TitleImage src={title?.image} />
            </Col>
            <Col xs={5} md={7}>
              <Card.Subtitle className='mt-2'>{title?.title}</Card.Subtitle>
            </Col>
            <Col
              xs={4}
              md={2}
              className='d-flex justify-content-center align-items-center'
            >
              {title && (
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle variant='dark' id='dropdown-split-basic' />
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href={`${routes.MovieProfile}?id=${title.id}`}
                    >
                      Title description
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleTitleSelected}>
                      Remove title
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}
