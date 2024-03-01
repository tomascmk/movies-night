import { useMemo, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'

interface Props {
  pageCount: number
  onPageChange: (pageNumber: number) => void
}

export const PaginationBar = ({ pageCount, onPageChange }: Props) => {
  const [activePage, setActivePage] = useState(1)

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
    for (let number = activePage; number <= activePage + 5; number++) {
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
    return items
  }, [activePage, pageCount])

  return (
    <Pagination
      size='lg'
      className='justify-content-center align-content-center pt-3 pb-3'
    >
      {activePage > 1 && !isItemDisabled && (
        <>
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev onClick={() => handlePageChange(activePage - 1)} />
        </>
      )}
      {pages}
      {activePage < pageCount && !isItemDisabled && (
        <>
          <Pagination.Next onClick={() => handlePageChange(activePage + 1)} />
          <Pagination.Last onClick={() => handlePageChange(pageCount)} />
        </>
      )}
    </Pagination>
  )
}
