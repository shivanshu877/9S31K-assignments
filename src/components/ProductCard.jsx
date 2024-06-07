import React from "react";
import "./ProductCard.css"; // Import the extracted CSS

const ProductCard = ({ image, title, price, link }) => {
  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img
          src={image}
          alt="Image"
          className="product-card-image"
          loading="lazy"
        />
      </div>
      <div className="product-card-details">
        <div className="product-card-title">{title}</div>
        <div className="product-card-price">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
