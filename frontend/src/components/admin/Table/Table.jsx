import React from 'react'
import TableItem from '../TableItem.jsx/TableItem'

const Table = ({ infos }) => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    infos.map((info, index) => {
                        return (
                            <TableItem info={info} key={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table