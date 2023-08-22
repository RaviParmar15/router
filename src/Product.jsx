import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Nav.css"

const Product = () => {
  return (
    <div>
      <h1>PRODUCT</h1>
      <div id="box">
        <div id="sidebar">
          <Link className="link" to="Men"><p>Men</p></Link>
          <Link className="link" to="Women"><p>Women</p></Link>
          <Link className="link" to="Kids"><p>Kids</p></Link>
        </div>
        <div  id="data">
          <Outlet></Outlet>
        </div>

      </div>
    </div>
  );
};

export default Product;
