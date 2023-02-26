import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
import { RootState } from "../index";
import { CatalogProduct } from "../../modules/product/types";
import { productsApi } from "../../contexts/api";

interface ProductsState {
  products: CatalogProduct[];
  filteredProducts: CatalogProduct[];
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
};

// export const GetCounters = createAsyncThunk("counter/getCounters", async () => {
//   console.log("async.....");
//   const result = await axios.get(`https://reqres.in/api/users`);
//   console.log(result.data);
//   return result.data;
// });

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<CatalogProduct[]>) => {
      state.products = action.payload;
    },
    initFilteredProducts: (state) => {
      state.filteredProducts = [...state.products];
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      const searchedSubString = action.payload;
      state.filteredProducts = [...state.products].filter((prod) => {
        return (
          prod.id.toString().search(new RegExp(searchedSubString, "gi")) !=
            -1 ||
          prod.title.toString().search(new RegExp(searchedSubString, "gi")) !=
            -1
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        state.products = [...payload];
        state.filteredProducts = [...payload];
        //state.value = action.payload.data.length;
        // both `state` and `action` are now correctly typed
        // based on the slice state and the `pending` action creator
      },
    );
    // builder.addCase(GetCounters.rejected, (state, action: any) => {
    //   state.value = 0;
    //   // both `state` and `action` are now correctly typed
    //   // based on the slice state and the `pending` action creator
    // });
    // [GetCounters.fulfilled]: (state: CounterState, action) => {
    //     state.value = action.payload.data.count();
    // },
    // [GetCounters.rejected]: (state: CounterState, action) => {
    //     state.value = 0
    // },
  },
});

export const { setProducts, initFilteredProducts, filterProducts } =
  productsSlice.actions;

// export const selectProducts = (state: RootState) => state.produc;

export default productsSlice.reducer;
