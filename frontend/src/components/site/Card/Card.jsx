import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({card}) => {
    return (
        <div className="col-4">
            <div class="card mb-4" style={{width: "18 rem"}}>
                <Link to={`http://localhost:5173/details/${card.id}`}><img src={card.image} class="card-img-top" alt="..." /></Link>
                <div class="card-body">
                    <p class="card-title">{card.title}</p>
                    <p class="card-title">{card.description}</p>
                    <p class="card-title">${card.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card