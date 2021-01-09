import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function ListContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
