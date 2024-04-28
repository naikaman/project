import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer_content">
        <div className="footer_content_left">
            <img src={assets.cake_icon} alt="" />
            <p>ffff</p>
            <div className='footer-social-icons'>
                <img src={assets.youtube_icon} alt="" />
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
            </div>
        </div>
        <div className="footer_content_center">
            <h2>Quick Link</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>privacy policy</li>
            </ul>
        </div>
        <div className="footer_content_right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91-9606785079</li>
              <li>bakiescakery@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer_copyright">copyright 2024 @ BakiesCakary.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
