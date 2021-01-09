import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 7vh;
  padding: 1.5vh 6vw;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;

export default function HeaderWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
