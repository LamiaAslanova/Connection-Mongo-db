import React, { useContext } from 'react'
import Cards from '../../../components/site/Cards/Cards'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'
import { Helmet } from 'react-helmet'

const Shop = () => {
    const { data, loading, search, sortBy, setSortBy } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Shoppers - Shop Page</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="sort__buttons">
                            <button onClick={() => setSortBy({ field: "title", asc: true })}>A-Z</button>
                            <button onClick={() => setSortBy({ field: "title", asc: false })}>Z-A</button>
                            <button onClick={() => setSortBy({ field: "price", asc: true })}>Artan</button>
                            <button onClick={() => setSortBy({ field: "price", asc: false })}>Azalan</button>
                            <button onClick={() => setSortBy(null)}>Default</button>
                        </div>
                    </div>
                </div>
            </div>
            {loading ? <Loading /> : <Cards cards={data.filter(x => x.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
          if (!sortBy) {
            return 0
          }
          else if (sortBy.asc == true) {
            return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
          }
          else if (sortBy.asc == false) {
            return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
          }
        })} />}
        </>
    )
}

export default Shop