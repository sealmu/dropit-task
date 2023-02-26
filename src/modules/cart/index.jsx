// import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import useCartData from "./hooks/useCartData";
import routesApp from "../../contexts/navigation/routesApp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavbarLink = styled(Link)`
  display: block;
  text-decoration: none;
  cursor: pointer;
`;

const CartSum = styled.span`
  background: darkgreen;
  border-radius: 10px;
  padding: 4px 7px;
  font-size: 14px;
  color: white;
  margin-right: 6px;
`;

const Cart = () => {
  const cartData = useCartData();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "10px",
        height: "100%",
      }}
    >
      <NavbarLink to={routesApp.getCart()}>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {cartData.total != 0 && (
              <CartSum>${cartData.total.toFixed(2)}</CartSum>
            )}
            <ShoppingCartOutlinedIcon
              style={{ color: "black" }}
            ></ShoppingCartOutlinedIcon>
          </div>
        </div>
      </NavbarLink>
    </div>
  );
};

export default Cart;
