import React from 'react'

const Navbar = () => {
  return(
    
    <div className = "container-fluid nav_bg">
      <div className = 'row'>
        <div className = "col-10 mx-auto">

      

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    Skill
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    Contact
                  </a>
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