import React, { useEffect } from "react";
import Navbar from "./navbar";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";

const HomeLayout = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
