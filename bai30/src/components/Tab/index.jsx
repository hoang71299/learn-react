import React, { useEffect, useState } from "react";
import "./tab.scss";
function Tab() {
  const [data, setData] = useState([]);
  const [tabActive, setTabActive] = useState("products");
  useEffect(() => {
    fetch(`https://dummyjson.com/${tabActive}`)
      .then((res) => res.json())
      .then((data) => setData(data[tabActive])
      
    );
  }, [tabActive]);
  console.log(data);
  const handleChangeTag =(e)=>{
    setTabActive(e)
  }
  console.log(data);

  return (
    <>
      <div className="tabs">
        <div className="tabs_item" onClick={()=>handleChangeTag("products")}>Products</div>
        <div className="tabs_item"onClick={()=>handleChangeTag("users")}>Users</div>
        <div className="tabs_item"onClick={()=>handleChangeTag("posts")}>Posts</div>
      </div>
      <div className="tabs_content">
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title || item.firstName}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Tab;
