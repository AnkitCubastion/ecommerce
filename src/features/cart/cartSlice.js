import { createSlice } from "@reduxjs/toolkit";

const findProductIndex = (cartItems, productId) => {
  return cartItems.findIndex((item) => item.id === productId);
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return { cartItems: [], amount: 0, total: 0 };
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return { cartItems: [], amount: 0, total: 0 };
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};

// const initialState = {
//   cartItems: [],
//   amount: 0,
//   total: 0,
// };

const cartSlice = createSlice({
  name: "cart",
  initialState: loadStateFromLocalStorage,
  reducers: {
    addToCart: (state, { payload }) => {
      const { product, amount } = payload;

      const existingProductIndex = findProductIndex(
        state.cartItems,
        product.id
      );

      if (existingProductIndex !== -1) {
        state.cartItems[existingProductIndex].amount += amount;
      } else {
        state.cartItems.push({ ...product, amount });
      }
      console.log(state.cartItems);
      state.total += product.price * amount;
      state.amount += amount;
      saveStateToLocalStorage(state);
    },
    clearCart: (state, action) => {
      state.cartItems = [];

      saveStateToLocalStorage(state);
      console.log(state);
    },
    removeItem: (state, { payload }) => {
      //   console.log(action);
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      saveStateToLocalStorage(state);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
      saveStateToLocalStorage(state);
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
      saveStateToLocalStorage(state);
    },
    calculateTotals: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

// console.log(cartSlice);

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
