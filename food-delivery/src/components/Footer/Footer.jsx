import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="left-content">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia dolorum minus perspiciatis architecto accusantium ea consequatur, harum molestias, perferendis quibusdam, temporibus culpa. Recusandae est earum quibusdam sapiente iusto sed.</p>
        <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
        </div>
        </div>
        <div className="center-content">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Deals</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right-content">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 293 3234 432</li>
            <li>comapny@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
