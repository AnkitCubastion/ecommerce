import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./components/landing";
import AboutUs from "./components/aboutUs";
import Cart from "./components/cart";
import HomeLayout from "./components/homeLayout";
import "./App.css";
import ProductDetails from "./components/productDetails";
import Login from "./components/login";
import Signup from "./components/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
