import Image from 'react-bootstrap/Image'
interface Props {
  src?: string
}
export const TitleImage = ({ src }: Props) => {
  return (
    <>
      {src ? (
        <Image
          src={`http://image.tmdb.org/t/p/w500/${src}`}
          style={{ maxHeight: 100 }}
          rounded
        />
      ) : (
        <Image
          src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
          style={{ maxHeight: 100 }}
          rounded
        />
      )}
    </>
  )
}
