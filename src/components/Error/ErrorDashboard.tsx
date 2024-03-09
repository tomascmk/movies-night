import { Col, Container, Row, Image, Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ErrorDashboard = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Alert
          key=''
          variant='primary'
          className='mt-5 d-flex justify-content-center'
        >
          We couldn't find the page you are looking for. You can
          <Alert.Link href='/' style={{ marginLeft: 4 }}>
            return to dashboard
          </Alert.Link>
          .
        </Alert>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center mt-5'>
          <Image src='../../../public/img/closed-cinema.png' />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center mt-5'>
          <Button href='/' variant='primary'>
            Home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
