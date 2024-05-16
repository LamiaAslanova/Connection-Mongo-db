import React from 'react'
import CartTableItem from '../CartTableItem/CartTableItem'

const CartTable = ({ infos }) => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Count</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Delete</th>
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
    )
}

export default CartTable