import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatalogProduct, SoldProduct } from "../../modules/product/types";

interface CartState {
  soldProducts: SoldProduct[];
}

const initialState: CartState = {
  soldProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CatalogProduct>) => {
      const newProduct = action.payload;
      const productInCart = state.soldProducts.find(
        (sprod) => sprod.product.id == newProduct.id,
      );
      if (!productInCart) {
        state.soldProducts.push({
          product: newProduct,
          quantity: 1,
        });
      } else {
        productInCart.quantity++;
      }
    },
    reduceProduct: (state, action: PayloadAction<CatalogProduct>) => {
      const productToReduce = action.payload;
      const productToReduceInCart = state.soldProducts.find(
        (sprod) => sprod.product.id == productToReduce.id,
      );
      if (productToReduceInCart && productToReduceInCart.quantity) {
        productToReduceInCart.quantity--;
        if (!productToReduceInCart.quantity) {
          state.soldProducts = state.soldProducts.filter(
            (sprod) => sprod.product.id != productToReduceInCart.product.id,
          );
        }
      }
    },
    clearProduct: (state, action: PayloadAction<CatalogProduct>) => {
      const productToClear = action.payload;
      const productToClearInCart = state.soldProducts.find(
        (sprod) => sprod.product.id == productToClear.id,
      );
      if (productToClearInCart) {
        state.soldProducts = state.soldProducts.filter(
          (sprod) => sprod.product.id != productToClearInCart.product.id,
        );
      }
    },
    emptyCart: (state) => {
      state.soldProducts = [];
    },
  },
});

export const { addProduct, reduceProduct, clearProduct, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
