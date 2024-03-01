import { Layout } from './components/Layout/Layout'
import { SearchScreen } from './components/SearchTitles/SearchScreen'

const App = (): JSX.Element => {
  return (
    <>
      <Layout>
        <SearchScreen />
      </Layout>
    </>
  )
}

export default App
