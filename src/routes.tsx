import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, ClientLayout } from "./layout";
import SaleAdminPage from "./pages/Admin/SaleAdminPage";
import HomePage from "./pages/Main/HomePage";
import ProductDetailPage from "./pages/Main/ProductDetailPage";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <ClientLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/products/:id",
                element: <ProductDetailPage />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: "Page admin here",
            },
            {
                path: "sale",
                element: <SaleAdminPage />,
            },
        ],
    },
    {
        path: "*",
        element: "NotFound Page nhé",
    },
]);
