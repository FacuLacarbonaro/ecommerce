import React from "react";

import "../../sass/main.scss";
import Product1 from "../../sass/assets/img/jpg/product1.jpg";
import { useStateValue } from "../../Context/StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p> {title} </p>
        <p className="product-info__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="product-info__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={Product1} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
