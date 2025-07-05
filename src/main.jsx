import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
}
from "react-router-dom";
import "./index.css";
import Home from "./components/home/Home.jsx";
import Crud from "./components/crud/Crud.jsx";
import Register from "./components/crud/Register.jsx";
import Login from "./components/crud/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/crud",
        element: <Crud/>,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);