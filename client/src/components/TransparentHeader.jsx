import React from "react";
import styled from "styled-components";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Close } from "@styled-icons/ionicons-outline/Close";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 7vh;
  padding: 1.5vh 6vw;
  background-color: transparent;
`;

const ArrowIcon = styled(ArrowBack)`
  display: block;
  width: 3vh;
  height: 3vh;
  color: #ac5910;
`;
const CloseIcon = styled(Close)`
  display: block;
  width: 3vh;
  height: 3vh;
  color: #ac5910;
`;

export default function TransparentHeader({ type, ...props }) {
  return (
    <Wrapper>
      {type === "Arrow" ? (
        <ArrowIcon onClick={props.onClick} />
      ) : (
        <CloseIcon onClick={props.onClick} />
      )}
    </Wrapper>
  );
}
