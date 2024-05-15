import React from 'react'
import { useNavigate } from 'react-router-dom'

function GoBack() {
  const navigate = useNavigate()
  // console.log(navigate)
  const handleClick=()=>{
    console.log("ok")
    navigate(-1)
  }
  return (
    <button onClick={handleClick}>Trở lại</button>
  )
}

export default GoBack