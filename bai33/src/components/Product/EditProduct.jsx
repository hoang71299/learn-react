import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { editProduct } from "../../services/ProductService";
function EditProduct(props) {
  const {item,onReload} = props
  // console.log(props);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(item);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      fetch("http://localhost:3000/category")
        .then((res) => res.json())
        .then((data) => setDataCategory(data));
    };
    fetchApi();
  }, []);
  // console.log(dataCategory);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleChange = (e) => {
   
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  function openModal() {
    setShowModal(true);
    console.log(item);
  }
  function closeModal() {
    setShowModal(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await editProduct(item.id,data)
    if(result){
      setShowModal(false);
      onReload()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cập nhập sản phẩm thành công",
        showConfirmButton: false,
        timer: 2000
      });
    }
  };
  return (
    <>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form action="" onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Tiêu đề</td>
                <td>
                  <input value={data.title} onChange={handleChange} type="text" name="title" />
                </td>
              </tr>
              {dataCategory.length > 0 && (
                <tr>
                  <td>Danh mục</td>
                  <td>
                    <select value={data.category}  name="category" onChange={handleChange}>
                      {dataCategory.map((item,index)=>(
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}

              <tr>
                <td>Giá</td>
                <td>
                  <input value={data.price}onChange={handleChange} type="text" name="price" />
                </td>
              </tr>
              <tr>
                <td>Giảm giá</td>
                <td>
                  <input
                    value={data.discountPercentage}
                    onChange={handleChange}
                    type="text"
                    name="discountPercentage"
                  />
                </td>
              </tr>
              <tr>
                <td>Số lượng còn lại</td>
                <td>
                  <input  value={data.stock} onChange={handleChange} type="text" name="stock" />
                </td>
              </tr>
              <tr>
                <td>Đường dẫn ảnh</td>
                <td>
                  <input value={data.thumbnail} onChange={handleChange} type="text" name="thumbnail" />
                </td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>
                  <textarea
                    value={data.description}
                    onChange={handleChange}
                    rows={4}
                    name="description"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={closeModal}>Hủy</button>
                </td>
                <td>
                  <input type="submit" value="Cập nhập" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
}

export default EditProduct;
