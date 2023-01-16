import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const Header = () => {
  return (
    <div className='header'>
       <NavLink to="/"><h1>LOGO</h1></NavLink>
        <nav>
        <ul>
         
          <li>
            <NavLink to="/add-products">Add Products</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header