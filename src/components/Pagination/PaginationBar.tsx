import { useMemo, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'

interface Props {
  pageCount: number
  onPageChange: (pageNumber: number) => void
}

export const PaginationBar = ({ pageCount, onPageChange }: Props) => {
  const [activePage, setActivePage] = useState(1)
  console.log('pageCount', pageCount)
  console.log('activePage', activePage)
  const isItemDisabled = useMemo(
    () => (pageCount === 0 ? true : false),
    [pageCount]
  )

  const handlePageChange = (number: number) => {
    setActivePage(number)
    onPageChange(number)
  }

  const pages = useMemo(() => {
    let items = []
    let start = activePage - 3
    let end = activePage + 3

    if (activePage === 0 || activePage === pageCount) {
      start = activePage === pageCount ? activePage - 5 : activePage
      end = activePage === pageCount ? activePage : activePage + 5
    }

    for (let number = start; number <= end; number++) {
      if (number >= 1 && number <= pageCount) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === activePage}
            disabled={isItemDisabled}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        )
      }
    }
    return items
  }, [activePage, pageCount])

  return (
    <Pagination
      size='lg'
      className='justify-content-center align-content-center pt-3 pb-3'
    >
      {activePage > 1 && !isItemDisabled && (
        <>
          {activePage - 1 !== 1 && (
            <Pagination.First onClick={() => handlePageChange(1)} />
          )}

          <Pagination.Prev onClick={() => handlePageChange(activePage - 1)} />
        </>
      )}
      {pages}
      {activePage < pageCount && !isItemDisabled && (
        <>
          <Pagination.Next onClick={() => handlePageChange(activePage + 1)} />
          {activePage + 1 !== pageCount && (
            <Pagination.Last onClick={() => handlePageChange(pageCount)} />
          )}
        </>
      )}
    </Pagination>
  )
}
