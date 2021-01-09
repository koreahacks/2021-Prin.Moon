import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.h2`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #502600;
`;

export default function SubTitle({ children, className }) {
  return <StyledSubTitle className={className}>{children}</StyledSubTitle>;
}
