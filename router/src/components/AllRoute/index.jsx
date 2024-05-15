import React from 'react'
import { routes } from '../../Routes' 
import { useRoutes } from 'react-router-dom'
function AllRoute() {
  const elements = useRoutes(routes)
  console.log(elements)
  return (
    <div>{elements}</div>
  )
}

export default AllRoute