import { Tooltip } from "@mui/material";
import { useMemo } from "react";
import { AddToCartIcon } from "../../../tools/icons";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { TableColumn } from "../../../tools/ui_components/Table/types";
import { CatalogProduct } from "../../product/types";

interface Props {
  onAddItem: (item: CatalogProduct) => void;
  onPlusItem: (item: CatalogProduct) => void;
  onMinusItem: (item: CatalogProduct) => void;
  onClearItem: (item: CatalogProduct) => void;

  getProductQuantityInCart: (id: number) => number;
}

export function getTemplate({
  onAddItem,
  onPlusItem,
  onMinusItem,
  onClearItem,

  getProductQuantityInCart,
}: Props): TableColumn<CatalogProduct>[] {
  const columns: TableColumn<CatalogProduct>[] = [
    {
      key: "image",
      title: "Item",
      renderCell: (item) => (
        <img
          alt=""
          src={item.image}
          style={{ width: 60, objectFit: "contain" }}
        />
      ),
      getValue: (item) => item.image,
    },
    // {
    //   key: "id",
    //   title: "ID",
    //   renderCell: (item) => <a>{item.id}</a>,
    //   getValue: (item) => item.id,
    // },
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

        return <a>{item.price}</a>;
      },
      getValue: (item) => item.price,
    },
    {
      key: "quantity",
      title: "Quantity",
      renderCell: (item) => {
        const inCartQuantity = getProductQuantityInCart(item.id);

        return (
          <div style={{ marginRight: "auto" }}>
            <span
              style={{
                background: "#aaa",
                borderRadius: "10px",
                padding: "1px 10px",
              }}
            >
              <span onClick={() => onMinusItem(item)}>-</span>
              <span style={{ margin: "0px 10px" }}>{inCartQuantity}</span>
              <span onClick={() => onPlusItem(item)}>+</span>
            </span>
          </div>
        );
      },
      getValue: (item) => item.price,
    },
    {
      key: "total",
      title: "Total",
      renderCell: (item) => {
        const inCartQuantity = getProductQuantityInCart(item.id);

        return <a>{item.price * inCartQuantity}</a>;
      },
      getValue: (item) => item.price,
    },
    {
      key: "action",
      title: "",
      renderCell: (item) => {
        const inCartQuantity = getProductQuantityInCart(item.id);

        return (
          <div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => onClearItem(item)}
            >
              <Tooltip title={"Remove from Cart"}>
                <CloseOutlinedIcon />
              </Tooltip>
            </div>
          </div>
        );
      },
      getValue: (item) => "",
    },
  ];

  return columns;
}
