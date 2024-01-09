import React from "react";
import "./style.css";

function Button() {
  return (
    <div className="button">
      <button>
        <a href={"/homeuser"}>User Home Selector</a>
      </button>
      <button>
        <a href={"/homeadmin"}>Admin Home Selector</a>
      </button>
    </div>
  );
}
export default Button;
