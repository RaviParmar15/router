import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='Navbar'>
        <Link className='link' to="./"><p>Home</p></Link>
        <Link className='link' to="./About"><p>About</p></Link>
        <Link className='link' to="./Product"><p>Product</p></Link>
        <Link className='link' to="./Login"><p>Login</p></Link>
        <Link className='link' to="./SignUp"><p>SignUp</p></Link>
        <Link className='link' to="./Cart"><p>Cart</p></Link>

    </div>
  )
}

export default Nav