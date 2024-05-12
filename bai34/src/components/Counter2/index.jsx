import React from 'react'
import { useDispatch, useSelector } from "react-redux"
function Counter2() {
  const counter2 = useSelector(state=> state.counterReducer)
  return (
    <>
      <h2>Counter : {counter2}</h2>
    </>
  )
}

export default Counter2