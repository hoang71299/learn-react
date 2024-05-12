import { useDispatch, useSelector } from "react-redux"
import { down, reset, up } from "../../actions/counter";

function Counter() {
  const counter = useSelector(state=> state.counterReducer)
  const dispatch = useDispatch()
  console.log(counter);
  
  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={()=> dispatch(up())}>Up</button>
      <button onClick={()=>dispatch(down())}>DOWN</button>
      <button onClick={()=>dispatch(reset())}>RESET</button>
    </>
  )
}

export default Counter