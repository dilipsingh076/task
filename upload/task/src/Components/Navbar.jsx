import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  
  return (
    <div className='navbar' >
      <div className='imgdiv' >
        <img src='https://i.pinimg.com/originals/3e/27/a2/3e27a299da0e04d7b2c884c1bdbd437b.jpg' alt='pharmalogo' />
      </div>
      <div className='itemdiv' >
      <Link to={"/"} > Home </Link>
      <Link to={"/add"} > Add User </Link>
      </div>


    </div>
  )
}

export default Navbar