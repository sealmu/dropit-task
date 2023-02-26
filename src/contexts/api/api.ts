import { CatalogProduct } from "../../modules/product/types";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "db" }),
  endpoints: (builder) => ({
    getProducts: builder.query<CatalogProduct[], void>({
      query: () => ({ url: "products.json" }),
      transformResponse: (response: CatalogProduct[]) => {
        return response || [];
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

const API = {
  product: {
    getAll: async (): Promise<CatalogProduct[]> =>
      fetch("db/products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => response.json()),
  },
};

export { API };
