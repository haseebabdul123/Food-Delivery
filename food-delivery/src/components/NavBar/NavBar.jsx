import React, { useState } from 'react'
import "./NavBar.css"
import { assets } from '../../assets/assets'
const NavBar = ({setShowLogin}) => {
    const [menu , setMenu] = useState("Home")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="nav-menu">
        <li onClick={(()=>setMenu("Home"))} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={(()=>setMenu("Menu"))} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li onClick={(()=>setMenu("Deals"))} className={menu === "Deals" ? "active" : ""}>Deals</li>
        <li onClick={(()=>setMenu("Contact Us"))} className={menu === "Contact Us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="" className="search" />
        <div className="basket-icon">
            <img src={assets.basket} alt="" className="basket" />
        </div>
        <button onClick={(()=>setShowLogin(true))}>Sign in</button>
      </div>
    </div>
  )
}

export default NavBar
