import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import "../../sass/main.scss";

import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket.lenght === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty </h2>
            <p>
              Yoy have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__left__title">Yout Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.ratig}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
      <div className="checkout__right">
        <Subtotal/>
        </div>)
        }
    </div>
  );
};

export default Checkout;
