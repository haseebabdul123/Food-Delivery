import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order Food anywhere anytime.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo similique doloremque pariatur asperiores adipisci saepe quam, praesentium aspernatur iusto. Magni repudiandae voluptatibus placeat praesentium quod fugit odit cupiditate in.</p>
      <button>Order Now</button>
      </div>
      <img src={assets.header} alt="" className="head" />
    </div>
  )
}

export default Header
