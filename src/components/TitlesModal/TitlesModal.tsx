import { Modal, Container, Row, Col, Button } from 'react-bootstrap'
import { type Title } from '../../types/TitlesTypes'
import styles from './TitlesModal.module.scss'
import { useMemo } from 'react'
import { RateBadge } from '../SearchTitles/RateBadge'
import { TitleImage } from '../TitleImage/TitleImage'

interface Props {
  titleToShow?: Title
  onHide(): void
}
export const TitlesModal = ({ titleToShow, onHide }: Props) => {
  const canShowModal = useMemo(() => titleToShow !== undefined, [])

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

          <Row>
            <Col xs={12} md={12}>
              {titleToShow?.desc}
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
