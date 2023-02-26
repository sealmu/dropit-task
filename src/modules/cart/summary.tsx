// import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import useCartData from "./hooks/useCartData";
import routesApp from "../../contexts/navigation/routesApp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { height } from "@mui/system";
import Modal from "../../tools/ui_components/modal";
import { useState } from "react";
import { emptyCart } from "../../store/slices/cart";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  border: 1px grey solid;
  background: #eee;
  border-radius: 5px;
`;

const dictionary = {
  subtottal: "Subtotal",
  shipping: "Shipping",
  total: "Total",
  checkout: "Checkout",
};

const getShippingCost = () => {
  return 0;
};

const Summary = () => {
  const { total } = useCartData();

  const dispatch = useDispatch();
  let history = useHistory();

  const [modalHeader, setModalHeader] = useState(<div>Checkout Completed</div>);
  const [modalContent, setModalHContent] = useState(
    <div style={{ margin: "30px 100px" }}>Thanks for buying!</div>,
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
    history.push("/catalog");
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const onCheckout = () => {
    openModal();
    dispatch(emptyCart());
  };

  return (
    <div style={total ? { margin: "30px 24px" } : { margin: "0px 24px" }}>
      <Container>
        <div style={{ padding: "15px" }}>
          <div
            style={{
              fontWeight: "bold",
              paddingBottom: "20px",
              borderBottom: "1px lightgrey solid",
              marginBottom: "10px",
            }}
          >
            Order Summary
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{ fontSize: "15px", color: "#888", padding: "5px 0px" }}
            >
              {dictionary.subtottal}:
            </div>
            <div>${total.toFixed(2)}</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{ fontSize: "15px", color: "#888", padding: "5px 0px" }}
            >
              {dictionary.shipping}:
            </div>
            <div>${getShippingCost()}</div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid lightgrey",
            padding: "15px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{dictionary.total}:</div>
          <div>${total.toFixed(2)}</div>
        </div>
      </Container>
      <div>
        <Button
          onClick={onCheckout}
          disabled={total == 0}
          variant="contained"
          color="success"
          style={{ width: "100%", marginTop: "15px" }}
        >
          {dictionary.checkout}
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        header={modalHeader}
        content={modalContent}
        onClose={closeModal}
      ></Modal>
    </div>
  );
};

export default Summary;
