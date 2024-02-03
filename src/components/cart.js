import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { clearCart } from "../features/cart/cartSlice";
import "./cart.css";

const Cart = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section>
        <header>
          <h1>Your Bag</h1>
          <h3>Is currently EMPTY!</h3>
        </header>
      </section>
    );
  }

  return (
    <div>
      <section>
        <header>
          <h1>Your Bag</h1>
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <h3>
              Total <span>${total.toFixed(2)}</span>
            </h3>
            <button className="clearCart" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </footer>
        </header>
      </section>
    </div>
  );
};

export default Cart;
