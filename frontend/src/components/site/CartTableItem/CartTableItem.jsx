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
            <td className='quan'><button className='left' onClick={()=>decreaseCart(info)} >-</button>{info.count}<button className='right' onClick={()=>increaseCart(info)}>+</button></td>
            <td>${info.totalPrice}</td>
            <td><button onClick={()=>removeFromCart(info)} className='remove__btn'>X</button></td>
        </tr>
    )
}

export default CartTableItem