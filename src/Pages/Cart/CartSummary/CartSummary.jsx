import React from "react";
import { Link } from "react-router-dom";
import { ConsumeState } from "../../../Context/CartContext/CartItemsState";

import "./CartSummary.css"

const CartSummary = () => {
    const {cart} = ConsumeState();
    console.log(cart);

    const price = cart.cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.qty,
        0
      );

      // const discount =`${price - cartItems.discount}`
      // console.log(discount)

  return (
    <>
      <h3 style={{ marginBottom: "30px", marginTop: "15px" }}>Cart Summary</h3>
      <div className="price d-flex flex-column ">
        <div className=" d-flex">
          <p className="">
            <span className="h5">price</span> :{price}
          </p>
        </div>

        <div className=" d-flex">
          <p className="">
            <span className="h5">discount</span> :20
          </p>
        </div>
        <div className=" d-flex totalPrice">
          <p className="">
            <span className="h5">totalPrice</span> :{price}
          </p>
        </div>
        <Link
        //  to="/checkout"
         to="/siqnup?redirect=checkout"
         
         >
          <div className="text-center">
            <button className="btnC">Go to checkout</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CartSummary;










//  to="/siqnup?redirect=checkout"
// یه دیتایی رو بفرسیتم و مطمین بشیم بعد این که کاربر ثبت نام کرد
// بفرستیم به صفجه
// checkout