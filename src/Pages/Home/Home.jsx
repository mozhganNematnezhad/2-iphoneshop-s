import React from "react";
import Product from "../../Components/Product/Product";
import * as data from "../../data";

const Home = () => {
  return (
    <section className="productList">
      <div className="container">
        <div className="row">
          {data.products.map((product) => {
            return (
              <div className="col-lg-4 col-md-6 my-5 " key={product.id}>
                <Product product={product}  />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
