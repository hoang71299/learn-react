import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { deleteProduct } from "../../services/ProductService";
function DeleteProduct(props) {
  const { item, onReload } = props;
  const deleteItem = async () => {
    const result = deleteProduct(item.id)
    if (result) {
      onReload();
      Swal.fire({
        title: "Đã xóa!",
        text: "Sản phầm bạn đã bị xóa.",
        icon: "success",
      });
    }
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Bạn có chắc muốn xóa không?",
      text: "Bạn sẽ không thể khôi phục được!",
      icon: "cảnh báo",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vâng, xóa nó đi!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
      }
    });
  };
  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteProduct;
