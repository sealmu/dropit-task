import { useCallback, useMemo } from "react";

import { GetKeyRow, TableColumn } from "../../tools/ui_components/Table/types";

import { CatalogProduct } from "../product/types";
import { ICartProduct, ICartProductsMap } from "../cart/types";

import { getTemplate as getCatalogTableTemplate } from "./tableModes/productsCatalog";
import { getTemplate as getCartTableTemplate } from "./tableModes/cartCatalog";

interface Props {
  onAddItem: (item: CatalogProduct) => void;
  onPlusItem: (item: CatalogProduct) => void;
  onMinusItem: (item: CatalogProduct) => void;
  onClearItem: (item: CatalogProduct) => void;
  cartProductsMap: ICartProductsMap<ICartProduct>;
  getProductQuantityInCart: (id: number) => number;
  mode?: "products" | "cart";
}

function useCatalogTable({
  onAddItem,
  onPlusItem,
  onMinusItem,
  cartProductsMap,
  getProductQuantityInCart,
  onClearItem,
  mode = "products",
}: Props) {
  let columns: TableColumn<CatalogProduct>[] = [];
  if (mode == "products") {
    columns = useMemo(
      () =>
        getCatalogTableTemplate({
          onAddItem,
          onPlusItem,
          onMinusItem,
          onClearItem,
          getProductQuantityInCart,
        }),
      [onAddItem, cartProductsMap],
    );
  } else if (mode == "cart") {
    columns = useMemo(
      () =>
        getCartTableTemplate({
          onAddItem,
          onPlusItem,
          onMinusItem,
          getProductQuantityInCart,
          onClearItem,
        }),
      [onAddItem, cartProductsMap],
    );
  }

  const getKeyRow: GetKeyRow<CatalogProduct> = useCallback(
    (item) => item.id.toString(),
    [],
  );

  return {
    columns,
    getKeyRow,
  };
}

export default useCatalogTable;
