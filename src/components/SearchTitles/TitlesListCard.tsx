import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { RateBadge } from './RateBadge'
import { type Title } from '../../types/TitlesTypes'
import { Button } from 'react-bootstrap'
import { useCallback } from 'react'

interface Props {
  title?: Title
  onTitleSelected(title?: Title): void
}
export const TitlesListCard = ({
  title,
  onTitleSelected
}: Props): JSX.Element => {
  const handleTitleSelected = useCallback(() => onTitleSelected(title), [title])

  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={2} md={1}>
              {title?.image ? (
                <Image
                  src={`https://media.themoviedb.org/t/p${title.image}`}
                  style={{ maxHeight: 100 }}
                  rounded
                />
              ) : (
                <Image
                  src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                  style={{ maxHeight: 100 }}
                  rounded
                />
              )}
            </Col>
            <Col
              xs={2}
              md={1}
              className='d-flex justify-content-center align-items-center'
            >
              <RateBadge rate={title?.rate} votes={title?.totalVotes} />
            </Col>
            <Col xs={6} md={8}>
              <Card.Title>{title?.title}</Card.Title>
              {title?.desc ? (
                <Card.Subtitle className='mb-2 text-muted'>
                  {title?.desc}
                </Card.Subtitle>
              ) : (
                ''
              )}
            </Col>
            <Col
              xs={2}
              md={2}
              className='d-flex justify-content-center align-items-center'
            >
              {title && (
                <Button onClick={handleTitleSelected}>Ver Pelicula</Button>
              )}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}
