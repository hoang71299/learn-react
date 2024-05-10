import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductState() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchApi = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          setLoading(false);
        });
    };
    setTimeout(() => {
      fetchApi();
    }, 5000);
  }, []);
  
  return (
    <>
      {loading ? (
        <>
        <Skeleton  count={6}/>
        </>
      ) : (
        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductState;
