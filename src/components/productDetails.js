import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProductDetails(response.data);
        console.log(response.data);
      } catch (error) {
        alert("Error fetching product details:");
      }
    };
    fetchProductDetails();
  }, [productId]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <h3>Product Details</h3>
      <img src={productDetails.image} alt={productDetails.title} />
      <p>Category: {productDetails.category}</p>
      <p>Title: {productDetails.title}</p>
      <p>Price: {productDetails.price}</p>
      <p>Rating: {productDetails.rating.rate}</p>
      <p>Description: {productDetails.description}</p>
    </div>
  );
};

export default ProductDetails;
