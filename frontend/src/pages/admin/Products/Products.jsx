import React, { useContext } from 'react'
import Table from '../../../components/admin/Table/Table'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'
import { Helmet } from 'react-helmet'

const Products = () => {
    const { data, loading } = useContext(MainContext)

    return (
        <>
            {
                loading ? <Loading /> : <Table infos={data} />
            }
        </>
    )
}

export default Products