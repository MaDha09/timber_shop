import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainDashboard from "./pages/MainDashboard";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/maindashboard",
    element: <MainDashboard/>,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
