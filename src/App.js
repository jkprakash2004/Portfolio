import React from 'react'
import "./App.css"
import Projects from './components/projects/Projects'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Routers from './components/Routes/Routers'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Routers/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App