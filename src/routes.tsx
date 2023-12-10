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
<<<<<<< HEAD
        path: "/signin",
        element: <Signin />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/admin",
        element: isAuthenticated() ? <AdminLayout /> : <Navigate to="/" />,
        children: [
            {
                path: "product",
                element: <Product products={[]} />,
            },
            {
                path: "product/add",
                element: <AddProduct />,
            },
            {
                path: "product/:id",
                element: <ProductDetail />,
            },

            {
                path: "product/update/:id",
                element: <UpdateProduct />,
            },
            {
                path: "product/recycle",
                element: <RecycleBin />,
            },
            {
                path: "size",
                element: <Size />,
            },
            {
                path: "size/add",
                element: <AddSize />,
            },
            {
                path: "size/update/:id",
                element: <UpdateSize />,
            },
            {
                path: "imageProduct",
                element: <ImageProduct />,
            },
            {
                path: "imageProduct/add",
                element: <AddImage />,
            },
            {
                path: "imageProduct/update/:id",
                element: <UpdateImage />,
            },
            {
                path: "/admin",
                element: <HomeAdmin />,
            },
            {
                path: "tintuc",
                element: <DanhSachTinTuc />,
            },
            {
                path: "tintuc/add",
                element: <ThemTinTuc />,
            },
            {
                path: "tintuc/:id",
                element: <SuaTinTuc />,
            },
            {
                path: "imagetintuc",
                element: <ImageTinTuc />,
            },
            {
                path: "imagetintuc/add",
                element: <ThemImageTinTuc />,
            },
            {
                path: "imagetintuc/:id",
                element: <SuaImageTinTuc />,
            },
            {
                path: "comments",
                element: <ListComment />,
            },
            {
                path: "category",
                element: <AdminCategory />,
            },
            {
                path: "category/add",
                element: <CategoryAdd />,
            },
            {
                path: "category/:idCategory/edit",
                element: <CategoryEdit />,
            },
            {
                path: "contact",
                element: <AdminContact />,
            },
            {
                path: "contact/add",
                element: <ContactAdd />,
            },
            {
                path: "contact/:idContact/edit",
                element: <ContactEdit />,
            },
            {
                path: "information",
                element: <AdminInformation />,
            },
            {
                path: "information/add",
                element: <InformationAdd />,
            },
            {
                path: "information/:idInformation/edit",
                element: <InformationEdit />,
            },
            {
                path: "user",
                element: <AdminUser />,
            },
            {
                path: "user/add",
                element: <AdminUserAdd />,
            },
            {
                path: "user/edit/:id",
                element: <AdminEditUser />,
            },
            {
                path: "customer",
                element: <AdminCustomer />,
            },
            {
                path: "customer/add",
                element: <AdminCustomerAdd />,
            },
            {
                path: "customer/edit/:id",
                element: <AdminCustomerEdit />,
            },
            {
                path: "role",
                element: <AdminRole />,
            },
            {
                path: "role/add",
                element: <AdminRoleAdd />,
            },
            {
                path: "role/edit/:id",
                element: <AdminRoleEdit />,
            },
            {
                path: "color",
                element: <Color />,
            },
            {
                path: "color/add",
                element: <AddColor />,
            },
            {
                path: "color/edit/:id",
                element: <UpdateColor />,
            },
            {
                path: "order",
                element: <Order />,
=======
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: "Page admin here",
>>>>>>> origin/main
            },
            {
                path: "sale",
                element: <SaleAdminPage />,
            },
<<<<<<< HEAD
            {
                path: "payment",
                element: <PaymentAdmin />,
            },
=======
>>>>>>> origin/main
        ],
    },
    {
        path: "*",
        element: "NotFound Page nhé",
    },
]);
