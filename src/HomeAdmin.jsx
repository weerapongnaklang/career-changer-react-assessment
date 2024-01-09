import React, { useState } from "react";
import Navbar from "./Nav";
import Button from "./Button";

const HomeAdmin = ({ employees, onCreate, onDelete }) => {
  return (
    <div>
      <Navbar />
      <div className="headHomeAdmin">
        <h1>Generation Thailand </h1>
        <h1>Home - Admin Sector</h1>
      </div>
      <Button />
      <CreateUser onCreate={onCreate} />
      <div className="createNewMember">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th> {/* เพิ่มคอลัมน์ Action */}
            </tr>
          </thead>
          <tbody>
            {employees.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
                <td>
                  <button
                    className="deleteButton"
                    onClick={() => onDelete(member.id)}
                  >
                    Delete
                  </button>
                </td>
                {/* เพิ่มปุ่ม Delete */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CreateUser = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmitMemberData = () => {
    if (name === "") {
      alert("Please Enter Name!");
      return;
    } else if (lastName === "") {
      alert("Please Enter LastName!");
      return;
    } else if (position === "") {
      alert("Please Enter Position!");
      return;
    }

    const employee = {
      name,
      lastname: lastName,
      position,
    };
    onCreate(employee);
    setName("");
    setLastName("");
    setPosition("");
  };

  return (
    <div className="createUser">
      <h2 className="headUserInput">Create User Here</h2>
      <div className="inputCreate">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(ev) => setLastName(ev.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(ev) => setPosition(ev.target.value)}
        ></input>
        <button className="saveButton" onClick={handleSubmitMemberData}>
          Save
        </button>
      </div>
    </div>
  );
};

export default HomeAdmin;
