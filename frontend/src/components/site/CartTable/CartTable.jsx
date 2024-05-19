import React from 'react'
import CartTableItem from '../CartTableItem/CartTableItem'
import './CartTable.css'

const CartTable = ({ infos }) => {
    return (
        <div className="cart__table__div">
            <table className="table cart__table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        infos.map((info, index) => {
                            return (
                                <CartTableItem info={info} key={index} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CartTable