import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <ul className="Navbar">
        <li className="NavHome">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="NavOwner">
          <Link to={"/owner"}>Owner</Link>
        </li>
      </ul>
    
  );
};
export default Navbar;
