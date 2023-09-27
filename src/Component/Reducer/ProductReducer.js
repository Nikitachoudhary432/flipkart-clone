const productReducer = (
  state = { products: [], product_data: {}, cart: [] },
  action
) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_SINGLE_PRODUCTS":
      return { ...state, product_data: action.payload };
    case "GET_SEARCH_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default productReducer;
