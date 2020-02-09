import React from "../../../node_modules/react";
import { Link } from "../../../node_modules/react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-dark">
      <Link className="navbar-brand" to="/">
        <h1>Employee Directory</h1><h3>Search for an employee!</h3>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            
         
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
