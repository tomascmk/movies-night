import { AsyncApiCallStatus } from '../../hooks/useAsyncCall'
import { TitlesResponse } from '../../types/ApiTypes'
import { Title } from '../../types/TitlesTypes'
import { SearchTitlesList } from './SearchTitlesList'

interface Props {
  titles?: Title[]
  loader: AsyncApiCallStatus<TitlesResponse>
}
export const SearchResults = ({ titles, loader }: Props) => {
  return (
    <>
      {titles === undefined ? (
        'Here will appear all the titles'
      ) : loader.loading ? (
        'Loading Titles'
      ) : titles.length ? (
        <SearchTitlesList titles={titles} />
      ) : (
        'Movie not found'
      )}
    </>
  )
}
