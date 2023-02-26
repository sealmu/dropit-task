import { TableCell as MaterialTableCell } from "@mui/material";
import React, { FC } from "react";
import styled from "styled-components";
import { screens } from "../../../constants";

interface Props {
  width?: number;
  className?: string | undefined;
  title?: string | undefined;
  inCartQuantity: number;
  mode: "products" | "cart";
}

const StyledMaterialTableCell = styled(MaterialTableCell)<{
  inCartQuantity: number;
  mode: "products" | "cart";
}>`
  img {
    width: 30px;
    height: 30px;
  }

  &.table-cell-action {
    height: ${(props) => (props.inCartQuantity == 0 ? "100%" : "0px")};
  }

  &.table-cell-image {
    padding: 5px;
  }

  @media only screen and (${screens.sm}) {
    && {
      padding: 0px;

      &.table-cell-title {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        a {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }

      &.table-cell-image {
        grid-area: image;
      }
      &.table-cell-id {
        grid-area: id;
        height: 25px;
        padding-inline: 4px;
        color: #777;
        display: inline-flex;
        align-items: center;
      }
      &.table-cell-title {
        grid-area: name;
        height: 25px;
        padding-inline: 4px;
        color: #777;
        display: inline-flex;
        align-items: center;
      }
      &.table-cell-price {
        grid-area: price;
        height: ${(props) => (props.inCartQuantity ? "50px" : "25px")};
        padding-inline: 4px;
        color: #777;
        display: inline-flex;
        align-items: center;
      }
      &.table-cell-action {
        grid-area: action;
        display: flex;
        justify-content: flex-end;
        align-items: self-start;
        padding: 5px 5px;
        height: 100%;
        box-sizing: border-box;
      }

      &.table-cell-quantity {
        grid-area: quantity;
        display: flex;
        justify-content: flex-end;
        align-items: self-start;
        padding: 5px 5px;
        height: 100%;
        box-sizing: border-box;
      }

      &.table-cell-total {
        grid-area: total;
        display: flex;
        justify-content: flex-end;
        align-items: self-start;
        padding: 5px 5px;
        height: 100%;
        box-sizing: border-box;
      }

      &.MuiTableCell-root {
        border: none;
        line-height: normal;
      }

      img {
        width: 35px;
        height: 35px;
      }
    }
  }
`;

const TableCell: FC<Props> = ({
  width,
  children,
  className,
  title,
  inCartQuantity,
  mode,
}) => {
  return (
    <StyledMaterialTableCell
      title={title}
      inCartQuantity={inCartQuantity}
      className={className}
      mode={mode}
      style={
        {
          // height: "100%",
          // paddingInline: 4,
        }
      }
    >
      {children}
    </StyledMaterialTableCell>
  );
};

export default TableCell;
