import React, { useState, useEffect } from "react";
import Navbar from "./Nav";
import Button from "./Button";
import './style.css'

const HomeUser = ({employees}) => {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>
        Generation Thailand Home - Selector
      </h1>
      <Button />
      <DisplayTable employees={employees}/>
    </div>
  );
};

const DisplayTable = ({employees}) => {
  return (
    <div className="tableData">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeUser;
