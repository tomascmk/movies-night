import Offcanvas from 'react-bootstrap/Offcanvas'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { Placeholder } from 'react-bootstrap'
import { getTopMovies } from '../../services/MoviesService'
import { useCallback, useState } from 'react'
import { type Title } from '../../types/TitlesTypes'
import { WishlistTitles } from './WishlistTitles'

interface Props {
  canShowWishlist: boolean
  onClose(): void
}
export const Wishlist = ({ canShowWishlist, onClose }: Props) => {
  const [titles, setTitles] = useState<Title[]>()

  const wishlistLoader = useAsyncCall(async () => {
    try {
      //const resp = await UserService.getWishlist()
      const resp = await getTopMovies()
      console.log('resp', resp)
      setTitles(resp)
    } catch (error) {
      console.log('error', error)
    }
  }, [])

  const handleTitleRemoved = useCallback((title: Title) => {
    console.log(title)
  }, [])

  return (
    <Offcanvas show={canShowWishlist} onHide={onClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Wishlist</Offcanvas.Title>
      </Offcanvas.Header>
      <hr />
      <Offcanvas.Body>
        {wishlistLoader.loading || titles === undefined ? (
          <>
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </>
        ) : (
          <WishlistTitles titles={titles} onTitleRemoved={handleTitleRemoved} />
        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}
