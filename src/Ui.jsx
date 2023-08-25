import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Ui = ({ id, title, price, thumbnail, brand }) => {
  return (
    <Link className="links" to={`/data/${id}`}>
        <div  key={id}>
        <img src={thumbnail} alt="" />
        <h3>{title}</h3>
        <p>Price : {price}</p>
        <p> Brand : {brand}</p>
        </div>
    </Link>
  );
};

export default Ui;
