import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { SearchScreen } from './components/SearchTitles/SearchScreen'
import { routes } from './constants/RouteConstants'
import { ErrorDashboard } from './components/Error/ErrorDashboard'
import { MovieProfilePage } from './components/Movie/MovieProfilePage'

const App = (): JSX.Element => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={routes.Home} Component={SearchScreen}></Route>
            <Route
              path={routes.MovieProfile}
              Component={MovieProfilePage}
            ></Route>
            <Route path='*' Component={ErrorDashboard} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
