import { useEffect, useState } from "react";

import "./Product.scss";
function UseEffect2() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      });
  }, [pageActive]);

  const handleClickPagination = (e) => {
    setPageActive(e)
  };
  const previosClick =()=>{
    if(pageActive == 0 ){
      setPageActive(quantityPage)
    }else{
      setPageActive(pageActive - 1)
    }
  }
  const nextClick=()=>{
    if(pageActive > quantityPage){
      setPageActive(0)
    }else{
      setPageActive(pageActive + 1)
    }
  }
  console.log(pageActive);
  console.log(quantityPage);
  return (
    <>
      <div className="product_list">
        {data.map((item) => (
          <div key={item.id} className="product_item">
            <div className="product_image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="product_title">
              <h3>{item.title}</h3>
            </div>
            <div className="product_price">${item.price}</div>
          </div>
        ))}
      </div>

      <ul className="pagination"  style={{display:"flex",gap:"20px"}}>
        <button onClick={previosClick} >previos</button>
        {[...Array(quantityPage)].map((item, index) => (
          <li  key={index} onClick={()=> handleClickPagination(index)}>{index + 1}</li>
        ))}
        <button onClick={nextClick}>Next</button>
      </ul>
    </>
  );
}

export default UseEffect2;
