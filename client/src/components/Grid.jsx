import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 0 6vw;
`;

export default function Grid({ children }) {
  return <ContentWrapper>{children}</ContentWrapper>;
}
