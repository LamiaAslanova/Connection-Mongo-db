import React, { useContext, useEffect } from 'react'
import MainContext from '../../../context/context'
import { useParams } from 'react-router'
import axios from 'axios'

const Detail = () => {
    const { data, setData, addToCart } = useContext(MainContext)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then(res => {
            setData(res.data)
        })
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="col-6">
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <p>${data.price}</p>
                        <button onClick={()=>addToCart(data)} className='btn btn-primary'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail