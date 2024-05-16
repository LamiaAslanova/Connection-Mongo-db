import React from 'react'

const TableItem = ({info}) => {
    return (
        <tr>
            <th scope="row">{info._id}</th>
            <td><img width="120px" src={info.image}/></td>
            <td>{info.title}</td>
            <td>{info.description}</td>
            <td>{info.price}</td>
        </tr>
    )
}

export default TableItem