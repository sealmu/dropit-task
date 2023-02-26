import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import { TableRow as MaterialTableRow } from "@mui/material";
import { screens } from "../../../constants";
import { debug } from "console";

function getGridStructure(props: {
  inCartQuantity: number;
  mode: "products" | "cart";
}) {
  const { inCartQuantity, mode } = props;

  if (!inCartQuantity) {
    return `
        "image id    action"
        "image name  action"
        "image price action"`;
  } else {
    if (mode == "products") {
      return `
        "image name  action"
        "image price action"
        "image price action"
        `;
    } else {
      return `"image name       action"
               "image price     action"
               "image quantity total"`;
    }
  }
}

const StyledMaterialTableRow = styled(MaterialTableRow)<{
  inCartQuantity: number;
  mode: "products" | "cart";
}>`
  @media only screen and (${screens.sm}) {
    && {
      display: grid;
      grid-auto-flow: column;
      grid-template-areas: ${({ inCartQuantity, mode }) =>
        getGridStructure({ inCartQuantity, mode })};
      border: 1px solid grey;
      margin-bottom: 10px;

      grid-template-columns: auto auto 1fr;

      &.table-row-header {
        display: none;
      }

      .table-cell-id {
        ${(props) => (props.inCartQuantity ? "display: none;" : "")}
      }
    }
  }
`;

const TableRow: FC<{
  children: ReactNode;
  className?: string | undefined;
  inCartQuantity: number;
  mode: "products" | "cart";
}> = ({ children, className, inCartQuantity, mode }) => {
  return (
    <StyledMaterialTableRow
      inCartQuantity={inCartQuantity}
      mode={mode}
      className={className}
    >
      {children}
    </StyledMaterialTableRow>
  );
};

export default TableRow;
