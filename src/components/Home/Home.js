import React from "react";

import CoverImg from "../../sass/assets/img/jpg/cover.jpg";
import Product from "../Product/Product";
import Product1 from "../../sass/assets/img/jpg/product1.jpg";

const Home = () => {
  return (
    <div className="home">
      <div>
        <img className="home__image" src={CoverImg} alt="" />
      </div>
      <div className="home__row">
        <Product
          id={12345}
          title="Producto titulo"
          price={20}
          rating={5}
          image={Product1}
        />

        <Product
          id={12345}
          title="Producto titulo"
          price={20}
          rating={5}
          image={Product1}
        />
      </div>

      <div className="home__row">
        <Product
          id={12345}
          title="Producto titulo"
          price={20}
          rating={5}
          image={Product1}
        />
        <Product
          id={12345}
          title="Producto titulo"
          price={20}
          rating={5}
          image={Product1}
        />
        <Product
          id={12345}
          title="Producto titulo"
          price={20}
          rating={5}
          image={Product1}
        />
      </div>

      <div className="home__row">
        <Product
          id={12345}
          title="Producto titulo"
          price={20}
          rating={5}
          image={Product1}
        />
      </div>
    </div>
  );
};

export default Home;
