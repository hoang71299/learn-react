import { useState, useEffect } from "react";
import { getProductList } from "../../services/ProductService";
import "./Product.scss";
import ProductItem from "./ProductItem";
export default function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProduct(result.products);
    };
    fetchApi();
  }, []);
  // console.log(product);
  return (
    <div className="product">
      {product.map((item) => (
        <ProductItem item={item}/>
      ))}
    </div>
  );
}
