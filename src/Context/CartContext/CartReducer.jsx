const addtoCart = (state, action) => {
  const updatedCart = [...state.cartItems];
  const findProduct = updatedCart.find((p) => p.id === action.payload.id);
  // console.log("finProduct", findProduct); //برای بازاول undifind

  if (!findProduct) {
    return {
      ...state,
      cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
    };
  } else {
    const allProduct = updatedCart.map((product) =>
      product.id === action.payload.id
        ? { ...action.payload, qty: product.qty + 1 }
        : product
    );
    return {
      ...state,
      cartItems: allProduct,
      // total: state.total - action.payload.price,
    };
  }
};

const deleteCart = (state, action) => {
  const updatedCart = [...state.cartItems];
  const findProduct = updatedCart.find((p) => p.id === action.payload.id);
  // console.log(findProduct); //{id: 2, name: 'ساعت هوشمند اپل واچ سری 7 مدل 41mm Aluminum', price: 2000 ,qty:1}

  if (findProduct.qty === 1) {
    const filteredProduct = updatedCart.filter(
      (p) => p.id !== action.payload.id
    );
    return { ...state, cartItems: filteredProduct };
  } else {
    const allProduct = updatedCart.map((p) =>
      p.id === action.payload.id
        ? { ...action.payload, qty: findProduct.qty - 1 }
        : p
    );
    return {
      ...state,
      cartItems: allProduct,
      // total: state.total - action.payload.price,
    };
  }
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "addtoCart": {
      return addtoCart(state, action);
    }

    case "deleteCart": {
      return deleteCart(state, action);
    }

    default:
      return state;
  }
};

export default CartReducer;




















// case "addtoCart": {
//     const updatedCart = [...state.cartItems];
//     const index = updatedCart.findIndex((p) => p.id === action.payload.id);
//     console.log("index", index); //برای بار اول -1

//     if (index === -1) {
//       return {
//         ...state,
//         cartItems: [...state.cartItems ,{...action.payload, qty :1}],
//       };
//     } else {
//       const allProduct = updatedCart.map((product) =>
//       product.id === action.payload.id ? { ...action.payload, qty: product.qty + 1 } : product
//       );
//       return { ...state, cartItems: allProduct };
//     }
//   }
