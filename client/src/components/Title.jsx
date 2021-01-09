import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  display: block;
  font-size: 25px;
  font-weight: bold;
  color: #202020;
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
