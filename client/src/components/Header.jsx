import React from "react";
import styled from "styled-components";
const HeaderStyle = styled.div`
  background-color: white;
  height: 50%;
  width: 100%;
  font-size: 5vw;
  font-weight: bold;
  padding: 5vw;
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
export default function Header(props) {
  return <HeaderStyle>{props.title}</HeaderStyle>;
}
