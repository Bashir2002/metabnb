import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'
import { Home, About, Error, SharedLayout, Contact } from './pages/index'
import { useGlobalContext } from './context'

function App() {
  const { loading } = useGlobalContext()
  // if (loading) {
  //   return <h2>Loading.....</h2>
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='place' element={<About />} />
          {/* <Route path='contacts' element={<Contact />} /> */}
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
