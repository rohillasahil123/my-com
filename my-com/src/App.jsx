import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Aboutus from './pages/Aboutus'

const App = () => {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/cart'  element={<Cart/>}  />
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App