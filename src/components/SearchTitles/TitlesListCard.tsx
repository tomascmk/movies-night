import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { RateBadge } from './RateBadge'
import { type Title } from '../../types/TitlesTypes'

interface Props {
  title?: Title
}
export const TitlesListCard = ({ title }: Props): JSX.Element => {
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
            <Col xs={2} md={1}>
              <RateBadge rate={title?.rate} votes={title?.totalVotes} />
            </Col>
            <Col xs={8} md={10}>
              <Card.Title>{title?.title}</Card.Title>
              {title?.desc ? (
                <Card.Subtitle className='mb-2 text-muted'>
                  {title?.desc}
                </Card.Subtitle>
              ) : (
                ''
              )}
              {title?.url && (
                <Card.Link href={title.url}>Ver Pelicula</Card.Link>
              )}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}
