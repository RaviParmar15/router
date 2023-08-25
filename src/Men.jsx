import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Ui from "./Ui";

const Men = () => {
  let [products, setProducts] = useState([]);

  const getdata = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    console.log(data);
    setProducts(data.products);
  };

  let [search ,setSearch]=useSearchParams()
  let sort=search.get("sort")

  if(sort=="htl"){
    products.sort((c,d)=>c.price-d.price)
  }
  else if(sort=="lth"){
    products.sort((c,d)=>d.price-c.price)

  }

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div id="Ui_style">
      {products.map((product) => (
        <Ui {...product}></Ui>
      ))}
    </div>
  );
};

export default Men;
