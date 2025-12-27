import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
