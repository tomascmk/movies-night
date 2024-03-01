import { Image } from 'react-bootstrap'
import styles from './Carousel.module.scss'
interface Props {
  src: string
}

export const ImageCarousel = ({ src }: Props) => {
  return (
    <div className={styles.carouselImage}>
      <Image src={src} />
    </div>
  )
}
