import React, { useEffect, useState } from "react";
import "./Product.css";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import { getProductList } from "../../services/ProductService";
function ProductList(props) {
  const [data, setData] = useState([]);
  const {reload} = props
  const [editReload,setEditReload] = useState(false)
  const handleReload=()=>{
    setEditReload(!editReload) 
  }
  useEffect(() => {
    const fetchApi= async ()=>{
      const result =await getProductList();
      setData(result.reverse())
    }
    fetchApi()
  }, [reload,editReload]);
 
  return (
    <>
      <div className="product_list">
        {data.map((item) => (
          <div className="product_item" key={item.id}>
            <div className="product_image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h4 className="product_title">{item.title}</h4>
            <p className="product_price">{item.price}$</p>
            <p className="product_percent">{item.discountPercentage}</p>
            <EditProduct onReload={handleReload}  item={item}/>
            <DeleteProduct onReload={handleReload}  item={item}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
