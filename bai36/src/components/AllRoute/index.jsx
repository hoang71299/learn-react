import React from 'react'
import { routes } from '../../Routes' 
import { useRoutes } from 'react-router-dom'
function AllRoute() {
  const elements = useRoutes(routes)
  return (
    <div>{elements}</div>
  )
}

export default AllRoute