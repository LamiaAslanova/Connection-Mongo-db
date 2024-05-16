import React from 'react'
import Card from '../Card/Card'

const Cards = ({cards}) => {
    return (
        <div className="container">
            <div className="row">
                {
                    cards.map((card, index)=>{
                        return(
                            <Card card={card} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards