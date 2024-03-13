import { Modal, Button } from 'react-bootstrap'
import { type Title } from '../../types/TitlesTypes'
import styles from './TitlesModal.module.scss'
import { useMemo } from 'react'
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
