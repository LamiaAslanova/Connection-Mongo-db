import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import './CartTableItem.css'

const CartTableItem = ({info}) => {
    const{increaseCart, decreaseCart, removeFromCart} = useContext(MainContext)

    return (
        <tr>
            <td><img width="120px" src={info.item.image}/></td>
            <td>{info.item.title}</td>
            <td>${info.item.price}</td>
            <td><button className='left' onClick={()=>decreaseCart(info)} ><i class="fa-solid fa-chevron-left"></i></button>{info.count}<button className='right' onClick={()=>increaseCart(info)}><i class="fa-solid fa-chevron-right"></i></button></td>
            <td>${info.totalPrice}</td>
            <td><button onClick={()=>removeFromCart(info)} className='btn btn-danger'>Delete</button></td>
        </tr>
    )
}

export default CartTableItem