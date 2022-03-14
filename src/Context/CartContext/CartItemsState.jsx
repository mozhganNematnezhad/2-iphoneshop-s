import { createContext, useReducer ,useContext } from "react";
import CartReducer from "./CartReducer";
import { useToasts } from 'react-toast-notifications';

const cartItemsContext = createContext();


const initialState = {
  cartItems: [],
  total: 0
};


const CartItemsState = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialState);
  const { addToast } = useToasts();

  const addtoCart = (product) => {
    addToast(`${product.name} added to cart`, { appearance: 'success' ,autoDismiss: true, });
    dispatch({ type: "addtoCart", payload: product });
  };

  const deleteCart = (product) => {
    dispatch({ type: "deleteCart", payload: product });
  };

  return (
    <cartItemsContext.Provider value={{ cart, addtoCart ,deleteCart }}>
      {children}
    </cartItemsContext.Provider>
  );
};

export default CartItemsState;



export const ConsumeState=()=> useContext(cartItemsContext)
