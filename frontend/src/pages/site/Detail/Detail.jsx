import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../../../context/context'
import { useParams } from 'react-router'
import axios from 'axios'
import { Helmet } from 'react-helmet'

const Detail = () => {
    const [item, setItem] = useState({})
    const { addToCart } = useContext(MainContext)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`).then(res => {
            console.log(res.data);
            setItem(res.data)
        })
    }, [])

    return (
        <>
            <Helmet>
                <title>{`Detail - ${item.title}`}</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="col-6">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                        <button onClick={() => addToCart(item)} className='btn btn-primary'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail