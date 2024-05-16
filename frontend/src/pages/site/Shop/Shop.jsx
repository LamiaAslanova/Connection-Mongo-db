import React, { useContext } from 'react'
import Cards from '../../../components/site/Cards/Cards'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'
import { Helmet } from 'react-helmet'

const Shop = () => {
    const { data, loading } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Shoppers - Shop Page</title>
            </Helmet>
            {loading ? <Loading /> : <Cards cards={data} />}
        </>
    )
}

export default Shop