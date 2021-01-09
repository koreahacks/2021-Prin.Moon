import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 15px;
  resize: none;
  height: 18.5vh;
  font-family: "Noto Sans KR", sans-serif;

  ::placeholder,
  ::-webkit-input-placeholder {
    text-align: center;
    line-height: 18.5vh;
    font-family: "Noto Sans KR", sans-serif;
  }
  :-ms-input-placeholder {
    text-align: center;
    line-height: 18.5vh;
    font-family: "Noto Sans KR", sans-serif;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function TextArea({ value, onChange, placeholder, className }) {
  return <StyledTextArea placeholder={placeholder} className={className} />;
}
