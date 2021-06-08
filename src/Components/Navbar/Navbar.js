import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className = "navbar navbar-expand-lg navbar-mainbg">

      <NavLink className = "navbar-brand navbar-logo" to = "/" exact>
          Sounak🖐

      </NavLink>
      <button>
        
      </button>

    </nav>
    
  )
}
export default Navbar;