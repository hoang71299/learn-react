import { useRef } from "react"
import { useState } from "react"

function UseRef() {
  const [counter,setCounter] = useState(0)
  const counterRef = useRef(0)
  const counterObj = {
    current:0
  }
  const handleClick = ()=>{
    setCounter(counter + 1)
    counterRef.current = counterRef.current + 1
    counterObj.current = counterObj.current + 1
  }
  console.log("counter " + counter);
  console.log("counterRef " + counterRef.current);
  console.log(counterObj.current);
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseRef