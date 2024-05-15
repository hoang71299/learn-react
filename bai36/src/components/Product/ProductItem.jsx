import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, UpdateQuantity } from "../../actions/cart";

function ProductItem(props) {
  const { item } = props;
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (cart.some((itemCart) => itemCart.id === item.id)) {
      dispatch(UpdateQuantity(item.id))
    } else {
      dispatch(addToCart(item.id, item));
    }
  };
  return (
    <div className="product-item">
      <img className="product-image" src={item.thumbnail} alt="" />
      <h3 className="product-title">{item.title}</h3>
      <div className="product-price-new">
        {((item.price * (100 - item.discountPercentage)) / 100).toFixed(0)}$
      </div>
      <div className="product-price-old">{item.price}$</div>
      <div className="product-percent">{item.discountPercentage}%</div>
      <button onClick={handleAddToCart}>Thêm vào giỏ hang</button>
    </div>
  );
}

export default ProductItem;
