import { Link } from 'react-router-dom'
import './Card.css'
import { useContext } from 'react'
import MainContext from '../../../context/context'

const Card = ({ card }) => {
    const {addToWishlist} = useContext(MainContext)

    return (
        <div className="col-4">
            <div class="card mb-4" style={{ width: "18 rem" }}>
                <Link to={`http://localhost:5173/details/${card._id}`}><img src={card.image} class="card-img-top" alt="..." /></Link>
                <div class="card-body">
                    <h5 class="card-title">{card.title}</h5>
                    <p class="card-title">{card.description}</p>
                    <p class="card-title">${card.price}</p>
                    <button onClick={()=>addToWishlist(card)}><i class="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Card