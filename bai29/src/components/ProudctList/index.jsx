import { productList } from "../../data/product";
import ProductItem from "./ProductItem";
import './Product.css'
const ProductList = () => {
  console.log(productList);
  return (
    <div className="product-list">
      {productList.map((item) => (
        <ProductItem key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default ProductList;
