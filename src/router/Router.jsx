import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import Products from "../pages/Products";
import AuthForm from "../components/AuthForm";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "login",
          element:<AuthForm/>
        },
        {
            path: "/",
            element:<Home/>
        },
                {
            path: "/products",
            element:<Products/>
        }, 
        {
          path: "/shop/:id",
          element:<SingleProduct/>
        },
      ]
    },
  ]);
  

export default router