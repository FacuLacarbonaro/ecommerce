import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Context/StateProvider";

import "../../sass/main.scss";
import { getBasketTotal } from "../../Context/Reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.lenght} items ) : 
              <strong>
                {value}
            </strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox'/> This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
