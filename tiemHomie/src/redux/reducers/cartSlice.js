import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  menu: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      const menu = action.payload;
      state.menu = menu;
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.name === product.name
      );

      if (existingProduct) {
        existingProduct.attribute.amount += product.attribute.amount;
      } else {
        state.cartItems.push({ ...product });
      }

      state.amount += product.attribute.amount;
    },

    incrementAmount: (state, action) => {
      const { name } = action.payload;
      const item = state.cartItems.find((item) => item.name === name);
      if (item) {
        item.attribute.amount++;
      }
    },
    decrementAmount: (state, action) => {
      const { name } = action.payload;
      const item = state.cartItems.find((item) => item.name === name);
      if (item) {
        item.attribute.amount--;
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.name !== name);
    },
    updateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.attribute.amount;
        total += item.attribute.amount * item.sellingPrice;
      });
      state.amount = amount;
      state.total = total;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  incrementAmount,
  decrementAmount,
  removeItem,
  updateTotal,
  clearCart,
} = cartSlice.actions;

export const selectAllProducts = (state) => state.cartItems;

export default cartSlice.reducer;
