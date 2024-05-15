import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
  const isLogin = false
  return (
    <>
      {isLogin ? (<Outlet/>):(<Navigate to="/login"/>)}
    </>
  )
}

export default PrivateRoutes