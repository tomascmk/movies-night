import { useCallback, useMemo, useState } from 'react'
import { SearchTitle } from './SearchTitles'
import { PaginationBar } from '../Pagination/PaginationBar'
import { useAsyncCall } from '../../hooks/useAsyncCall'
import { getMovies, getMoviesByName } from '../../services/MoviesService'
import { SearchSlider } from '../Carousel/Carousel'
import { ScreenLoader } from '../Loader/ScreenLoader'
import { SearchOptions } from './SearchOptions'
import { TitlesResponse } from '../../types/ApiTypes'
import { Title } from '../../types/TitlesTypes'
import { getSeries, getSeriesByName } from '../../services/SeriesService'

export const SearchScreen = () => {
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searching, setSearching] = useState(false)
  const [titles, setTitles] = useState<Title[] | undefined>(undefined)
  const [titleToSearch, settitleToSearch] = useState<string | undefined>('')
  const [canSearchMovies, setCanSearchMovies] = useState(true)
  const [titlesSearched, setTitlesSearched] = useState<Title[] | undefined>(
    undefined
  )
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const titlestoShow = useMemo(() => {
    if (titleToSearch && titlesSearched) {
      return titlesSearched
    } else {
      return titles
    }
  }, [titles, titlesSearched])

  const searchDiscoverLoader = useAsyncCall(async () => {
    let result: TitlesResponse
    if (canSearchMovies) {
      result = await getMovies({
        page: currentPage
      })
    } else {
      result = await getSeries({
        page: currentPage
      })
    }
    if (result.data) {
    }
    setTitles(result.data)
    setTotalPages(result.totalPages)
    return result
  }, [currentPage, canSearchMovies])

  const searchByNameLoader = useAsyncCall(async () => {
    if (!titleToSearch || !titleToSearch.length || !titlestoShow) {
      setTitlesSearched(titles)
      return
    }
    setSearching(true)
    let result: TitlesResponse
    if (canSearchMovies) {
      result = await getMoviesByName({
        query: titleToSearch,
        page: currentPage
      })
    } else {
      result = await getSeriesByName({
        query: titleToSearch,
        page: currentPage
      })
    }
    setTitlesSearched(result.data)
    setSearching(false)
    return result
  }, [titleToSearch, canSearchMovies])

  const handleSearchTitle = useCallback((title: string): void => {
    settitleToSearch(title)
  }, [])

  const handleOptionChange = useCallback((option: boolean): void => {
    setCanSearchMovies(option)
  }, [])

  return (
    <>
      {(searching ||
        searchDiscoverLoader.loading ||
        searchByNameLoader.loading) && <ScreenLoader />}
      <SearchSlider />
      <SearchOptions
        onOptionChange={handleOptionChange}
        canSearchMovies={canSearchMovies}
      />
      <SearchTitle
        titles={titlestoShow}
        titlesLoader={searchDiscoverLoader || searching}
        onSearch={handleSearchTitle}
      />
      <PaginationBar pageCount={totalPages} onPageChange={handlePageChange} />
    </>
  )
}
