import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import PageNotFound from './PageNotFound'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <main>
      <Routes>
        <Route exect path='/' element={<Home/>} />
        <Route exect path='/about' element={<About/>} />
        <Route exect path='/contact' element={<Contact/>} />
        <Route exect path='/*' element={<PageNotFound/>} />

      </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App