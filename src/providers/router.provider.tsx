import ProtectRoute from "@/components/hoc/protect-route";
import PageLayout from "@/layouts/page-layout";
import CreatePage from "@/pages/create";
import ErrorPage from "@/pages/error";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import TodoPage from "@/pages/todo";
import * as React from "react";
import { createBrowserRouter, RouterProvider as Router } from "react-router-dom";

const RouterProvider: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectRoute>
                    <PageLayout>
                        <HomePage />
                    </PageLayout>
                </ProtectRoute>
            ),
            errorElement: <ErrorPage message="Hello" status="404" />,
        },
        {
            path: "/todo/:id",
            element: (
                <ProtectRoute>
                    <PageLayout>
                        <TodoPage />
                    </PageLayout>
                </ProtectRoute>
            ),
        },
        {
            path: "/create",
            element: (
                <ProtectRoute>
                    <PageLayout>
                        <CreatePage />
                    </PageLayout>
                </ProtectRoute>
            ),
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
    ]);

    return <Router router={router} />;
};

export default RouterProvider;
