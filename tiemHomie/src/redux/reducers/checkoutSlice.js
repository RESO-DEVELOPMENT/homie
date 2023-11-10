import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  checkoutAmount: 0,
  totalPriceCheckout: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addProduct(state, action) {
      const { product } = action.payload;
      state.products.push(product);
      state.checkoutAmount += product.attribute?.amount ?? 0;
    },
    removeProduct(state, action) {
      const { productId } = action.payload;
      state.products = state.products.filter((p) => p.sku !== productId);
      state.checkoutAmount -= 1;
    },
    addAllToCheckout: (state, action) => {
      const cartItems = action.payload; // Access payload directly
      state.products.push(...cartItems);
      state.checkoutAmount += cartItems.length;
    }, 
    removeAllFromCheckout: (state) => {
      state.products = [];
      state.checkoutAmount = 0;
      state.totalPriceCheckout=0;
    },
    updateTotalCheckout: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        if (item.attribute) {
          amount += item.attribute.amount;
          total += item.attribute.amount * item.sellingPrice;  
        }
      });
      state.checkoutAmount = amount;
      state.totalPriceCheckout = total;
    },
    incrementCheckoutAmount: (state, action) => {
      const { name } = action.payload;
      const item = state.products.find((item) => item.name === name);
      if (item) {
        item.attribute.amount++;
      }
    },
    decrementCheckoutAmount: (state, action) => {
      const { name } = action.payload;
      const item = state.products.find((item) => item.name === name);
      if (item) {
        item.attribute.amount--;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  addAllToCheckout,
  removeAllFromCheckout,
  updateTotalCheckout,
  incrementCheckoutAmount,
  decrementCheckoutAmount,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;