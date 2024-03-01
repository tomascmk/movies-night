import { Navbar, Container } from 'react-bootstrap'

export const NavbarMenu = () => {
  return (
    <Navbar className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src='../../../public/img/pop-corn.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Movies Night
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
