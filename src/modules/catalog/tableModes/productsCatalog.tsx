import { Tooltip } from "@mui/material";
import { useMemo } from "react";
import { AddToCartIcon } from "../../../tools/icons";
import { TableColumn } from "../../../tools/ui_components/Table/types";
import { CatalogProduct } from "../../product/types";

interface Props {
  onAddItem: (item: CatalogProduct) => void;
  onPlusItem: (item: CatalogProduct) => void;
  onMinusItem: (item: CatalogProduct) => void;
  onClearItem: (item: CatalogProduct) => void;
  // cartProductsMap: ICartProductsMap<ICartProduct>;
  getProductQuantityInCart: (id: number) => number;
}

export function getTemplate({
  onAddItem,
  onPlusItem,
  onMinusItem,
  onClearItem,
  // cartProductsMap,
  getProductQuantityInCart,
}: Props): TableColumn<CatalogProduct>[] {
  const columns: TableColumn<CatalogProduct>[] = [
    {
      key: "image",
      title: "Image",
      renderCell: (item) => (
        <img
          alt=""
          src={item.image}
          style={{ width: 60, objectFit: "contain" }}
        />
      ),
      getValue: (item) => item.image,
    },
    {
      key: "id",
      title: "ID",
      renderCell: (item) => <a>{item.id}</a>,
      getValue: (item) => item.id,
    },
    {
      key: "title",
      title: "Title",
      renderCell: (item) => <a>{item.title}</a>,
      getValue: (item) => item.title,
    },
    {
      key: "price",
      title: "Price",
      renderCell: (item) => {
        const inCartQuantity = getProductQuantityInCart(item.id);

        return inCartQuantity ? (
          <div>
            <div style={{ height: "25px" }}>
              <a>${item.price}</a>
            </div>
            <div style={{ height: "25px" }}>
              <span
                style={{
                  background: "#aaa",
                  borderRadius: "10px",
                  padding: "1px 10px",
                  height: "25px",
                }}
              >
                <span onClick={() => onMinusItem(item)}>-</span>
                <span style={{ margin: "0px 10px" }}>{inCartQuantity}</span>
                <span onClick={() => onPlusItem(item)}>+</span>
              </span>
            </div>
          </div>
        ) : (
          <a>${item.price}</a>
        );
      },
      getValue: (item) => item.price,
    },
    {
      key: "action",
      title: "",
      renderCell: (item) => {
        const inCartQuantity = getProductQuantityInCart(item.id);

        return (
          <div style={{ height: "100%" }}>
            {inCartQuantity != 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  height: "100%",
                }}
              >
                <span
                  onClick={() => onClearItem(item)}
                  style={{ paddingRight: "10px" }}
                >
                  X
                </span>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Total: </span>{" "}
                  <span style={{ display: "inline-block", width: "20px" }}>
                    <span>{inCartQuantity}</span>
                  </span>
                </div>
              </div>
            ) : (
              <div
                style={{ cursor: "pointer", float: "right" }}
                onClick={() => onAddItem(item)}
              >
                <Tooltip title={"Add to Cart"}>
                  <AddToCartIcon />
                </Tooltip>
              </div>
            )}
          </div>
        );
      },
      getValue: (item) => "",
    },
  ];

  return columns;
}
