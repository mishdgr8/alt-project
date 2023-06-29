import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Navbar.css";

function Navbar(){
    return (
        <nav class="navbar container-fluid navbar-expand-lg navbar-white bg-white">
  <a className="navbar-brand" href="/#">MINA</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Shop <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/#">Sustainability</a>
          </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Cart</a>
      </li>
      
    </ul>

      </div>
      </nav>
  
      )
}

    
      
    
    export default Navbar;
