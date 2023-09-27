export const getProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();
    dispatch({ type: "GET_PRODUCTS", payload: json });
  } catch (error) {
    console.log(error);
  }
};

export const singleProduct = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const json = await response.json();
    dispatch({
      type: "GET_SINGLE_PRODUCTS",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchProduct = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/search?q=phone"
    );
    const json = await response.json();
    dispatch({
      type: "GET_SEARCH_PRODUCTS",
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    } else {
      console.log("Failed to remove the product from the cart.");
    }
  } catch (error) {
    console.error("An error occurred while removing the product:", error);
  }
};

