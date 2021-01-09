import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 15px;
`;

export default function Input({ value, onChange, placeholder, className }) {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
