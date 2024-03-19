import Image from 'react-bootstrap/Image'
interface Props {
  src?: string
  height?: number
}
export const TitleImage = ({ src, height = 100 }: Props) => {
  return (
    <>
      {src ? (
        <Image
          src={`http://image.tmdb.org/t/p/w500/${src}`}
          style={{ maxHeight: height }}
          rounded
        />
      ) : (
        <Image
          src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
          style={{ maxHeight: height }}
          rounded
        />
      )}
    </>
  )
}
