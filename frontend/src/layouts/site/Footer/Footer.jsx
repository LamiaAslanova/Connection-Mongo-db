import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__top">
          <div className="col-6">
            <div className="row">
              <div className="col-12 nav">
                <h4>Navigations</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <ul>
                  <li>
                    <Link>Sell online</Link>
                  </li>
                  <li>
                    <Link>Features</Link>
                  </li>
                  <li>
                    <Link>Shopping cart</Link>
                  </li>
                  <li>
                    <Link>Store builder</Link>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul>
                  <li>
                    <Link>Mobile commerce</Link>
                  </li>
                  <li>
                    <Link>Dropshipping</Link>
                  </li>
                  <li>
                    <Link>Website development</Link>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul>
                  <li>
                    <Link>Point of sale</Link>
                  </li>
                  <li>
                    <Link>Hardware</Link>
                  </li>
                  <li>
                    <Link>Software</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6 right-6">
                <h4>Promo</h4>
                <Link><img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp" /></Link>
                <Link className='find'>Finding Your Perfect Shoes</Link>
                <p>Promo from nuary 15 — 25, 2019</p>
              </div>
              <div className="col-6 right-6">
                <h4>Contact Info</h4>
                <div className="contact">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                </div>
                <div className="contact">
                  <i class="fa-solid fa-phone"></i>
                  <Link>+2 392 3929 210</Link>
                </div>
                <div className="contact">
                  <i class="fa-solid fa-envelope"></i>
                  <p>emailaddress@domain.com</p>
                </div>
                <h4>Subscribe</h4>
                <div className="send__email">
                  <input type="text" placeholder='Email'/>
                  <button>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer__bottom">
          <div className="col-12">
            <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <Link>Colorlib</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer