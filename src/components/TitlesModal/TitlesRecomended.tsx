import { useCallback, useState } from 'react'
import { Accordion, Row, Col, Image, Alert, ListGroup } from 'react-bootstrap'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { getRecomedationsById } from '../../services/MoviesService'
import { Title } from '../../types/TitlesTypes'
import { routes } from '../../constants/RouteConstants'

interface Props {
  title: Title
}
export const TitlesRecomended = ({ title }: Props) => {
  const [recomendations, setRecomendations] = useState<Title[]>([])

  const recomendationLoader = useAsyncCall(async () => {
    if (title?.id === undefined) return []
    const recomended = await getRecomedationsById(title.id, {
      page: 1
    })
    setRecomendations(recomended)
  }, [title])

  const renderRecomendations = useCallback((): JSX.Element => {
    const recomendationsToShow = recomendations.slice(0, 5)
    return (
      <ListGroup variant='flush'>
        {recomendationsToShow.map((titleRecomended) => (
          <ListGroup.Item>
            <Alert.Link
              href={`${routes.MovieProfile}?id=${titleRecomended.id}`}
            >
              {titleRecomended.title}
            </Alert.Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }, [recomendations])

  return (
    <Accordion flush>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>
          <Row>
            <Col xs={2}>
              <Image src='../../../public/img/pop-corn.svg' width='18' />
            </Col>
            <Col xs={10} className='d-flex align-items-center'>
              Related Titles
            </Col>
          </Row>
        </Accordion.Header>
        <Accordion.Body>
          {recomendationLoader.loading ? (
            <div>Loading...</div>
          ) : (
            renderRecomendations()
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
