import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
const init = {
  products : [],
  loading: true,
}
const reducer = (state,action)=>{
  if(action.type === "SUCCESS"){
    return {
      ...state,
      products : action.products,
      loading: false,
    }
  }else{
    return state
  }
}
function ProductReducer() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [data,dispatch]=useReducer(reducer,init)
  useEffect(() => {
    const fetchApi = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          dispatch( {
            type:"SUCCESS",
            products : data.products,
          })
        });
    };
    setTimeout(() => {
      fetchApi();
    }, 3000);
  }, []);
  console.log(data);
  return (
    <>
      {data.loading ? (
         <div>Đang tải dữ liệu .....</div>
      ):(
        <ul>
        {data.products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      )}
      
    </>
  );
}

export default ProductReducer;
