import React from 'react'
import { Link } from 'react-router-dom'
import '../../site/Footer/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row footer__bottom">
          <div className="col-12">
            <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <Link>Colorlib</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer