import { Link } from "react-router-dom";
import { ConsumeState } from "../../Context/CartContext/CartItemsState";
import "./Cart.css";
import CartSummary from "./CartSummary/CartSummary";

const Cart = () => {
  // cart --cart---cartitems
  // const myobject = ConsumeState();
  const { cart, addtoCart, deleteCart } = ConsumeState();

  if (cart.cartItems.length === 0) {
    return (
      <main>
        <h2>cart is empty</h2>
      </main>
    );
  }

  return (
    <main className="container my-5">
      <div className="row gx-5">
        <div className="col-lg-8">
          {cart.cartItems.map((product) => {
            return (
              <section className="cartItemList" key={product.id}>
                <div className="cartItem">
                  <div className="cartImg">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="cartName">
                    <p>{product.name}</p>
                  </div>
                  <div>
                    <p>price : {product.price}$</p>
                    <p>discount :{product.discount}%</p>
                  </div>

                  <div className="btn btnGroup">
                    <button onClick={() => addtoCart(product)}>+</button>
                    <button>
                      <span className="text-black h6 mx-2">{product.qty}</span>
                    </button>
                    <button onClick={() => deleteCart(product)}>-</button>
                    {/* <button  onClick={()=>remove(product)} disabled={product.qty === 1} >-</button> */}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
        <div className="col-lg-4 cartSummary mt-4 ">
          <CartSummary />
        </div>
      </div>
    </main>
  );
};

export default Cart;
