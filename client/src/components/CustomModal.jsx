import React from "react";
import styled from "styled-components";

export const Modal = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0rem 2rem;
  overflow: hidden;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
`;

const CustomModal = ({ children, show, toggleModal }) => {
  return (
    <Modal show={show} onClick={toggleModal}>
      <Container onClick={(e) => e.stopPropagation()}>{children}</Container>
    </Modal>
  );
};

export default CustomModal;
