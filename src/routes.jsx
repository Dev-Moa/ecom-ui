import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Carts from "./pages/Carts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import SingleProduct from "./pages/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/products/:productId",
        element: <SingleProduct />
      },
      {
        path: "/carts/",
        element: <Carts />
      },

      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "Login",
        element: <Login />,
      },
    ],
  },
]);
