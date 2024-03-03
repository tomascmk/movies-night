import {
  Modal,
  Container,
  Row,
  Col,
  Button,
  Placeholder,
  Alert
} from 'react-bootstrap'
import { StreamProvider, type Title } from '../../types/TitlesTypes'
import styles from './TitlesModal.module.scss'
import { useCallback, useMemo, useState } from 'react'
import { RateBadge } from '../SearchTitles/RateBadge'
import { TitleImage } from '../TitleImage/TitleImage'
import { ModalSwitch } from './ModalSwitch'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { StreamingService } from '../../services/StreamingService'
import { useProvidersTranslation } from '../../hooks/useProvidersTranslation'
import { StreamingHelper } from '../../helpers/StreamingHelper'

interface Props {
  titleToShow?: Title
  onHide(): void
}
export const TitlesModal = ({ titleToShow, onHide }: Props) => {
  const [canShowDescription, setCanShowDescription] = useState(true)
  const [streamProvider, setStreamProvider] = useState<StreamProvider[]>([])
  const canShowModal = useMemo(() => titleToShow !== undefined, [])
  const { t } = useProvidersTranslation()
  const handleOptionChange = useCallback((option: boolean) => {
    setCanShowDescription(option)
  }, [])

  const streamingLoader = useAsyncCall(async () => {
    const providerAvailable = await StreamingService.getStreamingByTitle(
      titleToShow
    )
    setStreamProvider(providerAvailable)
    return providerAvailable
  }, [])

  const getStreamProvider = useCallback((): JSX.Element => {
    if (!streamProvider.length) {
      return <span>No stream provider available</span>
    }
    console.log('streamProvider', streamProvider)
    return (
      <Col>
        {streamProvider.map((service) => (
          <Row key={service} className='mb-2'>
            <Col className='d-flex justify-content-start align-items-center'>
              {t(service)}
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
              <Alert.Link
                href={StreamingHelper.getProvidersUrl(service)}
                target='_blank'
              >
                Visite site
              </Alert.Link>
            </Col>
          </Row>
        ))}
      </Col>
    )
  }, [streamProvider])

  return (
    <Modal
      show={canShowModal}
      onHide={onHide}
      className={styles.titlesModal}
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter d-flex'>
          {titleToShow?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='grid-example'>
        <Container>
          <Row className='mb-3'>
            <Col xs={12} md={4}>
              <TitleImage src={titleToShow?.image} />
            </Col>
            <Col xs={12} md={8}>
              <RateBadge
                rate={titleToShow?.rate}
                votes={titleToShow?.totalVotes}
              />
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs={12} md={12}>
              <ModalSwitch
                canShowDescription={canShowDescription}
                onOptionChange={handleOptionChange}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              {canShowDescription ? (
                <>{titleToShow?.desc}</>
              ) : (
                <Container className='mt-3'>
                  {streamingLoader.completed ? (
                    getStreamProvider()
                  ) : (
                    <Col>
                      <Row>
                        <Placeholder animation='glow'>
                          <Placeholder xs={5} /> <Placeholder xs={3} />{' '}
                          <Placeholder xs={7} /> <Placeholder xs={5} />{' '}
                          <Placeholder xs={8} /> <Placeholder xs={4} />{' '}
                        </Placeholder>
                      </Row>
                    </Col>
                  )}
                </Container>
              )}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
