import React from "react";
import Navbar from "./Nav";
import Button from "./Button";

const HomeNormal = () => {
  return (
    <div>
      <Navbar />
      {/* Head */}
      <div className="headHomeNormal">
        <h1>Generation Thailand</h1>
        <h1> Reac - Assessment</h1>
      </div>

      {/* Button */}
      <div>
        <Button />
      </div>
    </div>
  );
};

export default HomeNormal;
