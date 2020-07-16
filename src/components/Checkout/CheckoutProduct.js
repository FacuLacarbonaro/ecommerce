import React from "react";
import { useStateValue } from '../../Context/StateProvider';

import "../../sass/main.scss";


const CheckoutProduct = ({ id, title, image, price, rating }) => {
  
const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    });
  }
  
    return (
    <div className="checkoutProduct">
      <img className='checkoutProduct__image' src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__info-title"> {title} </p>
        <p className="checkoutProduct__info-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__info-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket} >Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
