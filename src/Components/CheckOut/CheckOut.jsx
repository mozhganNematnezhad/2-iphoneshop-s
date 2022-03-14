import React from "react";
import { ConsumeAuthState } from "../../Context/AuthContext/AuthState";
import { ConsumeState } from "../../Context/CartContext/CartItemsState";

const CheckOut = () => {
  const { Auth, setAuth } = ConsumeAuthState();
    // const{cart} =ConsumeState()
    // console.log(cart);
  return (
    <main className="container">
      {Auth ? (
        <div className="row align-items-center">
          <div className="col-lg-8">
            <section className="cartItemList">
              <h2>checkout Detail</h2>
              <p>name : {Auth.name}</p>
              <p>email : {Auth.email}</p>
              <p>tel : {Auth.phoneNumber}</p>
            </section>
          </div>

          <div className="col-lg-4" style={{ backgroundColor: "#fff" }}>
            <section className="cartSummery">
            </section>
          </div>
        </div>
      ) : (
        <p>please login</p>
      )}
    </main>
  );
};

export default CheckOut;










// {Auth ? (
//     <>
//       <p>name : {Auth.name}</p>
//       <p>email : {Auth.email}</p>
//       <p>tel : {Auth.phoneNumber}</p>
//     </>
//   ) : (
//     <p> please login</p>
//   )}
