import React from "react";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "./cartItem.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartItem = ({ id, image, amount, title }) => {
  const dispatch = useDispatch();
  return (
    <div className="cartItem-container">
      <div className="left">
        <div>
          <img src={image} alt="" />
        </div>

        <div>{title}</div>
      </div>

      <div className="right">
        <div>
          <button
            onClick={() => {
              if (amount < 2) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <CiCircleMinus />
          </button>
        </div>

        <div>{amount}</div>

        <div>
          <button
            onClick={() => {
              dispatch(increase({ id }));
            }}
          >
            <CiCirclePlus />
          </button>
        </div>

        <div>
          <button
            className="remove"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
