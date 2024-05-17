import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'
import Cards from '../../../components/site/Cards/Cards'
import { Helmet } from 'react-helmet'

const Home = () => {
  const { data, loading } = useContext(MainContext)

  return (
    <>
      <Helmet>
        <title>Shoppers - Home Page</title>
      </Helmet>
      {
        loading ? <Loading /> : <Cards cards={data.slice(0, 3)} />
      }
    </>
  )
}

export default Home