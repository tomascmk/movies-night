import { Modal, Container, Row, Col, Button } from 'react-bootstrap'
import { type Title } from '../../types/TitlesTypes'
import styles from './TitlesModal.module.scss'
import { useMemo } from 'react'

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
        <Modal.Title id='contained-modal-title-vcenter'>
          {titleToShow?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='grid-example'>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              {titleToShow?.rate}
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
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
