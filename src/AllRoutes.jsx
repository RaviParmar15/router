import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
import Men from './Men';
import Women from './Women'
import Kids from './Kids';
import Data from './Data';
import PageNotFound from './PageNotFound';
import './Nav.css';


const AllRoutes = () => {
  let [logged,setLogged]=useState(false)
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='About' element={<About></About>}></Route>
            {/* <Route path='/Product' element={logged ? <Product/>:<Signup/>}></Route> */}
            <Route path='/Product' element={<Product></Product>}>
                <Route path='men' element={<Men></Men>}></Route>
                <Route path='Women' element={<Women/>}></Route>
                <Route path='Kids' element={<Kids></Kids>}></Route>

            </Route>
            <Route path='/Login' element={<Login></Login>}></Route>
            <Route path='/SignUp' element={<Signup></Signup>}></Route>
            <Route path='/Cart' element={<Cart></Cart>}></Route>
            <Route path='/data/:id' element={<Data></Data>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes