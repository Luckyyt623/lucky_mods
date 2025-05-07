import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loading from './components/site/Loading'
import Mods from './pages/Mods'

export default function App() {

  const Home = lazy(() => import('./pages/Home'))

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/mods' element={<Mods/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}
