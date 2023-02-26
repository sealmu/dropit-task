import React, { FC } from "react";
import styled from "styled-components";

import { CircularProgress } from "@mui/material";

interface Props {
  isVisible: boolean;
}

const LoadingSpinner: FC<Props> = ({ isVisible }) => {
  return isVisible ? (
    <StyledSpinner>
      <div className="Spinner__overlay" />

      <CircularProgress className="Spinner__main" />
    </StyledSpinner>
  ) : (
    <div />
  );
};

const StyledSpinner = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;

  .Spinner__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background-color: #000000;

    opacity: 0.4;
  }

  .Spinner__main {
    color: #000000;
  }
`;

export default LoadingSpinner;
