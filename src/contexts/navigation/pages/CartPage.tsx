import styled from "styled-components";
import Summary from "../../../modules/cart/summary";

import CatalogView from "../../../modules/catalog";
import { screens } from "../../../tools/constants";

const Container = styled.div`
  display: flex;

  @media only screen and (${screens.lg}) {
    && {
      flex-direction: column;
    }
  }
`;

const CartPage = () => {
  return (
    <Container>
      <div className="catalog" style={{ flexGrow: 1 }}>
        <CatalogView mode="cart" />
      </div>
      <div className="summary" style={{ minWidth: "300px" }}>
        <Summary></Summary>
      </div>
    </Container>
  );
};

export default CartPage;
