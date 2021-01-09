import React from "react";
import styled from "styled-components";
import SpinnerSvg from "../assets/Spinner.svg";

export default function Spinner() {
  return (
    <StyledLoadingSpinner>
      <img src={SpinnerSvg} alt="loading.." />
    </StyledLoadingSpinner>
  );
}
const StyledLoadingSpinner = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  padding-top: calc(51px + 1rem);
  padding-bottom: 150px;
  justify-content: center;
  align-items: center;

  img {
    height: 8rem;
  }
`;
