import React,{memo} from 'react'

function Box() {
  console.log("box");
  return (
    <div>Box</div>
  )
}

export default memo(Box)