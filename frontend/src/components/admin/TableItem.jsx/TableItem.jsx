import axios from 'axios'
import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const TableItem = ({info}) => {
    const {data, setData} = useContext(MainContext)

    return (
        <tr>
            <th scope="row">{info._id}</th>
            <td><img width="120px" src={info.image}/></td>
            <td>{info.title}</td>
            <td>{info.description}</td>
            <td>${info.price}</td>
            <td><button className='btn btn-danger' onClick={()=>{
                axios.delete(`http://localhost:8080/api/products/${info._id}`)
                .then(res=>{
                    setData([...res.data])
                })
            }}>Delete</button></td>
        </tr>
    )
}

export default TableItem