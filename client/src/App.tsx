import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loading from './components/site/Loading'
import Mods from './pages/Mods'

export default function App() {

  const Home = lazy(() => import('./pages/Home')) 
  const Admin = lazy(() => import('./pages/Admin')) 
  const ModLinks = lazy(() => import('./pages/ModLinks'))
  const SelectedMod = lazy(() => import('./pages/SelectedMod'))

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/mods' element={<Mods/>}/>
          <Route path='/lucky/auth/admin' element={<Admin/>}/>
          <Route path='/game/slither' element={<ModLinks typegame={"slither"}/>}/>
          <Route path='/game/minecraft' element={<ModLinks typegame={"minecraft"}/>}/>
          <Route path="/mod/:gamemod" element={ <SelectedMod/>}/>
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </Suspense>
    </Router>
  )
}
