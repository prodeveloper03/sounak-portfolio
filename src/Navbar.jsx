import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

 
 
  return(
 
    <div className = "container-fluid nav_bg">
      <div className = 'row'>
        <div className = "col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Sounak's Portfolio🖐</NavLink>
            <button className="navbar-toggler ms-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/" exact activeClassName = "menu-active">
                    Home 
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About"
                  activeClassName = "menu-active">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Project"
                  activeClassName = "menu-active">
                    Project
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Skills" activeClassName = "menu-active">
                    Skill
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" activeClassName = "menu-active">
                    Contact
                  </NavLink>
                </li>
                
              </ul>
              
            </div>
          </nav>
             
              </div>
           </div>
        </div>
    

  );
}
export default Navbar