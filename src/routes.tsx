import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, ClientLayout } from "./layout";
import HomePage from "./pages/Main/HomePage";
import ProductDetailPage from "./pages/Main/ProductDetailPage";
import AddProduct from "./pages/admin/Product/AddProduct";
import Product from "./pages/admin/Product/Product";
import { default as UpdateProduct, default as UpdateSize } from "./pages/admin/Product/UpdateProduct";
import RecycleBin from "./pages/admin/Product/recycle-bin";
import AdminCustomerAdd from "./pages/admin/customer/add";
import AdminCustomer from "./pages/admin/customer/customer";
import AdminCustomerEdit from "./pages/admin/customer/edit";
import AddImageProduct from "./pages/admin/imageProduct/AddImage";
import AdminRoleAdd from "./pages/admin/role/add";
import AdminRole from "./pages/admin/role/role";
import AddSize from "./pages/admin/size/AddSize";
import Size from "./pages/admin/size/size";
import AdminUserAdd from "./pages/admin/user/add";
import AdminEditUser from "./pages/admin/user/edit";
import AdminUser from "./pages/admin/user/user";
import SaleAdminPage from "./pages/admin/SaleAdminPage";

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
      },{
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
      // {
      //   path: "imageProduct",
      //   element: <ImageProduct/>,
      // },
      {
        path: "imageProduct/add",
        element: <AddImageProduct/>,
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
 
  
]);
