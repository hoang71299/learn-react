import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function UseRef2() {
  const [inputValue,setInputValue]=useState();
  // const [counter,setCounter]= useState(0)
  const  counterRef = useRef(0)
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus()
  },[])
  const handleChange=(e)=>{
    setInputValue(e.target.value)
    // setCounter(counter + 1)
    counterRef.current = counterRef.current + 1
  }
  console.log(counterRef.current);
  return (
    <input ref={inputRef} type="text" value={inputValue} onChange={handleChange} />
  )
}

export default UseRef2