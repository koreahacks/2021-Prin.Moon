import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffae6715;
`;

export default function Background({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
