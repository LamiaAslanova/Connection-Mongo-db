import React from 'react'
import Header from '../../layouts/site/Header/Header'
import Footer from '../../layouts/site/Footer/Footer'
import { Outlet } from 'react-router'

const SiteRoot = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default SiteRoot