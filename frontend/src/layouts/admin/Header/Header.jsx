import React from 'react'
import { Link } from 'react-router-dom'
import '../../site/Header/Header.css'

const Header = () => {
  return (
    <header>
      <div className="header__bottom">
        <ul>
          <li><Link to='/admin'>Dashboard</Link></li>
          <li><Link to='/admin/products'>Products</Link></li>
          <li><Link to='/admin/add'>Add</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header