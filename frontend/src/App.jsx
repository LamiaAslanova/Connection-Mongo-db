import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ROUTES from "./routes/routes"
import MainContext from "./context/context"
import { useEffect, useState } from "react"
import './App.css'
import axios from "axios"

function App() {
  const router = createBrowserRouter(ROUTES)

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search,setSearch]=useState("")
  const [basketItems, setBasketItems] = useState(localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems')) : [])
  const [wishlistItems, setWishlistItems] = useState(localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : [])
  const [sortBy,setSortBy]=useState(null)

  const addToCart = (item) => {
    const target = basketItems.find(x => x.item._id == item._id)
    if (!target) {
      let newBasketItem = {
        item: item,
        count: 1,
        totalPrice: item.price
      }
      setBasketItems([...basketItems, newBasketItem])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems, newBasketItem]))
    }
    else {
      target.count += 1
      target.totalPrice += item.price
      setBasketItems([...basketItems])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems]))
    }
  }

  const increaseCart = (item) => {
    const target = basketItems.find(x => x.item._id == item.item._id)
    target.count += 1
    target.totalPrice += item.item.price
    setBasketItems([...basketItems])
    localStorage.setItem('basketItems', JSON.stringify([...basketItems]))
  }

  const decreaseCart = (item) => {
    const target = basketItems.find(x => x.item._id == item.item._id)
    if (target.count > 0) {
      target.count -= 1
      target.totalPrice -= item.item.price
      setBasketItems([...basketItems])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems]))
    }
  }

  const removeFromCart = (item) => {
    setBasketItems([...basketItems.filter(x => x.item._id !== item.item._id)])
    localStorage.setItem('basketItems',JSON.stringify([...basketItems.filter(x => x.item._id !== item.item._id)]))
  }

  const addToWishlist = (item) => {
    const target = wishlistItems.find(x => x.item._id == item._id)
    if (!target) {
      let newWishlistItem = {
        item: item
      }
      setWishlistItems([...wishlistItems, newWishlistItem])
      localStorage.setItem('wishlistItems', JSON.stringify([...wishlistItems, newWishlistItem]))
    }
    else{
      setWishlistItems([...wishlistItems.filter(y => y.item._id !== target.item._id)])
      localStorage.setItem('wishlistItems', JSON.stringify([...wishlistItems.filter(y => y.item._id !== target.item._id)]))
    }
  }

  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then(res => {
      setData([...res.data])
      setLoading(false)
    }).catch(error => {
      setError(error)
      setLoading(false)
    })
  }, [])

  const contextData = {
    data, setData, loading, setLoading, error, setError, addToCart, basketItems, increaseCart, decreaseCart, removeFromCart, addToWishlist, wishlistItems, setWishlistItems,search,setSearch,sortBy,setSortBy
  }

  return (

    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  )
}

export default App