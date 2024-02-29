import { SearchResults } from './SearchResults'
import { AsyncApiCallStatus } from '../../hooks/useAsyncCall'
import { TitlesResponse } from '../../types/ApiTypes'
import { SearchBar } from './SearchBar'
import { Container, Col } from 'react-bootstrap'
import styles from './SearchTitle.module.scss'
import { Title } from '../../types/TitlesTypes'
interface Props {
  titles?: Title[]
  titlesLoader: AsyncApiCallStatus<TitlesResponse>
  onSearch(title: string): void
}
export const SearchTitle = ({
  titles,
  titlesLoader,
  onSearch
}: Props): JSX.Element => {
  return (
    <Container className={styles.searchContainter}>
      <Col>
        <SearchBar onSearch={onSearch} />
        <SearchResults titles={titles} loader={titlesLoader} />
      </Col>
    </Container>
  )
}
