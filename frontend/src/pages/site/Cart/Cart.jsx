import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'
import CartTable from '../../../components/site/CartTable/CartTable'
import { Helmet } from 'react-helmet'

const Cart = () => {
    const { basketItems, loading } = useContext(MainContext)

    return (
        <>
            <Helmet>
                <title>Shoppers - Cart</title>
            </Helmet>
            {
                loading ? <Loading /> : <CartTable infos={basketItems} />
            }
        </>
    )
}

export default Cart