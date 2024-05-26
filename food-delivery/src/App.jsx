import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from "./pages/Home/Home"
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Routes , Route } from 'react-router-dom'
import StoreContextProvider from './components/context/StoreContext'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin , setShowLogin] = useState(false)
  return (

    <StoreContextProvider>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </StoreContextProvider>
  )
}

export default App
