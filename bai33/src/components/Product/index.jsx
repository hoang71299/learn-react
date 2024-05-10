import { useState } from "react"
import CreateProduct from "../Product/CreateProduct"
import ProductList from "./ProductList"

function Product() {
  const [reload,setReload]=useState(false)
  
  const handleReload=()=>{
    setReload(!reload)
  }
  return (
    <>
      <h3>Danh sách sản phẩm</h3>
      <CreateProduct onReload={handleReload}/>
      <ProductList reload={reload}/>
    </>
  )
}

export default Product