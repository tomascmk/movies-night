import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { useCallback, useState } from 'react'
import { Wishlist } from '../Wishlist/Wishlist'

export const NavbarMenu = () => {
  const canShowUserOptions = true

  const [canShowWishlist, setShowWishlist] = useState(false)

  const handleOpenWishlist = useCallback(() => {
    setShowWishlist(true)
  }, [canShowWishlist])

  const handleCloseWishlist = useCallback(() => {
    setShowWishlist(false)
  }, [canShowWishlist])

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
        {canShowUserOptions ? (
          <NavDropdown title='User' id='navbarScrollingDropdown'>
            <NavDropdown.Item href='#action3'>Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={handleOpenWishlist}>
              Wishlist
            </NavDropdown.Item>
            <NavDropdown.Item href='#action4'>Favourite</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action5'>Sign out</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Nav>
            <Nav.Link href='/signup'>Sign up</Nav.Link>
            <Nav.Link href='/signin'>Sign in</Nav.Link>
          </Nav>
        )}
      </Container>
      <Wishlist
        canShowWishlist={canShowWishlist}
        onClose={handleCloseWishlist}
      />
    </Navbar>
  )
}
