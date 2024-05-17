import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Wishlist = () => {
  const { wishlistItems, addToWishlist } = useContext(MainContext)

  return (
    <>
      <div className="container">
        <div className="row">
          {
            wishlistItems.map((wishlistItem, index) => {
              return (
                <div key={index} className="col-4">
                  <div class="card mb-4" style={{ width: "18 rem" }}>
                    <img src={wishlistItem.item.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{wishlistItem.item.title}</h5>
                      <p class="card-title">{wishlistItem.item.description}</p>
                      <p class="card-title">${wishlistItem.item.price}</p>
                      <button onClick={() => addToWishlist(wishlistItem.item)}><i class="fa-solid fa-heart"></i></button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Wishlist