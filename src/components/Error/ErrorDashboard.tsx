import { Col, Container, Row, Image, Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ErrorDashboard = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Alert key='' variant='info' className='mt-5'>
          <Alert.Heading>Page not found.</Alert.Heading>
          We couldn't find the page you are looking for.
          <hr />
          <div className='d-flex justify-content-center'>
            <Button href='/' variant='info'>
              Return
            </Button>
          </div>
        </Alert>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center mt-5'>
          <Image src='../../../public/img/closed-cinema.png' />
        </Col>
      </Row>
    </Container>
  )
}
