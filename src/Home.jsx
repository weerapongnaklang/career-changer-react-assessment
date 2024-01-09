import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeNormal from "./HomeNormal";
import Owner from "./Owner";
import HomeUser from "./HomeUser";
import HomeAdmin from "./HomeAdmin";
import { useState } from "react";

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

const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees);

  const createEmployee = (employee) => {
    const id = `${Math.floor(Math.random()*1000000)}`;
    const newEmployees = [...employees, {...employee,id}];
    setEmployees(newEmployees);
  };

  const deleteEmployee = (id) => {
    const newEmployees = employees.filter((employee) => {
      return employee.id !== id;
    });
    setEmployees(newEmployees);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeNormal />,
    },
    {
      path: "/homeuser",
      element: <HomeUser employees={employees} />,
    },
    {
      path: "/owner",
      element: <Owner />,
    },
    {
      path: "/homeadmin",
      element: (
        <HomeAdmin
          employees={employees}
          onCreate={createEmployee}
          onDelete={deleteEmployee}
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Home;
