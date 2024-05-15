import { useDispatch } from "react-redux";
import { deleteItem, UpdateQuantity } from "../../actions/cart";
import { useRef } from "react";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleUp = () => {
    dispatch(UpdateQuantity(item.id));
    inputRef.current.value = parseInt(inputRef.current.value) + 1;
  };
  const handleDown = () => {
    if (item.quantity > 1) {
      dispatch(UpdateQuantity(item.id, -1));
      inputRef.current.value = parseInt(inputRef.current.value) - 1;
    }
  };
  const handleDelete= ()=>{
    dispatch(deleteItem(item.id))
  }
  return (
    <div className="cart-item" key={item.id}>
      <div className="cart-image">
        <img src={item.info.thumbnail} alt={item.info.title} />
      </div>
      <div className="cart-content">
        <h4 className="card-title">{item.info.title}</h4>
        <h4 className="card-price-new">{item.info.price}$</h4>
        <h4 className="card-price-old">
          {(
            (item.info.price * (100 - item.info.discountPercentage)) /
            100
          ).toFixed(0)}
          $
        </h4>
      </div>
      <div className="cart-quantity">
        <button onClick={handleDown}> - </button>
        <input ref={inputRef} type="text" defaultValue={item.quantity} />
        <button onClick={handleUp}>+</button>
      </div>
      <button onClick={handleDelete}>xoa</button>
    </div>
  );
}

export default CartItem;
