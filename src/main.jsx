import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeNormal from "./HomeNormal";
import Owner from "./Owner";
import HomeUser from "./HomeUser";
import HomeAdmin from "./HomeAdmin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNormal />,
  },
  {
    path: "/homeuser",
    element: <HomeUser />,
  },
  {
    path: "/owner",
    element: <Owner />,
  },
  {
    path: "/homeadmin",
    element: <HomeAdmin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
