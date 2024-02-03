import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  console.log(product);

  return (
    <div className="card">
      <Link to={`/${product.id}`}>
        <img src={product.image} alt="" />
      </Link>
      <h4>{product.title}</h4>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => {
          dispatch(addToCart({ product, amount: 1 }));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
