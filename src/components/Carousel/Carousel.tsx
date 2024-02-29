import { Carousel } from 'react-bootstrap'
import { ImageCarousel } from './ImageCarousel'
import styles from './Carousel.module.scss'

export const SearchSlider = () => {
  const imgs = [
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1615986201152-7686a4867f30?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]
  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        {imgs.map((img) => (
          <Carousel.Item>
            <ImageCarousel src={img} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
