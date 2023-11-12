import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, ClientLayout } from "./layout";
import SaleAdminPage from "./pages/Admin/SaleAdminPage";
import HomePage from "./pages/Main/HomePage";
import ProductDetailPage from "./pages/Main/ProductDetailPage";

export const routers = createBrowserRouter([
<<<<<<< HEAD
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
=======

  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        // index: true,
        // element: <MyComponent />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "product",
        element: <Product products={[]}/>,
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
        path: "user/:id/edit",
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
        path: "customer/:id",
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

        path: "product/add",
        element: <AddProduct/>,
  
      },
      {
        path: "product/update/:id",
        element: <UpdateProduct/>,
      },
      {
        path: "product/recycle",
        element: <RecycleBin/>,
      },
      {
        path: "size",
        element: <Size/>,
      },
      {
        path: "size/add",
        element: <AddSize/>,
      },
      {
        path: "size/update/:id",
        element: <UpdateSize/>,
      },
      {
        path: "imageProduct",
        element: <ImageProduct/>,
      },
      {
        path: "imageProduct/add",
        element: <AddImage/>,
      },
      // {
      //   path: "size/update/:id",
      //   element: <UpdateSize/>,
      // },

     
      

    ],
  },

  {
    path: "*",
    element: "NotFound Page nhé",
  },
 
  
>>>>>>> 9a450812c4defd8df925bccd59f4d7d8a94d4b48
]);
