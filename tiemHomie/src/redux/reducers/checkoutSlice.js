import { createSlice } from "@reduxjs/toolkit";
import { selectAllProducts } from "./cartSlice";

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
      state.checkoutAmount += 1;
    },
    removeProduct(state, action) {
      const { productId } = action.payload;
      state.products = state.products.filter((p) => p.sku !== productId);
      state.checkoutAmount -= 1;
    },
    addAllToCheckout: (state, action) => {
      // const products = selectAllProducts(action.payload); // Assuming you have a selector in the cartSlice to get all products
      // const products = selectAllProducts(action);
      // state.products.push(...products);
      // state.products = state.products.concat(products);
    },
    removeAllFromCheckout: (state) => {
      state.products = [];
      state.checkoutAmount = 0;
    },
    updateTotalCheckout: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.checkoutAmount = amount;
      state.totalPriceCheckout = total;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  addAllToCheckout,
  removeAllFromCheckout,
  updateTotalCheckout,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
