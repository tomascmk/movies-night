import { useCallback, useState } from 'react'
import { AsyncApiCallStatus } from '../../hooks/useAsyncCall'
import { TitlesResponse } from '../../types/ApiTypes'
import { Title } from '../../types/TitlesTypes'
import { TitlesModal } from '../TitlesModal/TitlesModal'
import { SearchTitlesList } from './SearchTitlesList'

interface Props {
  titles?: Title[]
  loader: AsyncApiCallStatus<TitlesResponse>
}
export const SearchResults = ({ titles, loader }: Props) => {
  const [titleToShow, setTitletoShow] = useState<Title | undefined>(undefined)

  const handleModalClose = useCallback(() => setTitletoShow(undefined), [])

  const handleTitleSelected = useCallback(
    (title: Title) => setTitletoShow(title),
    []
  )

  return (
    <>
      {titles === undefined ? (
        'Here will appear all the titles'
      ) : loader.loading ? (
        'Loading Titles'
      ) : titles.length ? (
        <SearchTitlesList
          titles={titles}
          onTitleSelected={handleTitleSelected}
        />
      ) : (
        'Movie not found'
      )}
      {titleToShow && (
        <TitlesModal titleToShow={titleToShow} onHide={handleModalClose} />
      )}
    </>
  )
}
