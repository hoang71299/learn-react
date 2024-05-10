import React, { useRef, useState } from 'react'

function RandomGift() {
  const gifts = ["điện thoại","máy tính","xe máy","ô tô","Đồng hồ"];
  const [result,setResult]= useState("")
  const counterRef=useRef(0)
  const handleRandom=()=>{
    if(counterRef.current < 3){
      const random = Math.floor(Math.random() * gifts.length) ;
      setResult(gifts[random])
      counterRef.current = counterRef.current + 1
    }else{
      alert("Bạn hết lượt quay ")
    }
  }
  console.log(counterRef);
  return (
    <>
      <button onClick={handleRandom}>Ramdon</button>
      <div>Món quà là trúng thưởng : {result}</div>
    </>
  )
}

export default RandomGift