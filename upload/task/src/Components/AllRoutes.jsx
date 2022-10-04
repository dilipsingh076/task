import React from 'react'
import {Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import AddEdit from '../pages/AddEdit';
import Home from '../pages/Home';
import View from '../pages/View';
function AllRoutes() {
  return (
    <div>
      <ToastContainer position="top-center" />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add' element={<AddEdit/>} />
            <Route path='/update/:id' element={<AddEdit/>} />
            <Route path='/view/:id' element={<View/>} />
          
        </Routes>


    </div>
  )
}

export default AllRoutes