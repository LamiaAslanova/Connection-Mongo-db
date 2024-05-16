import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const CartTableItem = ({info}) => {
    const{increaseCart, decreaseCart, removeFromCart} = useContext(MainContext)

    return (
        <tr>
            <td><img width="120px" src={info.item.image}/></td>
            <td>{info.item.title}</td>
            <td>${info.item.price}</td>
            <td><button onClick={()=>decreaseCart(info)} className='btn btn-primary'>Remove</button>{info.count}<button onClick={()=>increaseCart(info)} className='btn btn-primary'>Add</button></td>
            <td>${info.totalPrice}</td>
            <td><button onClick={()=>removeFromCart(info)} className='btn btn-danger'>Delete</button></td>
        </tr>
    )
}

export default CartTableItem