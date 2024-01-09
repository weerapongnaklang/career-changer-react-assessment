import React from "react";
import './style.css';

const Navbar = () => {
  return (
      <ul className="Navbar">
        <li className="NavHome">
          <a href={"/"}>Home</a>
        </li>
        <li className="NavOwner">
          <a href={"/owner"}>Owner</a>
        </li>
      </ul>
    
  );
};
export default Navbar;
