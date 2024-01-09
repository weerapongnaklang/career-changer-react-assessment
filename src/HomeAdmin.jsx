import React, { useState } from "react";
import Navbar from "./Nav";
import Button from "./Button";
import DisplayTable from "./DisplayTable";

const HomeAdmin = () => {
  const [members, setMembers] = useState([]);

  const handleDeleteMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  return (
    <div>
      <Navbar />
      <div className="headHomeAdmin">
        <h1>Generation Thailand </h1>
        <h1>Home - Admin Sector</h1>
      </div>
      <Button />
      <CreateUser members={members} setMembers={setMembers} />
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
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.lastName}</td>
                <td>{member.position}</td>
                <td>
                  <button onClick={() => handleDeleteMember(index)}>
                    Delete
                  </button>
                </td>{" "}
                {/* เพิ่มปุ่ม Delete */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CreateUser = ({ members, setMembers }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmitMemberData = () => {
    const newMember = {
      name,
      lastName,
      position,
    };
    setMembers([...members, newMember]);
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
        <button onClick={handleSubmitMemberData}>Save</button>
      </div>
    </div>
  );
};

export default HomeAdmin;
