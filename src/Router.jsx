/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./components/ErrorPage/ErrorElement";
import Login from "./components/Login/Login";
import Authentication from "./components/Authentication/Authentication";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorElement />,
  },
  {
    element: <Authentication />,
    children: [
      {
        path: "/hello-ganesh",
        element: <div>Hello Ganesh</div>,
      },
      {
        path: "/hello-sanket",
        element: <div>Hello Sanket</div>,
      },
      {
        path: "/hello-vaibhav",
        element: <div>Hello Vaibhav</div>,
      },
    ],
    errorElement: <ErrorElement />
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
