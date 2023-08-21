import { createBrowserRouter, RouterProvider as Router } from "react-router-dom";
import ErrorPage from "@/pages/error.page";
import * as React from "react";

const RouterProvider: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Todos List</div>,
            errorElement: <ErrorPage message="Hello" status="404" />,
        },
        {
            path: "/todo/:id",
            element: <div>Todo Details</div>,
        },
        {
            path: "/edit/:id",
            element: <div>Edit</div>,
        },
        {
            path: "/create",
            element: <div>Create</div>,
        },
        {
            path: "/login",
            element: <div>Login</div>,
        },
    ]);

    return <Router router={router} />;
};

export default RouterProvider;
