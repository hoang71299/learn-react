import { useState } from "react";

function Cart() {
  const unitPrice = 120000
  const [quantity,setQuantity] = useState(1);
  
  const handleChange=(e)=>{
    const updateQuantity = parseInt(e.target.value)
    setQuantity(updateQuantity)
  }
  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giày thể thao</td>
            <td>
              <input type="number" defaultValue={quantity} min={1} onChange={handleChange} />
            </td>
            <td>{unitPrice}đ </td>
            <td>{quantity * unitPrice }</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Cart;
