import React, { useEffect } from "react";

import { LoadingSpinner, Table } from "../../tools/ui_components";

import useCatalog from "./useCatalog";
import StyledCatalogView from "./StyledCatalogView";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../store/slices/products";
import getPageConfig from "./getPageConfig";
import { screens } from "../../tools/constants";

const StyledTextField = styled(TextField)`
  @media only screen and (${screens.sm}) {
    && {
      width: 100%;
    }
  }

  width: 50%;

  && {
    input {
      padding: 0px;
      height: 37px;
    }
  }
`;

type IProps = {
  mode?: "products" | "cart";
};

const CatalogView = (props: IProps) => {
  const { isLoading, products, columns, getKeyRow, getQuantityInCart } =
    useCatalog(props.mode);
  const dispatch = useDispatch();

  const searchTextChanged = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    dispatch(filterProducts(value));
  };

  useEffect(() => {
    dispatch(filterProducts(""));
  }, []);

  const pageConfig = getPageConfig(props.mode);

  return (
    <StyledCatalogView>
      <div className="CatalogView__header">
        <div className="CatalogView__header_text">{pageConfig.title}</div>
      </div>

      {props.mode == "products" && (
        <div className="CatalogView__search_box">
          <StyledTextField
            onChange={searchTextChanged}
            id="input-with-sx"
            placeholder="Search Item"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      )}
      <div className="CatalogView__grid">
        <Table
          columns={columns}
          mode={props.mode ?? "products"}
          data={products}
          getProductQuantityInCart={getQuantityInCart}
          getKeyRow={getKeyRow}
        />
      </div>
      <LoadingSpinner isVisible={isLoading} />
    </StyledCatalogView>
  );
};

export default CatalogView;
