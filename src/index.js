import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import createBrowserRouter, RouterProvider to give routes or link pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

//function to assign links to pages
const router = createBrowserRouter([
  {
    // this is code for the very first page when application will start using npm start
    path: "/",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <Home />,
  },
  {
    path: "profilepage",
    element: <Profile />,
  },
  {
    path: "registerpage",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// replace <App/> with RouterProvider router={router}
root.render(<RouterProvider router={router} />);
