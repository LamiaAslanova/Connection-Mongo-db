import React from 'react'
import Header from '../../layouts/admin/Header/Header'
import Footer from '../../layouts/admin/Footer/Footer'
import { Outlet } from 'react-router'

const AdminRoot = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AdminRoot