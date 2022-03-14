import React from "react";
import { ConsumeState } from "../../Context/CartContext/CartItemsState";
import "./Product.css";

const Product = ({ product }) => {
  // const myobject =  ConsumeState()
  // console.log( myobject)
  const { addtoCart } = ConsumeState();

  return (
    
      <section className="product text-center">
        <div className="productImg">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productDesc">
          <p>{product.name}</p>
          <div className="d-flex justify-content-evenly align-items-center">
            <div>
              <p>price: {product.price}$</p>
              <p className="discount">
                <span> {product.discount}%</span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => addtoCart(product)}
              className="btn btnColor"
            >
              AddToCart
            </button>
          </div>
        </div>
      </section>
    
  );
};

export default Product;
