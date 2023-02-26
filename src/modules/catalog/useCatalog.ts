import { useCallback } from "react";

import { useGetProductsQuery } from "../../contexts/api";

import { CatalogProduct } from "../product/types";

import useCatalogTable from "./useCatalogTable";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import {
  addProduct,
  reduceProduct,
  clearProduct,
} from "../../store/slices/cart";
import { GetCartQuantity } from "../../tools/ui_components/Table/types";
import useCartData from "../cart/hooks/useCartData";

type ICatalogModes = "products" | "cart";

const useCatalog = (mode: ICatalogModes = "products") => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback((product: CatalogProduct) => {
    console.log("handleAddProductToCart");
    console.log("product", product);
    dispatch(addProduct(product));
  }, []);

  const handleMinusItem = useCallback((product: CatalogProduct) => {
    dispatch(reduceProduct(product));
  }, []);

  const handlePlusItem = useCallback((product: CatalogProduct) => {
    dispatch(addProduct(product));
  }, []);

  const handleClearItem = useCallback((product: CatalogProduct) => {
    dispatch(clearProduct(product));
  }, []);

  const {
    productsMap: cartProductsMap,
    getProductQuantityInCart,
    products: cartProducts,
  } = useCartData();

  const getQuantityInCart = (item: CatalogProduct) => {
    return getProductQuantityInCart(item.id);
  };

  const { columns, getKeyRow } = useCatalogTable({
    onAddItem: handleAddProductToCart,
    onPlusItem: handlePlusItem,
    onMinusItem: handleMinusItem,
    cartProductsMap,
    getProductQuantityInCart,
    onClearItem: handleClearItem,
    mode,
  });

  const { isLoading, data, error, refetch, isSuccess } = useGetProductsQuery();

  const products =
    mode === "cart"
      ? cartProducts
      : useSelector((state: RootState) => state.products.filteredProducts);

  return {
    isLoading,
    products,
    columns,
    getKeyRow,
    getQuantityInCart,
  };
};

export default useCatalog;
