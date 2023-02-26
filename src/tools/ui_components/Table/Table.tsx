import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import React from "react";

import TableCell from "./components/TableCell";
import TableRow from "./components/TableRow";

import { GetKeyRow, TableColumn, GetCartQuantity } from "./types";

interface Props<Item> {
  columns: TableColumn<Item>[];
  data: Item[];
  getKeyRow: GetKeyRow<Item>;
  getProductQuantityInCart: (item: Item) => number;
  mode: "products" | "cart";
}

function Table<Item>({
  data,
  columns,
  getKeyRow,
  getProductQuantityInCart,
  mode,
}: Props<Item>) {
  return (
    <TableContainer component={Paper}>
      <MaterialTable aria-label="simple table">
        <TableHead>
          <TableRow className="table-row-header" inCartQuantity={0} mode={mode}>
            {columns.map(({ key, title, width }) => (
              <TableCell
                key={key.toString()}
                inCartQuantity={0}
                mode={mode}
                width={width}
              >
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow
              key={getKeyRow(item)}
              inCartQuantity={getProductQuantityInCart(item)}
              mode={mode}
            >
              {columns.map(({ key, width, renderCell, getValue }) => (
                <TableCell
                  className={`table-cell-${key.toString()}`}
                  key={key.toString()}
                  mode={mode}
                  inCartQuantity={getProductQuantityInCart(item)}
                  width={width}
                  title={getValue(item) as string}
                >
                  {renderCell(item)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
}

export default Table;
