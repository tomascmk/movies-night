import { useCallback, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Placeholder,
  Alert,
  Badge,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap'
import { RateBadge } from '../SearchTitles/RateBadge'
import { TitleImage } from '../TitleImage/TitleImage'
import { ModalSwitch } from '../TitlesModal/ModalSwitch'
import { TitlesRecomended } from '../TitlesModal/TitlesRecomended'
import { StreamProvider, Title } from '../../types/TitlesTypes'
import { StreamingHelper } from '../../helpers/StreamingHelper'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { useProvidersTranslation } from '../../hooks/useProvidersTranslation'
import { StreamingService } from '../../services/StreamingService'

interface Props {
  titleToShow: Title
}

export const MovieProfile = ({ titleToShow }: Props) => {
  const [canShowDescription, setCanShowDescription] = useState(true)
  const [streamProvider, setStreamProvider] = useState<StreamProvider[]>([])
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

  const renderTooltip = (props: any) => (
    <Tooltip id='button-tooltip' {...props}>
      If the {titleToShow?.type} releases now, that could be the reason why it
      is not available on any of the providers yet. Otherwise, it may not be
      available in your region.
    </Tooltip>
  )
  const getStreamProvider = useCallback((): JSX.Element => {
    if (!streamProvider.length) {
      return (
        <Alert
          key={'danger'}
          variant={'danger'}
          className='d-flex justify-content-between'
        >
          No stream provider available.
          <OverlayTrigger
            placement='right'
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Alert.Link>
              <Badge bg='secondary'>?</Badge>
            </Alert.Link>
          </OverlayTrigger>
        </Alert>
      )
    }

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
    <Container>
      <Row className='mb-3 mt-4'>
        <Col>
          <TitleImage src={titleToShow?.image} height={300} />
        </Col>
        <Col>
          <RateBadge rate={titleToShow?.rate} votes={titleToShow?.totalVotes} />
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
      {titleToShow && (
        <Row className='mt-4'>
          <TitlesRecomended title={titleToShow} />
        </Row>
      )}
    </Container>
  )
}
