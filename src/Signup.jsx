import React, { useState } from "react";
import "./Nav.css";

const Signup = (id) => {
  let [name, setName] = useState();
  let [number, setNumber] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  let products =JSON.parse(localStorage.getItem("products")) || [];

  const HandleData = (e) => {
    e.preventDefault();
    console.log(name, number, password);
    let product = {
      name: name,
      number: number,
      email: email,
      password: password,
    };
  

    localStorage.setItem("products", JSON.stringify(product));
  };

  return (
    <div key={id}>
      <h1 className="title">SIGN UP</h1>
      <form onSubmit={HandleData} >
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Your Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
