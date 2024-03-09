import { useCallback, useState } from 'react'
import {
  Accordion,
  Row,
  Col,
  Image,
  Alert,
  Container,
  Carousel,
  CarouselItem
} from 'react-bootstrap'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { getRecomedationsById } from '../../services/MoviesService'
import { Title } from '../../types/TitlesTypes'
import { TitleImage } from '../TitleImage/TitleImage'

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
    return (
      <Carousel>
        {recomendations.map((titleRecomended) => (
          <CarouselItem>
            <Row>
              <Col xs={4} className='justify-content-center'>
                <Alert.Link>
                  <TitleImage src={titleRecomended.image} />
                </Alert.Link>
                <span>{titleRecomended.title}</span>
              </Col>
            </Row>
          </CarouselItem>
        ))}
      </Carousel>
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
