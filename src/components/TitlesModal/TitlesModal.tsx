import {
  Modal,
  Container,
  Row,
  Col,
  Button,
  Placeholder,
  Alert,
  OverlayTrigger,
  Tooltip,
  Badge,
  Image,
  Accordion
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
import { TitlesRecomended } from './TitlesRecomended'
import { MovieProfile } from '../Movie/MovieProfile'

interface Props {
  titleToShow?: Title
  onHide(): void
}
export const TitlesModal = ({ titleToShow, onHide }: Props) => {
  const canShowModal = useMemo(() => titleToShow !== undefined, [titleToShow])

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
        {titleToShow && <MovieProfile titleToShow={titleToShow} />}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
