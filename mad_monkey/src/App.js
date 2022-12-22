import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import Vision from './pages/Vision'

const App = () => {

  return (
    <div className=''>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/services' element={<Services/> } />
        <Route exact path='/blogs' element={<Blog/> } />
        <Route exact path='/casestudies' element={<CaseStudies/>} />
        <Route exact path='/vision' element={<Vision/> } />
      </Routes>

    </div>
  )
}

export default App