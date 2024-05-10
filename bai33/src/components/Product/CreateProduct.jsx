import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { getListCategory } from "../../services/categoryService";
import { createProduct } from "../../services/ProductService";
function CreateProduct(props) {
  const {onReload} = props
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListCategory()
      setDataCategory(result)
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
    // console.log(e.target.name);
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createProduct(data)
    if(result){
      setShowModal(false);
      onReload();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Bạn đã tạo sản phẩm thành công",
        showConfirmButton: false,
        timer: 2000
      });
      
    }
    // fetch("http://localhost:3000/products",{
    //   method: "POST",
    //   headers: {
    //     Accept:"application/json" ,
    //     "Content-Type": "application/json" 
    //   },
    //   body:JSON.stringify(data)
    // })
    //   .then(res=>res.json())
    //   .then(data => {
    //     if(data){
    //       setShowModal(false);
    //       onReload();
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Bạn đã tạo sản phẩm thành công",
    //         showConfirmButton: false,
    //         timer: 2000
    //       });
          
    //     }
    //   })
  };
  return (
    <>
      <button onClick={openModal}>Tạo sản phẩm mới</button>
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
                  <input onChange={handleChange} type="text" name="title" />
                </td>
              </tr>
              {dataCategory.length > 0 && (
                <tr>
                  <td>Danh mục</td>
                  <td>
                    <select name="category" onChange={handleChange}>
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
                  <input onChange={handleChange} type="text" name="price" />
                </td>
              </tr>
              <tr>
                <td>Giảm giá</td>
                <td>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="discountPercentage"
                  />
                </td>
              </tr>
              <tr>
                <td>Số lượng còn lại</td>
                <td>
                  <input onChange={handleChange} type="text" name="stock" />
                </td>
              </tr>
              <tr>
                <td>Đường dẫn ảnh</td>
                <td>
                  <input onChange={handleChange} type="text" name="thumbnail" />
                </td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>
                  <textarea
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
                  <input type="submit" value="Tạo mới" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
}

export default CreateProduct;
