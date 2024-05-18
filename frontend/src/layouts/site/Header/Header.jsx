import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MainContext from '../../../context/context'

const Header = () => {
  const {basketItems,search,setSearch} = useContext(MainContext)

  return (
    <header>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="header__top__left">
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
                <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
              </div>
            </div>
            <div className="col-4">
              <div className="header__top__middle">
                <Link to='/'>Shoppers</Link>
              </div>
            </div>
            <div className="col-4">
              <div className="header__top__right">
                <Link to='#'><i class="fa-solid fa-user"></i></Link>
                <Link to='/wishlist'><i class="fa-regular fa-heart"></i></Link>
                <Link to='/cart' className='pos'><i class="fa-solid fa-cart-shopping"></i><sup>{basketItems.length}</sup></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header