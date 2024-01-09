import React, { useState, useEffect } from "react";
import Navbar from "./Nav";
import Button from "./Button";
import './style.css'

const HomeUser = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>
        Generation Thailand Home - Seclector
      </h1>
      <Button />
      <DisplayTable />
    </div>
  );
};

const DisplayTable = () => {
  const mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: "mocklastname",
      position: "Manager",
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer",
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer",
    },
  ];
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {mockEmployees.map((employee) => {
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