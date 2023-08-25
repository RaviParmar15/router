import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import "./Nav.css"

const Product = () => {
  let [search ,setSearch]=useSearchParams()
  console.log(setSearch);
  return (
    <div>
      <h1>PRODUCT</h1>
      <div id="box">
        <div id="sidebar">
          <Link className="link" to="Men"><p>Men</p></Link>
          <Link className="link" to="Women"><p>Women</p></Link>
          <Link className="link" to="Kids"><p>Kids</p></Link>
          <div className="Btn">
          <button onClick={()=>setSearch({sort:"lth"})}>High TO Low</button>
          <button onClick={()=>setSearch({sort:"htl"})}>Low TO High</button>
          </div>
          
        </div>
        <div  id="data">
          <Outlet></Outlet>
        </div>

      </div>
    </div>
  );
};

export default Product;
