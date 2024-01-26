import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export interface Movie {
  title: string
  desc?: string
  image?: string
  url?: string
}

interface Props {
  movie?: Movie
}
export const MoviesListCard = ({ movie }: Props): JSX.Element => {
  return (
    <>
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col xs={3} md={2}>
                {movie?.image ? (
                  <Image src={movie.image} style={{ maxHeight: 100 }} rounded />
                ) : (
                  <Image
                    src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                    style={{ maxHeight: 100 }}
                    rounded
                  />
                )}
              </Col>
              <Col xs={9} md={10}>
                <Card.Title>{movie?.title}</Card.Title>
                {movie?.desc ? (
                  <Card.Subtitle className='mb-2 text-muted'>
                    {movie?.desc}
                  </Card.Subtitle>
                ) : (
                  ''
                )}
                {movie?.url && (
                  <Card.Link href={movie.url}>Ver Pelicula</Card.Link>
                )}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  )
}
