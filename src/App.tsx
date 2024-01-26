import { useState } from 'react'
import { SearchMovie } from './components/SearchMovies/SearchMovie'

// or, specify which plugins you need:

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchMovie />
    </>
  )
}

export default App
