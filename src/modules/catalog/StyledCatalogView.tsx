import styled from "styled-components";

const StyledCatalogView = styled.div`
  .CatalogView__header {
    display: flex;
    align-items: center;

    margin-inline: 8px;
    margin-block: 16px;

    margin: 16px 24px;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
    color: #555;

    .CatalogView__header_text {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .CatalogView__search_box {
    padding: 0px 24px 0px 24px;
  }

  .CatalogView__grid {
    margin: 24px;

    .CatalogView__grid_productImage {
      width: 60px;
      object-fit: contain;
    }

    .CatalogView__grid_addToCart {
      cursor: pointer;
    }
  }
`;

export default StyledCatalogView;
