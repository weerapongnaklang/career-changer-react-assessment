import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="buttonSelector">
      <button>
        <Link to={"/homeuser"}>User Home Selector</Link>
      </button>
      <button>
        <Link to={"/homeadmin"}>Admin Home Selector</Link>
      </button>
    </div>
  );
}
export default Button;
